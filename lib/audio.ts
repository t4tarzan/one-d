import { logger } from './logger';

export interface AudioRecordingOptions {
  sampleRate?: number;
  channelCount?: number;
  audioBitsPerSecond?: number;
  maxDuration?: number; // in seconds
}

export interface AudioRecordingResult {
  blob: Blob;
  duration: number;
  size: number;
  mimeType: string;
}

export class AudioRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private stream: MediaStream | null = null;
  private startTime: number = 0;
  private maxDuration: number;
  private stopTimer: NodeJS.Timeout | null = null;

  constructor(private options: AudioRecordingOptions = {}) {
    this.maxDuration = options.maxDuration || 300; // 5 minutes default
  }

  /**
   * Request microphone permission and initialize audio stream
   */
  async requestPermission(): Promise<boolean> {
    try {
      logger.info('Requesting microphone permission');
      
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: this.options.sampleRate || 16000,
          channelCount: this.options.channelCount || 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      this.stream = stream;
      logger.info('Microphone permission granted');
      return true;
    } catch (error) {
      logger.error('Failed to get microphone permission', error);
      
      if (error instanceof Error) {
        if (error.name === 'NotAllowedError') {
          throw new Error('Microphone permission denied. Please allow microphone access in your browser settings.');
        } else if (error.name === 'NotFoundError') {
          throw new Error('No microphone found. Please connect a microphone and try again.');
        } else if (error.name === 'NotReadableError') {
          throw new Error('Microphone is already in use by another application.');
        }
      }
      
      throw new Error('Failed to access microphone. Please check your browser settings.');
    }
  }

  /**
   * Start recording audio
   */
  async startRecording(): Promise<void> {
    if (!this.stream) {
      await this.requestPermission();
    }

    if (!this.stream) {
      throw new Error('No audio stream available');
    }

    try {
      // Determine the best supported MIME type
      const mimeType = this.getSupportedMimeType();
      
      this.mediaRecorder = new MediaRecorder(this.stream, {
        mimeType,
        audioBitsPerSecond: this.options.audioBitsPerSecond || 128000,
      });

      this.audioChunks = [];
      this.startTime = Date.now();

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start(100); // Collect data every 100ms
      logger.info('Audio recording started', { mimeType });

      // Auto-stop after max duration
      this.stopTimer = setTimeout(() => {
        logger.warn('Max recording duration reached, stopping automatically');
        this.stopRecording();
      }, this.maxDuration * 1000);

    } catch (error) {
      logger.error('Failed to start recording', error);
      throw new Error('Failed to start audio recording');
    }
  }

  /**
   * Stop recording and return the audio blob
   */
  async stopRecording(): Promise<AudioRecordingResult> {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder) {
        reject(new Error('No active recording'));
        return;
      }

      if (this.stopTimer) {
        clearTimeout(this.stopTimer);
        this.stopTimer = null;
      }

      this.mediaRecorder.onstop = () => {
        const duration = (Date.now() - this.startTime) / 1000;
        const blob = new Blob(this.audioChunks, { 
          type: this.mediaRecorder!.mimeType 
        });

        logger.info('Audio recording stopped', {
          duration,
          size: blob.size,
          mimeType: blob.type,
        });

        resolve({
          blob,
          duration,
          size: blob.size,
          mimeType: blob.type,
        });

        this.cleanup();
      };

      this.mediaRecorder.onerror = (event) => {
        logger.error('MediaRecorder error', event);
        reject(new Error('Recording failed'));
        this.cleanup();
      };

      this.mediaRecorder.stop();
    });
  }

  /**
   * Cancel recording without saving
   */
  cancelRecording(): void {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    this.cleanup();
    logger.info('Audio recording cancelled');
  }

  /**
   * Get current recording duration in seconds
   */
  getCurrentDuration(): number {
    if (!this.startTime) return 0;
    return (Date.now() - this.startTime) / 1000;
  }

  /**
   * Check if currently recording
   */
  isRecording(): boolean {
    return this.mediaRecorder?.state === 'recording';
  }

  /**
   * Get audio level (volume) from the stream
   */
  getAudioLevel(callback: (level: number) => void): () => void {
    if (!this.stream) {
      throw new Error('No audio stream available');
    }

    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(this.stream);
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;
    microphone.connect(analyser);

    let animationId: number;

    const updateLevel = () => {
      analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
      const level = Math.min(100, (average / 128) * 100);
      callback(level);
      animationId = requestAnimationFrame(updateLevel);
    };

    updateLevel();

    // Return cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      microphone.disconnect();
      audioContext.close();
    };
  }

  /**
   * Clean up resources
   */
  private cleanup(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.startTime = 0;
  }

  /**
   * Get the best supported MIME type for recording
   */
  private getSupportedMimeType(): string {
    const types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/mp4',
    ];

    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }

    return 'audio/webm'; // Fallback
  }
}

