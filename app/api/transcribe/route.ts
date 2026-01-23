import { NextRequest, NextResponse } from 'next/server';
import { getWhisperService, validateAudioFile } from '@/lib/whisper';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/logger';
import { handleError } from '@/lib/errors';

export const runtime = 'nodejs';
export const maxDuration = 60; // 60 seconds max execution time

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio') as File | null;
    const userId = formData.get('userId') as string | null;
    const language = formData.get('language') as string | undefined;
    const model = formData.get('model') as string | undefined;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      );
    }

    // Validate audio file
    const validation = validateAudioFile(audioFile);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    logger.info('Transcription request received', {
      fileName: audioFile.name,
      fileSize: audioFile.size,
      fileType: audioFile.type,
      userId,
      language,
    });

    // Get Whisper service
    const whisperService = getWhisperService();

    // Transcribe audio
    const result = await whisperService.transcribe(audioFile, {
      language,
      model: (model as 'whisper-1') || 'whisper-1',
    });

    logger.info('Transcription successful', {
      textLength: result.text.length,
      language: result.language,
      duration: result.duration,
    });

    // Store transcription in database if userId provided
    let transcription = null;
    if (userId) {
      try {
        transcription = await prisma.transcription.create({
          data: {
            userId,
            text: result.text,
            language: result.language || language || 'en',
            model: model || 'whisper-1',
            duration: result.duration,
            accuracy: null, // Can be calculated later if needed
          },
        });

        logger.info('Transcription saved to database', {
          transcriptionId: transcription.id,
          userId,
        });
      } catch (dbError) {
        logger.error('Failed to save transcription to database', dbError);
        // Continue even if database save fails
      }
    }

    return NextResponse.json({
      success: true,
      text: result.text,
      language: result.language,
      duration: result.duration,
      segments: result.segments,
      transcriptionId: transcription?.id,
    });

  } catch (error) {
    logger.error('Transcription endpoint error', error);
    return handleError(error);
  }
}

// Health check endpoint
export async function GET(request: NextRequest) {
  try {
    const whisperService = getWhisperService();
    const isHealthy = await whisperService.healthCheck();

    if (!isHealthy) {
      return NextResponse.json(
        { 
          status: 'unhealthy',
          message: 'Whisper API is not available',
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      status: 'healthy',
      service: 'whisper-api',
      model: 'whisper-1',
    });
  } catch (error) {
    logger.error('Health check failed', error);
    return NextResponse.json(
      { 
        status: 'unhealthy',
        error: 'Health check failed',
      },
      { status: 503 }
    );
  }
}
