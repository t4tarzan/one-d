import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const createTranscriptionSchema = z.object({
  userId: z.string(),
  text: z.string(),
  audioPath: z.string().optional(),
  language: z.string().optional(),
  model: z.string(),
  duration: z.number().optional(),
  accuracy: z.number().optional(),
});

const updateTranscriptionSchema = z.object({
  text: z.string().optional(),
  audioPath: z.string().optional(),
  language: z.string().optional(),
  accuracy: z.number().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const userId = searchParams.get('userId');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    if (id) {
      const transcription = await prisma.transcription.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
        },
      });

      if (!transcription) {
        return NextResponse.json(
          { error: 'Transcription not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(transcription);
    }

    const where = userId ? { userId } : {};

    const [transcriptions, total] = await Promise.all([
      prisma.transcription.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.transcription.count({ where }),
    ]);

    return NextResponse.json({
      transcriptions,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error('GET /api/transcriptions error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transcriptions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createTranscriptionSchema.parse(body);

    const transcription = await prisma.transcription.create({
      data: validatedData,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(transcription, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      );
    }

    console.error('POST /api/transcriptions error:', error);
    return NextResponse.json(
      { error: 'Failed to create transcription' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Transcription ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const validatedData = updateTranscriptionSchema.parse(body);

    const transcription = await prisma.transcription.update({
      where: { id },
      data: validatedData,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(transcription);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      );
    }

    console.error('PATCH /api/transcriptions error:', error);
    return NextResponse.json(
      { error: 'Failed to update transcription' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Transcription ID is required' },
        { status: 400 }
      );
    }

    await prisma.transcription.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE /api/transcriptions error:', error);
    return NextResponse.json(
      { error: 'Failed to delete transcription' },
      { status: 500 }
    );
  }
}