/**
 * Convert audio blob to WAV format at 16kHz
 */
export async function convertToWav16kHz(audioBlob: Blob): Promise<Blob> {
  try {
    logger.info('Converting audio to 16kHz WAV');

    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioContext = new AudioContext({ sampleRate: 16000 });
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // Resample to 16kHz mono
    const offlineContext = new OfflineAudioContext(
      1, // mono
      audioBuffer.duration * 16000,
      16000
    );

    const source = offlineContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(offlineContext.destination);
    source.start();

    const renderedBuffer = await offlineContext.startRendering();
    const wavBlob = audioBufferToWav(renderedBuffer);

    logger.info('Audio converted to WAV', {
      originalSize: audioBlob.size,
      convertedSize: wavBlob.size,
      duration: audioBuffer.duration,
    });

    return wavBlob;
  } catch (error) {
    logger.error('Failed to convert audio to WAV', error);
    throw new Error('Audio conversion failed');
  }
}

/**
 * Convert AudioBuffer to WAV blob
 */
function audioBufferToWav(buffer: AudioBuffer): Blob {
  const length = buffer.length * buffer.numberOfChannels * 2;
  const arrayBuffer = new ArrayBuffer(44 + length);
  const view = new DataView(arrayBuffer);
  const channels: Float32Array[] = [];
  let offset = 0;
  let pos = 0;

  // Write WAV header
  const setUint16 = (data: number) => {
    view.setUint16(pos, data, true);
    pos += 2;
  };

  const setUint32 = (data: number) => {
    view.setUint32(pos, data, true);
    pos += 4;
  };

  // RIFF identifier
  setUint32(0x46464952);
  // File length
  setUint32(36 + length);
  // RIFF type
  setUint32(0x45564157);
  // Format chunk identifier
  setUint32(0x20746d66);
  // Format chunk length
  setUint32(16);
  // Sample format (PCM)
  setUint16(1);
  // Channel count
  setUint16(buffer.numberOfChannels);
  // Sample rate
  setUint32(buffer.sampleRate);
  // Byte rate
  setUint32(buffer.sampleRate * buffer.numberOfChannels * 2);
  // Block align
  setUint16(buffer.numberOfChannels * 2);
  // Bits per sample
  setUint16(16);
  // Data chunk identifier
  setUint32(0x61746164);
  // Data chunk length
  setUint32(length);

  // Get channel data
  for (let i = 0; i < buffer.numberOfChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }

  // Interleave and write PCM data
  while (pos < arrayBuffer.byteLength) {
    for (let i = 0; i < buffer.numberOfChannels; i++) {
      const sample = Math.max(-1, Math.min(1, channels[i][offset]));
      view.setInt16(pos, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      pos += 2;
    }
    offset++;
  }

  return new Blob([arrayBuffer], { type: 'audio/wav' });
}

/**
 * Check if browser supports audio recording
 */
export function isAudioRecordingSupported(): boolean {
  return !!(
    navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia &&
    window.MediaRecorder
  );
}

/**
 * Get audio file duration
 */
export async function getAudioDuration(blob: Blob): Promise<number> {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.addEventListener('loadedmetadata', () => {
      resolve(audio.duration);
    });
    audio.addEventListener('error', () => {
      reject(new Error('Failed to load audio'));
    });
    audio.src = URL.createObjectURL(blob);
  });
}

/**
 * Format duration in MM:SS format
 */
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
