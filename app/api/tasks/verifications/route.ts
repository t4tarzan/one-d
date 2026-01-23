import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const createVerificationSchema = z.object({
  taskId: z.string(),
  verificationType: z.enum(['UNIT_TEST', 'INTEGRATION_TEST', 'BUILD_TEST', 'MANUAL_TEST', 'CODE_REVIEW', 'PERFORMANCE_TEST', 'SECURITY_TEST']),
  description: z.string(),
  testCommand: z.string().optional(),
  expectedOutput: z.string().optional(),
});

const updateVerificationSchema = z.object({
  status: z.enum(['PENDING', 'RUNNING', 'PASSED', 'FAILED', 'SKIPPED']).optional(),
  actualOutput: z.string().optional(),
  errorMessage: z.string().optional(),
  passed: z.boolean().optional(),
  verifiedBy: z.string().optional(),
  verifiedAt: z.string().datetime().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('taskId');
    const id = searchParams.get('id');

    if (id) {
      const verification = await prisma.taskVerification.findUnique({
        where: { id },
        include: {
          task: {
            select: {
              id: true,
              phase: true,
              taskNumber: true,
              title: true,
            },
          },
        },
      });

      if (!verification) {
        return NextResponse.json(
          { error: 'Verification not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(verification);
    }

    if (taskId) {
      const verifications = await prisma.taskVerification.findMany({
        where: { taskId },
        orderBy: { createdAt: 'asc' },
      });

      return NextResponse.json(verifications);
    }

    return NextResponse.json(
      { error: 'Task ID or Verification ID is required' },
      { status: 400 }
    );
  } catch (error) {
    console.error('GET /api/tasks/verifications error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch verifications' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createVerificationSchema.parse(body);

    const verification = await prisma.taskVerification.create({
      data: validatedData,
      include: {
        task: {
          select: {
            id: true,
            phase: true,
            taskNumber: true,
            title: true,
          },
        },
      },
    });

    return NextResponse.json(verification, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      );
    }

    console.error('POST /api/tasks/verifications error:', error);
    return NextResponse.json(
      { error: 'Failed to create verification' },
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
        { error: 'Verification ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const validatedData = updateVerificationSchema.parse(body);

    // Convert datetime string to Date object
    const updateData: any = { ...validatedData };
    if (updateData.verifiedAt) {
      updateData.verifiedAt = new Date(updateData.verifiedAt);
    }

    const verification = await prisma.taskVerification.update({
      where: { id },
      data: updateData,
      include: {
        task: {
          select: {
            id: true,
            phase: true,
            taskNumber: true,
            title: true,
          },
        },
      },
    });

    return NextResponse.json(verification);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      );
    }

    console.error('PATCH /api/tasks/verifications error:', error);
    return NextResponse.json(
      { error: 'Failed to update verification' },
      { status: 500 }
    );
  }
}
