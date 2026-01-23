import OpenAI from 'openai';
import { logger } from './logger';

export interface TranscriptionOptions {
  language?: string;
  prompt?: string;
  temperature?: number;
  model?: 'whisper-1';
}

export interface TranscriptionResult {
  text: string;
  language?: string;
  duration?: number;
  segments?: Array<{
    id: number;
    start: number;
    end: number;
    text: string;
  }>;
}

class WhisperService {
  private openai: OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }

    this.openai = new OpenAI({ apiKey });
  }

  /**
   * Transcribe audio file using OpenAI Whisper API
   */
  async transcribe(
    audioFile: File | Blob,
    options: TranscriptionOptions = {}
  ): Promise<TranscriptionResult> {
    try {
      const startTime = Date.now();
      
      logger.info('Starting transcription', {
        size: audioFile.size,
        type: audioFile.type,
        language: options.language,
      });

      // Convert Blob to File if needed
      const file = audioFile instanceof File 
        ? audioFile 
        : new File([audioFile], 'audio.wav', { type: 'audio/wav' });

      // Call OpenAI Whisper API
      const transcription = await this.openai.audio.transcriptions.create({
        file,
        model: options.model || 'whisper-1',
        language: options.language,
        prompt: options.prompt,
        temperature: options.temperature || 0,
        response_format: 'verbose_json',
      });

      const duration = Date.now() - startTime;

      logger.info('Transcription completed', {
        duration,
        textLength: transcription.text.length,
        language: transcription.language,
      });

      return {
        text: transcription.text,
        language: transcription.language,
        duration: transcription.duration,
        segments: transcription.segments?.map((seg: any) => ({
          id: seg.id,
          start: seg.start,
          end: seg.end,
          text: seg.text,
        })),
      };
    } catch (error) {
      logger.error('Transcription failed', error);
      
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          throw new Error('OpenAI API key is invalid or missing');
        } else if (error.message.includes('rate limit')) {
          throw new Error('Rate limit exceeded. Please try again later.');
        } else if (error.message.includes('file size')) {
          throw new Error('Audio file is too large. Maximum size is 25MB.');
        }
      }
      
      throw new Error('Failed to transcribe audio. Please try again.');
    }
  }

  /**
   * Translate audio to English using OpenAI Whisper API
   */
  async translate(
    audioFile: File | Blob,
    options: Omit<TranscriptionOptions, 'language'> = {}
  ): Promise<TranscriptionResult> {
    try {
      const startTime = Date.now();
      
      logger.info('Starting translation', {
        size: audioFile.size,
        type: audioFile.type,
      });

      const file = audioFile instanceof File 
        ? audioFile 
        : new File([audioFile], 'audio.wav', { type: 'audio/wav' });

      const translation = await this.openai.audio.translations.create({
        file,
        model: options.model || 'whisper-1',
        prompt: options.prompt,
        temperature: options.temperature || 0,
        response_format: 'verbose_json',
      });

      const duration = Date.now() - startTime;

      logger.info('Translation completed', {
        duration,
        textLength: translation.text.length,
      });

      return {
        text: translation.text,
        language: 'en',
        duration: translation.duration,
        segments: translation.segments?.map((seg: any) => ({
          id: seg.id,
          start: seg.start,
          end: seg.end,
          text: seg.text,
        })),
      };
    } catch (error) {
      logger.error('Translation failed', error);
      throw new Error('Failed to translate audio. Please try again.');
    }
  }

  /**
   * Check if Whisper API is available
   */
  async healthCheck(): Promise<boolean> {
    try {
      // Simple check to verify API key is valid
      await this.openai.models.list();
      return true;
    } catch (error) {
      logger.error('Whisper health check failed', error);
      return false;
    }
  }
}

// Singleton instance
let whisperService: WhisperService | null = null;

export function getWhisperService(): WhisperService {
  if (!whisperService) {
    whisperService = new WhisperService();
  }
  return whisperService;
}

/**
 * Estimate transcription cost based on audio duration
 * OpenAI charges $0.006 per minute
 */
export function estimateTranscriptionCost(durationSeconds: number): number {
  const minutes = durationSeconds / 60;
  return minutes * 0.006;
}

/**
 * Validate audio file for transcription
 */
export function validateAudioFile(file: File | Blob): { valid: boolean; error?: string } {
  const maxSize = 25 * 1024 * 1024; // 25MB
  
  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'Audio file exceeds maximum size of 25MB',
    };
  }

  const validTypes = [
    'audio/wav',
    'audio/wave',
    'audio/x-wav',
    'audio/mpeg',
    'audio/mp3',
    'audio/mp4',
    'audio/webm',
    'audio/ogg',
  ];

  if (file.type && !validTypes.includes(file.type)) {
    return {
      valid: false,
      error: `Unsupported audio format: ${file.type}. Supported formats: WAV, MP3, MP4, WebM, OGG`,
    };
  }

  return { valid: true };
}
