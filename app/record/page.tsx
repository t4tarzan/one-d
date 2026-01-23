'use client';

import { useState } from 'react';
import { AudioRecorder } from '@/components/audio/audio-recorder';
import { AudioPlayer } from '@/components/audio/audio-player';
import { isAudioRecordingSupported } from '@/lib/audio';
import { AlertCircle } from 'lucide-react';

export default function RecordPage() {
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const [transcription, setTranscription] = useState<string>('');
  const [isTranscribing, setIsTranscribing] = useState(false);

  const handleRecordingComplete = async (audioBlob: Blob, duration: number) => {
    setRecordedAudio(audioBlob);
    setRecordingDuration(duration);
    
    // Auto-transcribe
    await transcribeAudio(audioBlob);
  };

  const handleRecordingCancel = () => {
    setRecordedAudio(null);
    setRecordingDuration(0);
    setTranscription('');
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    setIsTranscribing(true);
    setTranscription('');

    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.wav');
      formData.append('model', 'whisper-1');
      // Optional: add userId if you have user authentication
      // formData.append('userId', currentUser.id);

      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Transcription failed');
      }

      const data = await response.json();
      
      if (data.success && data.text) {
        setTranscription(data.text);
      } else {
        setTranscription('No transcription available');
      }
    } catch (error) {
      console.error('Transcription error:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Transcription failed. Please try again.';
      setTranscription(`Error: ${errorMessage}`);
    } finally {
      setIsTranscribing(false);
    }
  };

  const startNewRecording = () => {
    setRecordedAudio(null);
    setRecordingDuration(0);
    setTranscription('');
  };

  if (!isAudioRecordingSupported()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-4">
        <div className="max-w-md p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Audio Recording Not Supported
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Your browser does not support audio recording. Please use a modern browser like Chrome, Firefox, or Safari.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Voice Recording
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Record your voice and get instant transcription
          </p>
        </div>

        <div className="space-y-6">
          {/* Audio Recorder */}
          {!recordedAudio && (
            <AudioRecorder
              onRecordingComplete={handleRecordingComplete}
              onRecordingCancel={handleRecordingCancel}
              maxDuration={300}
            />
          )}

          {/* Audio Player */}
          {recordedAudio && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Recording ({recordingDuration.toFixed(1)}s)
                </h2>
                <button
                  onClick={startNewRecording}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  New Recording
                </button>
              </div>
              <AudioPlayer audioBlob={recordedAudio} />
            </div>
          )}

          {/* Transcription */}
          {(isTranscribing || transcription) && (
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Transcription
              </h2>
              {isTranscribing ? (
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <span>Transcribing audio...</span>
                </div>
              ) : (
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap">
                    {transcription}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Instructions */}
          {!recordedAudio && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                How to use:
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
                <li>Click "Start Recording" to begin</li>
                <li>Speak clearly into your microphone</li>
                <li>Click "Stop" when finished</li>
                <li>Your audio will be automatically transcribed</li>
                <li>Maximum recording duration: 5 minutes</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
