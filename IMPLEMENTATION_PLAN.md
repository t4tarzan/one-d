# Whispr Linux - Phased Implementation Plan

**Based on**: PRD.md  
**Strategy**: Foundation-first approach to avoid redundancy  
**Timeline**: 12 weeks to MVP

---

## 🏗️ PHASE 1: Core Infrastructure (Week 1-2)
**Goal**: Set up foundational architecture that everything else builds upon

### Database & Backend
- [x] Prisma schema created (User, UserSettings, Transcription, VocabularyEntry, Analytics)
- [ ] Run initial migration: `npx prisma migrate dev --name init`
- [ ] Create database seed file for test data
- [ ] Set up Prisma client in API routes

### API Routes Foundation
- [ ] `/api/auth/*` - Authentication endpoints (if needed)
- [ ] `/api/users/*` - User CRUD operations
- [ ] `/api/transcriptions/*` - Transcription CRUD
- [ ] `/api/settings/*` - User settings management
- [ ] `/api/analytics/*` - Analytics data endpoints

### Environment & Configuration
- [ ] Verify all env variables in `env.local`
- [ ] Add Resend API key for emails
- [ ] Configure CORS and API middleware
- [ ] Set up error handling utilities

### File Structure
```
app/
├── api/
│   ├── auth/
│   ├── users/
│   ├── transcriptions/
│   ├── settings/
│   └── analytics/
├── components/
│   └── ui/ (shadcn components)
├── lib/
│   ├── prisma.ts ✅
│   ├── utils.ts ✅
│   ├── audio.ts
│   └── whisper.ts
└── types/
    └── index.ts
```

**Deliverable**: Working API layer with database operations

---

## 🎤 PHASE 2: Audio Recording System (Week 3)
**Goal**: Implement reliable audio capture without STT yet

### Audio Capture
- [ ] Create `lib/audio.ts` - Audio recording utilities
- [ ] Implement browser MediaRecorder API
- [ ] Add microphone permission handling
- [ ] Create audio file storage (local/temp)
- [ ] Add audio format conversion (WAV, 16kHz)

### UI Components (Minimal)
- [ ] Simple record button component
- [ ] Recording status indicator (red dot)
- [ ] Audio level visualization (basic)
- [ ] Stop/Cancel controls

### Testing
- [ ] Test on different browsers
- [ ] Verify audio quality (16kHz, 16-bit)
- [ ] Test file size limits (max 5 minutes)

**Deliverable**: Working audio recording that saves to temp files

---

## 🤖 PHASE 3: STT Integration (Week 4-5)
**Goal**: Get Whisper working with recorded audio

### Whisper Setup
- [ ] Research Whisper.cpp Node.js bindings
- [ ] Download base Whisper model (142MB)
- [ ] Create `lib/whisper.ts` - Whisper wrapper
- [ ] Implement transcription function
- [ ] Add progress tracking

### API Integration
- [ ] `POST /api/transcribe` - Main transcription endpoint
- [ ] Handle audio file upload
- [ ] Process with Whisper
- [ ] Return transcribed text
- [ ] Save to database

### Error Handling
- [ ] Handle model loading errors
- [ ] Timeout for long audio
- [ ] Audio format validation
- [ ] Graceful fallbacks

**Deliverable**: End-to-end audio → text pipeline working

---

## ⚡ PHASE 4: Core Features (Week 6-7)
**Goal**: Implement MVP must-have features from PRD Tier 1

### Global Hotkey System
- [ ] Research hotkey libraries for web (or Electron if needed)
- [ ] Implement Ctrl+Shift+Space listener
- [ ] Add customizable hotkey settings
- [ ] Handle conflicts with system hotkeys

### Auto-Paste Functionality
- [ ] Clipboard API integration
- [ ] Auto-paste to active window
- [ ] Add paste confirmation option
- [ ] Handle paste failures

### Transcription History
- [ ] Create `/transcriptions` page
- [ ] List view with search/filter
- [ ] Individual transcription detail view
- [ ] Delete/Edit functionality
- [ ] Export to file (txt, md)

### System Tray (if Electron)
- [ ] System tray icon
- [ ] Quick actions menu
- [ ] Show/Hide window
- [ ] Quit application

**Deliverable**: Functional MVP with core workflow

---

## ⚙️ PHASE 5: User Settings & Preferences (Week 8)
**Goal**: Allow users to customize their experience

### Settings Page UI
- [ ] Create `/settings` page
- [ ] Use shadcn/ui form components
- [ ] Implement with react-hook-form + zod

