import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const createAnalyticsSchema = z.object({
  date: z.string().datetime().optional(),
  totalTranscriptions: z.number().int().default(0),
  totalDuration: z.number().default(0),
  avgAccuracy: z.number().optional(),
  activeUsers: z.number().int().default(0),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const limit = parseInt(searchParams.get('limit') || '30');

    const where: any = {};
    if (startDate || endDate) {
      where.date = {};
      if (startDate) where.date.gte = new Date(startDate);
      if (endDate) where.date.lte = new Date(endDate);
    }

    const analytics = await prisma.analytics.findMany({
      where,
      orderBy: { date: 'desc' },
      take: limit,
    });

    // Calculate summary statistics
    const summary = {
      totalTranscriptions: analytics.reduce((sum, a) => sum + a.totalTranscriptions, 0),
      totalDuration: analytics.reduce((sum, a) => sum + a.totalDuration, 0),
      avgAccuracy: analytics.length > 0
        ? analytics.reduce((sum, a) => sum + (a.avgAccuracy || 0), 0) / analytics.length
        : null,
      uniqueActiveUsers: Math.max(...analytics.map(a => a.activeUsers), 0),
      dataPoints: analytics.length,
    };

    return NextResponse.json({
      analytics,
      summary,
    });
  } catch (error) {
    console.error('GET /api/analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createAnalyticsSchema.parse(body);

    const analytics = await prisma.analytics.create({
      data: {
        ...validatedData,
        date: validatedData.date ? new Date(validatedData.date) : new Date(),
      },
    });

    return NextResponse.json(analytics, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      );
    }

    console.error('POST /api/analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to create analytics entry' },
      { status: 500 }
    );
  }
}

// Aggregate analytics for today
export async function PUT(request: NextRequest) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Get transcriptions for today
    const transcriptions = await prisma.transcription.findMany({
      where: {
        createdAt: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    // Get unique users for today
    const uniqueUsers = new Set(transcriptions.map(t => t.userId));

    // Calculate aggregates
    const totalTranscriptions = transcriptions.length;
    const totalDuration = transcriptions.reduce((sum, t) => sum + (t.duration || 0), 0);
    const avgAccuracy = transcriptions.length > 0
      ? transcriptions.reduce((sum, t) => sum + (t.accuracy || 0), 0) / transcriptions.length
      : null;

    // Find or create analytics for today
    const existing = await prisma.analytics.findFirst({
      where: {
        date: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    const analytics = existing
      ? await prisma.analytics.update({
          where: { id: existing.id },
          data: {
            totalTranscriptions,
            totalDuration,
            avgAccuracy,
            activeUsers: uniqueUsers.size,
          },
        })
      : await prisma.analytics.create({
          data: {
            date: today,
            totalTranscriptions,
            totalDuration,
            avgAccuracy,
            activeUsers: uniqueUsers.size,
          },
        });

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('PUT /api/analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to aggregate analytics' },
      { status: 500 }
    );
  }
}
