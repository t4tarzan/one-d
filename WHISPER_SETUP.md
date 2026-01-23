# Whisper STT Setup Guide

This application uses OpenAI's Whisper API for speech-to-text transcription.

## Prerequisites

1. **OpenAI API Account**
   - Sign up at https://platform.openai.com/
   - Create an API key at https://platform.openai.com/api-keys

2. **Environment Variables**
   - Copy `.env.example` to `env.local`
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY="sk-your-api-key-here"
     ```

## Features

- **Model**: Whisper-1 (OpenAI's production Whisper model)
- **Supported Formats**: WAV, MP3, MP4, WebM, OGG
- **Max File Size**: 25MB
- **Languages**: 90+ languages supported
- **Response Format**: Verbose JSON with segments and timestamps

## API Endpoints

### POST /api/transcribe

Transcribe audio file to text.

**Request:**
```bash
curl -X POST http://localhost:3000/api/transcribe \
  -F "audio=@recording.wav" \
  -F "model=whisper-1" \
  -F "language=en" \
  -F "userId=user_123"
```

**Response:**
```json
{
  "success": true,
  "text": "Transcribed text here...",
  "language": "en",
  "duration": 15.5,
  "segments": [
    {
      "id": 0,
      "start": 0.0,
      "end": 5.2,
      "text": "First segment..."
    }
  ],
  "transcriptionId": "clx..."
}
```

### GET /api/transcribe

Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "service": "whisper-api",
  "model": "whisper-1"
}
```

## Usage in Application

### 1. Record Audio
- Navigate to `/record`
- Click "Start Recording"
- Speak into your microphone
- Click "Stop" when finished

### 2. Automatic Transcription
- Audio is automatically converted to 16kHz WAV
- Sent to OpenAI Whisper API
- Transcription displayed in real-time

### 3. Database Storage
- Transcriptions are saved to the database
- Linked to user accounts (if userId provided)
- Includes metadata: language, duration, model used

## Cost Estimation

OpenAI Whisper API pricing:
- **$0.006 per minute** of audio

Examples:
- 1 minute: $0.006
- 5 minutes: $0.03
- 30 minutes: $0.18
- 1 hour: $0.36

## Supported Languages

Whisper supports 90+ languages including:
- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Portuguese (pt)
- Dutch (nl)
- Russian (ru)
- Chinese (zh)
- Japanese (ja)
- Korean (ko)
- Arabic (ar)
- Hindi (hi)
- And many more...

## Error Handling

The API handles various error scenarios:

1. **Missing API Key**
   - Error: "OpenAI API key is invalid or missing"
   - Solution: Add OPENAI_API_KEY to env.local

2. **Rate Limit**
   - Error: "Rate limit exceeded. Please try again later."
   - Solution: Wait and retry, or upgrade OpenAI plan

3. **File Too Large**
   - Error: "Audio file exceeds maximum size of 25MB"
   - Solution: Record shorter audio or compress file

4. **Unsupported Format**
   - Error: "Unsupported audio format"
   - Solution: Use WAV, MP3, MP4, WebM, or OGG

## Testing

Test the transcription endpoint:

```bash
# Health check
curl http://localhost:3000/api/transcribe

# Transcribe a test file
curl -X POST http://localhost:3000/api/transcribe \
  -F "audio=@test.wav"
```

## Production Deployment

1. **Set Environment Variables**
   - Add OPENAI_API_KEY to your hosting platform
   - Vercel: Settings → Environment Variables
   - Add to production environment

2. **Monitor Usage**
   - Check OpenAI dashboard for API usage
   - Set up billing alerts
   - Monitor costs in OpenAI account

3. **Rate Limiting**
   - Implement rate limiting for your users
   - Use the built-in middleware in `lib/middleware.ts`
   - Default: 100 requests per minute per IP

## Alternative: Local Whisper

For offline/local transcription, consider:
- **whisper.cpp**: C++ implementation
- **faster-whisper**: Optimized Python implementation
- **Whisper JAX**: JAX-based implementation

Note: Local models require:
- Model download (142MB - 2.9GB depending on size)
- GPU for optimal performance
- More complex setup and deployment

## Troubleshooting

**Issue**: "OpenAI API key is invalid"
- Solution: Verify API key in env.local
- Check key hasn't expired
- Ensure no extra spaces in key

**Issue**: "Transcription takes too long"
- Solution: Audio is processed in cloud
- Typical: 5-10 seconds for 1 minute of audio
- Check network connection

**Issue**: "No transcription returned"
- Solution: Check audio quality
- Ensure audio contains speech
- Try different audio file

## Resources

- [OpenAI Whisper API Docs](https://platform.openai.com/docs/guides/speech-to-text)
- [Whisper Model Card](https://github.com/openai/whisper/blob/main/model-card.md)
- [Supported Languages](https://github.com/openai/whisper#available-models-and-languages)