### Settings Features
- [ ] **Model Selection**: tiny, base, small, medium, large
- [ ] **Language Selection**: Dropdown with 50+ languages
- [ ] **Hotkey Customization**: Key combination picker
- [ ] **Theme Toggle**: Light/Dark/System
- [ ] **Auto-launch**: Startup preference
- [ ] **Notification Settings**: Sound, visual alerts

### Persistence
- [ ] Save to database via `/api/settings`
- [ ] Load on app start
- [ ] Apply settings in real-time

**Deliverable**: Fully functional settings system

---

## 📊 PHASE 6: Analytics Dashboard (Week 9)
**Goal**: Visualize usage data with Recharts

### Analytics Collection
- [ ] Track transcription count
- [ ] Track total duration
- [ ] Calculate average accuracy
- [ ] Count active users (if multi-user)

### Dashboard UI
- [ ] Create `/dashboard` or `/analytics` page
- [ ] **Line Chart**: Transcriptions over time
- [ ] **Bar Chart**: Usage by language
- [ ] **Pie Chart**: Model usage distribution
- [ ] **Stats Cards**: Total transcriptions, hours saved, accuracy

### Recharts Implementation
- [ ] Install and configure Recharts ✅
- [ ] Create reusable chart components
- [ ] Add responsive design
- [ ] Implement data refresh

**Deliverable**: Visual analytics dashboard

---

## 🚀 PHASE 7: Advanced Features (Week 10-11)
**Goal**: Implement high-impact features from PRD Tier 2 & 3

### Custom Vocabulary
- [ ] Vocabulary management UI
- [ ] Add/Edit/Delete words
- [ ] Pronunciation hints
- [ ] Apply to Whisper context

### Real-time Transcription Mode
- [ ] Streaming audio to Whisper
- [ ] Live text overlay window
- [ ] Edit while speaking
- [ ] Performance optimization

### Voice Commands (Basic)
- [ ] "New line", "Delete that", "Send message"
- [ ] Command parser
- [ ] Action executor
- [ ] Custom command creation

### Multi-language Auto-detect
- [ ] Implement language detection
- [ ] Seamless switching
- [ ] Language indicator UI

**Deliverable**: Advanced features that differentiate the product

---

## 🎨 PHASE 8: UI Polish & Optimization (Week 12)
**Goal**: Final touches, no new features

### Visual Polish
- [ ] Add animations (framer-motion)
- [ ] Smooth transitions
- [ ] Loading states
- [ ] Empty states with illustrations
- [ ] Tooltips and help text

### Responsive Design
- [ ] Mobile optimization (if applicable)
- [ ] Tablet layouts
- [ ] Desktop scaling

### Performance
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Image optimization
- [ ] Bundle size reduction

### Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] ARIA labels
- [ ] High contrast mode

### Final Testing
- [ ] Cross-browser testing
- [ ] Performance profiling
- [ ] User acceptance testing
- [ ] Bug fixes

**Deliverable**: Production-ready application

---

## 📋 Implementation Rules

### ✅ DO
- Build each phase completely before moving to next
- Test thoroughly at each phase
- Commit working code frequently
- Reuse components from previous phases
- Keep code modular and maintainable

### ❌ DON'T
- Skip ahead to "fun" features
- Build UI before backend is ready
- Create duplicate components
- Hardcode values that should be configurable
- Ignore error handling

---

## 🎯 Success Criteria by Phase

| Phase | Success Metric |
|-------|---------------|
| Phase 1 | All API routes return 200, database queries work |
| Phase 2 | Can record 30s audio and save to file |
| Phase 3 | Audio file → accurate text in <5s |
| Phase 4 | Complete workflow: hotkey → record → transcribe → paste |
| Phase 5 | Settings persist and apply correctly |
| Phase 6 | Dashboard shows real usage data |
| Phase 7 | Advanced features work without breaking core |
| Phase 8 | App feels professional and polished |

---

## 📦 Dependencies by Phase

**Phase 1**: Prisma, Next.js API routes  
**Phase 2**: MediaRecorder API, node-record-lpcm16  
**Phase 3**: Whisper.cpp bindings  
**Phase 4**: Clipboard API, hotkey library  
**Phase 5**: react-hook-form, zod, shadcn/ui  
**Phase 6**: Recharts  
**Phase 7**: Advanced Whisper features  
**Phase 8**: framer-motion, optimization tools  

---

## 🚦 Current Status

- [x] Dependencies installed
- [x] Prisma schema created
- [ ] **NEXT**: Run database migration (Phase 1)

**Start with Phase 1 → Build foundation → Everything else follows naturally**
