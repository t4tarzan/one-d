'use client';

import { useState, useEffect, useRef } from 'react';
import { AudioRecorder as AudioRecorderLib, convertToWav16kHz, formatDuration } from '@/lib/audio';
import { logger } from '@/lib/logger';
import { Mic, Square, Trash2 } from 'lucide-react';

interface AudioRecorderProps {
  onRecordingComplete?: (audioBlob: Blob, duration: number) => void;
  onRecordingCancel?: () => void;
  maxDuration?: number;
}

export function AudioRecorder({ 
  onRecordingComplete, 
  onRecordingCancel,
  maxDuration = 300 
}: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const recorderRef = useRef<AudioRecorderLib | null>(null);
  const cleanupAudioLevelRef = useRef<(() => void) | null>(null);
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (cleanupAudioLevelRef.current) {
        cleanupAudioLevelRef.current();
      }
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
      }
      if (recorderRef.current?.isRecording()) {
        recorderRef.current.cancelRecording();
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      setError(null);
      const recorder = new AudioRecorderLib({ maxDuration });
      recorderRef.current = recorder;

      await recorder.requestPermission();
      await recorder.startRecording();

      setIsRecording(true);
      setDuration(0);

      // Start audio level monitoring
      cleanupAudioLevelRef.current = recorder.getAudioLevel((level) => {
        setAudioLevel(level);
      });

      // Update duration every 100ms
      durationIntervalRef.current = setInterval(() => {
        if (recorderRef.current) {
          setDuration(recorderRef.current.getCurrentDuration());
        }
      }, 100);

      logger.info('Recording started');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to start recording';
      setError(errorMessage);
      logger.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    if (!recorderRef.current) return;

    try {
      setIsProcessing(true);

      // Stop audio level monitoring
      if (cleanupAudioLevelRef.current) {
        cleanupAudioLevelRef.current();
        cleanupAudioLevelRef.current = null;
      }

      // Stop duration timer
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
        durationIntervalRef.current = null;
      }

      const result = await recorderRef.current.stopRecording();
      setIsRecording(false);
      setAudioLevel(0);

      logger.info('Recording stopped', { duration: result.duration, size: result.size });

      // Convert to 16kHz WAV
      const wavBlob = await convertToWav16kHz(result.blob);
      
      if (onRecordingComplete) {
        onRecordingComplete(wavBlob, result.duration);
      }

      setDuration(0);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to stop recording';
      setError(errorMessage);
      logger.error('Failed to stop recording', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const cancelRecording = () => {
    if (!recorderRef.current) return;

    // Stop audio level monitoring
    if (cleanupAudioLevelRef.current) {
      cleanupAudioLevelRef.current();
      cleanupAudioLevelRef.current = null;
    }

    // Stop duration timer
    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current);
      durationIntervalRef.current = null;
    }

    recorderRef.current.cancelRecording();
    setIsRecording(false);
    setDuration(0);
    setAudioLevel(0);

    if (onRecordingCancel) {
      onRecordingCancel();
    }

    logger.info('Recording cancelled');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
      {error && (
        <div className="w-full p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-800 dark:text-red-200 text-sm">
          {error}
        </div>
      )}

      {/* Audio Level Visualization */}
      {isRecording && (
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Recording
            </span>
          </div>
          <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-100"
              style={{ width: `${audioLevel}%` }}
            />
          </div>
        </div>
      )}

      {/* Duration Display */}
      {isRecording && (
        <div className="text-3xl font-mono font-bold text-zinc-900 dark:text-zinc-100">
          {formatDuration(duration)}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-3">
        {!isRecording ? (
          <button
            onClick={startRecording}
            disabled={isProcessing}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-full font-medium transition-colors"
          >
            <Mic className="w-5 h-5" />
            Start Recording
          </button>
        ) : (
          <>
            <button
              onClick={stopRecording}
              disabled={isProcessing}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-full font-medium transition-colors"
            >
              <Square className="w-5 h-5" />
              {isProcessing ? 'Processing...' : 'Stop'}
            </button>
            <button
              onClick={cancelRecording}
              disabled={isProcessing}
              className="flex items-center gap-2 px-4 py-3 bg-zinc-200 hover:bg-zinc-300 disabled:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:disabled:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-full font-medium transition-colors"
            >
              <Trash2 className="w-5 h-5" />
              Cancel
            </button>
          </>
        )}
      </div>

      {/* Max Duration Info */}
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Maximum recording duration: {formatDuration(maxDuration)}
      </p>
    </div>
  );
}
