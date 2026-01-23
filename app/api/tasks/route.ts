import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const updateTaskSchema = z.object({
  status: z.enum(['PENDING', 'IN_PROGRESS', 'CODE_WRITTEN', 'TESTING', 'VERIFIED', 'COMPLETED', 'BLOCKED', 'SKIPPED']).optional(),
  codeWritten: z.boolean().optional(),
  codeVerified: z.boolean().optional(),
  testsWritten: z.boolean().optional(),
  testsPassed: z.boolean().optional(),
  buildSuccessful: z.boolean().optional(),
  filesCreated: z.array(z.string()).optional(),
  filesModified: z.array(z.string()).optional(),
  linesOfCode: z.number().int().optional(),
  actualHours: z.number().optional(),
  startedAt: z.string().datetime().optional(),
  completedAt: z.string().datetime().optional(),
  verifiedAt: z.string().datetime().optional(),
});

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
    const id = searchParams.get('id');
    const phase = searchParams.get('phase');
    const status = searchParams.get('status');

    if (id) {
      const task = await prisma.developmentTask.findUnique({
        where: { id },
        include: {
          verifications: {
            orderBy: { createdAt: 'asc' },
          },
          notes: {
            orderBy: { createdAt: 'desc' },
          },
        },
      });

      if (!task) {
        return NextResponse.json(
          { error: 'Task not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(task);
    }

    const where: any = {};
    if (phase) where.phase = parseInt(phase);
    if (status) where.status = status;

    const tasks = await prisma.developmentTask.findMany({
      where,
      include: {
        verifications: {
          orderBy: { createdAt: 'asc' },
        },
        _count: {
          select: { notes: true },
        },
      },
      orderBy: [
        { phase: 'asc' },
        { taskNumber: 'asc' },
      ],
    });

    // Calculate progress statistics
    const stats = {
      total: tasks.length,
      pending: tasks.filter(t => t.status === 'PENDING').length,
      inProgress: tasks.filter(t => t.status === 'IN_PROGRESS').length,
      codeWritten: tasks.filter(t => t.status === 'CODE_WRITTEN').length,
      testing: tasks.filter(t => t.status === 'TESTING').length,
      verified: tasks.filter(t => t.status === 'VERIFIED').length,
      completed: tasks.filter(t => t.status === 'COMPLETED').length,
      blocked: tasks.filter(t => t.status === 'BLOCKED').length,
      totalEstimatedHours: tasks.reduce((sum, t) => sum + (t.estimatedHours || 0), 0),
      totalActualHours: tasks.reduce((sum, t) => sum + (t.actualHours || 0), 0),
      completionRate: tasks.length > 0 ? (tasks.filter(t => t.status === 'COMPLETED').length / tasks.length) * 100 : 0,
    };

    return NextResponse.json({
      tasks,
      stats,
    });
  } catch (error) {
    console.error('GET /api/tasks error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
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
        { error: 'Task ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const validatedData = updateTaskSchema.parse(body);

    // Convert datetime strings to Date objects
    const updateData: any = { ...validatedData };
    if (updateData.startedAt) updateData.startedAt = new Date(updateData.startedAt);
    if (updateData.completedAt) updateData.completedAt = new Date(updateData.completedAt);
    if (updateData.verifiedAt) updateData.verifiedAt = new Date(updateData.verifiedAt);

    const task = await prisma.developmentTask.update({
      where: { id },
      data: updateData,
      include: {
        verifications: true,
        notes: {
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      );
    }

    console.error('PATCH /api/tasks error:', error);
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}

// Get current active task (for context loading)
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    if (action === 'current') {
      // Find the first task that's not completed
      const currentTask = await prisma.developmentTask.findFirst({
        where: {
          status: {
            in: ['IN_PROGRESS', 'CODE_WRITTEN', 'TESTING'],
          },
        },
        include: {
          verifications: true,
          notes: {
            orderBy: { createdAt: 'desc' },
            take: 10,
          },
        },
        orderBy: [
          { phase: 'asc' },
          { taskNumber: 'asc' },
        ],
      });

      if (!currentTask) {
        // No task in progress, find next pending task
        const nextTask = await prisma.developmentTask.findFirst({
          where: {
            status: 'PENDING',
          },
          include: {
            verifications: true,
          },
          orderBy: [
            { phase: 'asc' },
            { taskNumber: 'asc' },
          ],
        });

        return NextResponse.json({
          currentTask: null,
          nextTask,
          message: nextTask ? 'Ready to start next task' : 'All tasks completed!',
        });
      }

      return NextResponse.json({
        currentTask,
        message: 'Task in progress',
      });
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('POST /api/tasks error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
