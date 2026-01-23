# Whispr Linux - AI-Powered Speech-to-Text for Linux

> A privacy-first, offline speech-to-text application for Linux systems, powered by OpenAI Whisper.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform: Linux](https://img.shields.io/badge/Platform-Linux-blue.svg)](https://www.linux.org/)

## 🎯 Overview

Whispr Linux is an AI-powered speech-to-text desktop application designed specifically for Linux systems. Inspired by tools like Wispr Flow, it provides seamless voice-to-text transcription that works system-wide across any application.

### ✨ Key Features

- 🔒 **Privacy-First**: 100% offline processing using local Whisper models
- ⚡ **System-Wide**: Works in any application with global hotkey support
- 🎤 **High Accuracy**: Powered by OpenAI's Whisper AI model
- 📋 **Auto-Paste**: Automatically pastes transcribed text to active window
- 🎨 **Modern UI**: Beautiful, intuitive interface built with React and Tailwind CSS
- 📦 **Easy Install**: Distributed as AppImage for universal Linux compatibility
- 🌐 **Multi-Language**: Supports 99+ languages through Whisper
- ⚙️ **Customizable**: Configure hotkeys, models, and behavior

## 🏗️ Architecture

### Technology Stack

- **Desktop Framework**: Electron
- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **STT Engine**: Whisper.cpp (via Node.js bindings)
- **Audio Recording**: node-record-lpcm16
- **Global Hotkeys**: uiohook-napi / ioHook
- **Packaging**: electron-builder (AppImage)

### System Requirements

- **OS**: Linux (Ubuntu 20.04+, Fedora 35+, Arch, or compatible)
- **RAM**: 4GB minimum (8GB recommended for larger models)
- **Storage**: 2GB free space for models
- **Audio**: Working microphone
- **Dependencies**: ALSA or PulseAudio

## 🚀 Quick Start

### Installation

1. **Download the AppImage**:
   ```bash
   wget https://github.com/t4tarzan/one-d/releases/latest/download/whispr-linux.AppImage
   ```

2. **Make it executable**:
   ```bash
   chmod +x whispr-linux.AppImage
   ```

3. **Run the application**:
   ```bash
   ./whispr-linux.AppImage
   ```

### First-Time Setup

1. Launch Whispr Linux
2. Select your preferred Whisper model (base, small, medium, or large)
3. Configure your activation hotkey (default: `Ctrl+Shift+Space`)
4. Grant microphone permissions when prompted

### Usage

1. Press your configured hotkey anywhere in your system
2. Speak clearly into your microphone
3. Press the hotkey again to stop recording
4. Transcribed text will automatically paste into your active application

## 🛠️ Development

### Prerequisites

```bash
# Node.js 18+ and npm
node --version  # Should be 18.x or higher
npm --version

# Build tools for native modules
sudo apt-get install build-essential libasound2-dev
```

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/t4tarzan/one-d.git
cd one-d

# Install dependencies
npm install

# Download Whisper models
npm run download-models

# Start development server
npm run dev
```

### Project Structure

```
whispr-linux/
├── src/
│   ├── main/           # Electron main process
│   │   ├── index.ts    # Main entry point
│   │   ├── whisper.ts  # Whisper integration
│   │   ├── audio.ts    # Audio recording
│   │   └── hotkey.ts   # Global hotkey handler
│   ├── renderer/       # React frontend
│   │   ├── App.tsx     # Main React component
│   │   ├── components/ # UI components
│   │   └── styles/     # Tailwind styles
│   └── preload/        # Electron preload scripts
├── models/             # Whisper model files
├── build/              # Build configuration
└── dist/               # Compiled output
```

### Available Scripts

```bash
npm run dev          # Start development mode
npm run build        # Build for production
npm run package      # Create AppImage
npm run lint         # Run ESLint
npm run test         # Run tests
```

## 🔧 Configuration

### Whisper Models

Choose based on your hardware and accuracy needs:

| Model | Size | RAM | Speed | Accuracy |
|-------|------|-----|-------|----------|
| tiny  | 75MB | 1GB | Fastest | Good |
| base  | 142MB | 1GB | Fast | Better |
| small | 466MB | 2GB | Medium | Great |
| medium | 1.5GB | 5GB | Slow | Excellent |
| large | 2.9GB | 10GB | Slowest | Best |

### Hotkey Customization

Edit settings in the application or modify `~/.config/whispr-linux/config.json`:

```json
{
  "hotkey": "Ctrl+Shift+Space",
  "model": "base",
  "language": "auto",
  "autoPaste": true,
  "showNotifications": true
}
```

## 🌍 Supported Languages

Whispr Linux supports 99+ languages including:

English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, Korean, Arabic, Hindi, and many more.

## 📦 Building AppImage

```bash
# Install electron-builder
npm install -g electron-builder

# Build AppImage
npm run package:linux

# Output will be in dist/
ls dist/*.AppImage
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Roadmap

- [x] Basic speech-to-text functionality
- [x] Global hotkey support
- [x] AppImage packaging
- [ ] Custom vocabulary support
- [ ] Real-time transcription mode
- [ ] Multiple language detection
- [ ] Cloud sync for settings
- [ ] Wayland support improvements
- [ ] macOS and Windows ports

## 🐛 Troubleshooting

### Microphone not detected
```bash
# Check ALSA devices
arecord -l

# Test recording
arecord -d 5 test.wav
```

### Hotkey not working
- Ensure no other application is using the same hotkey
- Try running with sudo for testing (not recommended for production)
- Check X11/Wayland compatibility

### Model download fails
```bash
# Manually download models
cd models/
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenAI Whisper](https://github.com/openai/whisper) - The amazing STT model
- [whisper.cpp](https://github.com/ggerganov/whisper.cpp) - C++ implementation
- [Electron](https://www.electronjs.org/) - Cross-platform desktop framework
- Inspired by [Wispr Flow](https://www.wispr.ai/)

## 📧 Contact

- **GitHub**: [@t4tarzan](https://github.com/t4tarzan)
- **Issues**: [GitHub Issues](https://github.com/t4tarzan/one-d/issues)

---

Made with ❤️ for the Linux community
