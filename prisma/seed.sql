-- Seed development tasks for Whispr Linux project
-- Run with: psql "postgresql://neondb_owner:npg_VtuoP6KmaT1J@ep-ancient-cell-ahlqtk0m-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require" -f prisma/seed.sql

-- Clear existing data
DELETE FROM "TaskVerification";
DELETE FROM "TaskNote";
DELETE FROM "DevelopmentTask";

-- PHASE 1: Core Infrastructure
INSERT INTO "DevelopmentTask" (id, phase, "taskNumber", title, description, status, priority, "filesCreated", "filesModified", "dependsOn", "blockedBy", "estimatedHours", "createdAt", "updatedAt")
VALUES 
('task_1_1', 1, 1, 'Database Setup', 'Run Prisma migration and create seed data for development. Verify all models are created correctly in Neon PostgreSQL.', 'PENDING', 'CRITICAL', '{}', '{}', '{}', '{}', 2, NOW(), NOW()),
('task_1_2', 1, 2, 'API Routes Foundation', 'Create API routes for auth, users, transcriptions, settings, and analytics. Implement CRUD operations with proper error handling.', 'PENDING', 'CRITICAL', '{}', '{}', '{task_1_1}', '{}', 8, NOW(), NOW()),
('task_1_3', 1, 3, 'Error Handling & Middleware', 'Set up global error handlers, API middleware, CORS configuration, and logging utilities.', 'PENDING', 'HIGH', '{}', '{}', '{task_1_2}', '{}', 4, NOW(), NOW());

-- PHASE 2: Audio Recording
INSERT INTO "DevelopmentTask" (id, phase, "taskNumber", title, description, status, priority, "filesCreated", "filesModified", "dependsOn", "blockedBy", "estimatedHours", "createdAt", "updatedAt")
VALUES 
('task_2_1', 2, 1, 'Audio Utilities Library', 'Create lib/audio.ts with MediaRecorder API integration, microphone permission handling, and audio format conversion to 16kHz WAV.', 'PENDING', 'CRITICAL', '{}', '{}', '{task_1_3}', '{}', 6, NOW(), NOW()),
('task_2_2', 2, 2, 'Audio Recording UI', 'Build record button component, recording status indicator (red dot), audio level visualization, and stop/cancel controls.', 'PENDING', 'HIGH', '{}', '{}', '{task_2_1}', '{}', 5, NOW(), NOW()),
('task_2_3', 2, 3, 'Audio Testing & Validation', 'Test audio recording on different browsers, verify audio quality (16kHz, 16-bit), and test file size limits (max 5 minutes).', 'PENDING', 'MEDIUM', '{}', '{}', '{task_2_2}', '{}', 3, NOW(), NOW());

-- PHASE 3: STT Integration
INSERT INTO "DevelopmentTask" (id, phase, "taskNumber", title, description, status, priority, "filesCreated", "filesModified", "dependsOn", "blockedBy", "estimatedHours", "createdAt", "updatedAt")
VALUES 
('task_3_1', 3, 1, 'Whisper Model Setup', 'Research and integrate Whisper.cpp Node.js bindings, download base model (142MB), create lib/whisper.ts wrapper with progress tracking.', 'PENDING', 'CRITICAL', '{}', '{}', '{task_2_3}', '{}', 8, NOW(), NOW()),
('task_3_2', 3, 2, 'Transcription API Endpoint', 'Build POST /api/transcribe endpoint with audio file upload, Whisper processing, database storage, and response handling.', 'PENDING', 'CRITICAL', '{}', '{}', '{task_3_1}', '{}', 6, NOW(), NOW()),
('task_3_3', 3, 3, 'End-to-End STT Testing', 'Test complete audio → text pipeline with various audio samples, languages, and edge cases. Verify accuracy and error handling.', 'PENDING', 'HIGH', '{}', '{}', '{task_3_2}', '{}', 4, NOW(), NOW());

-- PHASE 4: Core Features
INSERT INTO "DevelopmentTask" (id, phase, "taskNumber", title, description, status, priority, "filesCreated", "filesModified", "dependsOn", "blockedBy", "estimatedHours", "createdAt", "updatedAt")
VALUES 
('task_4_1', 4, 1, 'Global Hotkey System', 'Implement Ctrl+Shift+Space global hotkey listener with customization support and conflict handling.', 'PENDING', 'CRITICAL', '{}', '{}', '{task_3_3}', '{}', 6, NOW(), NOW()),
('task_4_2', 4, 2, 'Auto-Paste Functionality', 'Integrate Clipboard API for auto-paste to active window with confirmation option and failure handling.', 'PENDING', 'HIGH', '{}', '{}', '{task_4_1}', '{}', 4, NOW(), NOW()),
('task_4_3', 4, 3, 'Transcription History Page', 'Build /transcriptions page with list view, search/filter, detail view, delete/edit functionality, and export to txt/md.', 'PENDING', 'HIGH', '{}', '{}', '{task_4_2}', '{}', 8, NOW(), NOW()),
('task_4_4', 4, 4, 'System Tray Integration', 'Add system tray icon with quick actions menu, show/hide window, and quit application (if using Electron).', 'PENDING', 'MEDIUM', '{}', '{}', '{task_4_3}', '{}', 5, NOW(), NOW());

-- PHASE 5: User Settings
INSERT INTO "DevelopmentTask" (id, phase, "taskNumber", title, description, status, priority, "filesCreated", "filesModified", "dependsOn", "blockedBy", "estimatedHours", "createdAt", "updatedAt")
VALUES 
('task_5_1', 5, 1, 'Settings Schema Definition', 'Define zod schemas for all user settings including model selection, language, hotkey, theme, auto-launch, and notifications.', 'PENDING', 'HIGH', '{}', '{}', '{task_4_4}', '{}', 3, NOW(), NOW()),
('task_5_2', 5, 2, 'Settings UI Page', 'Build /settings page using shadcn/ui form components and react-hook-form with all setting options.', 'PENDING', 'HIGH', '{}', '{}', '{task_5_1}', '{}', 6, NOW(), NOW()),
('task_5_3', 5, 3, 'Settings Persistence & Application', 'Implement save/load from database via /api/settings and apply settings in real-time without restart.', 'PENDING', 'HIGH', '{}', '{}', '{task_5_2}', '{}', 4, NOW(), NOW());

-- PHASE 6: Analytics Dashboard
INSERT INTO "DevelopmentTask" (id, phase, "taskNumber", title, description, status, priority, "filesCreated", "filesModified", "dependsOn", "blockedBy", "estimatedHours", "createdAt", "updatedAt")
VALUES 
('task_6_1', 6, 1, 'Analytics Data Collection', 'Implement tracking for transcription count, total duration, average accuracy, and active users.', 'PENDING', 'MEDIUM', '{}', '{}', '{task_5_3}', '{}', 4, NOW(), NOW()),
('task_6_2', 6, 2, 'Dashboard UI with Recharts', 'Create /dashboard page with line chart (transcriptions over time), bar chart (usage by language), pie chart (model usage), and stats cards.', 'PENDING', 'MEDIUM', '{}', '{}', '{task_6_1}', '{}', 8, NOW(), NOW()),
('task_6_3', 6, 3, 'Reusable Chart Components', 'Create reusable chart components with responsive design and data refresh functionality.', 'PENDING', 'LOW', '{}', '{}', '{task_6_2}', '{}', 4, NOW(), NOW());

-- PHASE 7: Advanced Features
INSERT INTO "DevelopmentTask" (id, phase, "taskNumber", title, description, status, priority, "filesCreated", "filesModified", "dependsOn", "blockedBy", "estimatedHours", "createdAt", "updatedAt")
VALUES 
('task_7_1', 7, 1, 'Custom Vocabulary Management', 'Build vocabulary management UI with add/edit/delete words, pronunciation hints, and Whisper context integration.', 'PENDING', 'MEDIUM', '{}', '{}', '{task_6_3}', '{}', 6, NOW(), NOW()),
('task_7_2', 7, 2, 'Real-time Transcription Mode', 'Implement streaming audio to Whisper with live text overlay window, edit-while-speaking, and performance optimization.', 'PENDING', 'HIGH', '{}', '{}', '{task_7_1}', '{}', 10, NOW(), NOW()),
('task_7_3', 7, 3, 'Voice Commands System', 'Implement basic voice commands (New line, Delete that, Send message) with command parser and action executor.', 'PENDING', 'MEDIUM', '{}', '{}', '{task_7_2}', '{}', 8, NOW(), NOW()),
('task_7_4', 7, 4, 'Multi-language Auto-detection', 'Implement automatic language detection with seamless switching and language indicator UI.', 'PENDING', 'MEDIUM', '{}', '{}', '{task_7_3}', '{}', 6, NOW(), NOW());

-- PHASE 8: UI Polish & Optimization
INSERT INTO "DevelopmentTask" (id, phase, "taskNumber", title, description, status, priority, "filesCreated", "filesModified", "dependsOn", "blockedBy", "estimatedHours", "createdAt", "updatedAt")
VALUES 
('task_8_1', 8, 1, 'Animations & Transitions', 'Add framer-motion animations, smooth transitions, loading states, empty states with illustrations, and tooltips.', 'PENDING', 'LOW', '{}', '{}', '{task_7_4}', '{}', 6, NOW(), NOW()),
('task_8_2', 8, 2, 'Responsive Design Optimization', 'Optimize layouts for mobile, tablet, and desktop with proper scaling and touch interactions.', 'PENDING', 'MEDIUM', '{}', '{}', '{task_8_1}', '{}', 5, NOW(), NOW()),
('task_8_3', 8, 3, 'Performance Optimization', 'Implement code splitting, lazy loading, image optimization, and bundle size reduction.', 'PENDING', 'HIGH', '{}', '{}', '{task_8_2}', '{}', 6, NOW(), NOW()),
('task_8_4', 8, 4, 'Accessibility Implementation', 'Add keyboard navigation, screen reader support, ARIA labels, and high contrast mode.', 'PENDING', 'HIGH', '{}', '{}', '{task_8_3}', '{}', 5, NOW(), NOW()),
('task_8_5', 8, 5, 'Final Testing & Bug Fixes', 'Cross-browser testing, performance profiling, user acceptance testing, and comprehensive bug fixes.', 'PENDING', 'CRITICAL', '{}', '{}', '{task_8_4}', '{}', 10, NOW(), NOW());

-- Add verification checkpoints for critical tasks
INSERT INTO "TaskVerification" (id, "taskId", "verificationType", description, status, "testCommand", "createdAt", "updatedAt")
VALUES 
('ver_1_1_1', 'task_1_1', 'BUILD_TEST', 'Run prisma migrate dev and verify no errors', 'PENDING', 'npx prisma migrate dev', NOW(), NOW()),
('ver_1_1_2', 'task_1_1', 'INTEGRATION_TEST', 'Verify all tables exist in Neon database', 'PENDING', 'npx prisma db pull', NOW(), NOW()),
('ver_3_2_1', 'task_3_2', 'INTEGRATION_TEST', 'Upload audio file and verify transcription is returned', 'PENDING', 'curl -X POST -F audio=@test.wav http://localhost:3000/api/transcribe', NOW(), NOW()),
('ver_8_5_1', 'task_8_5', 'INTEGRATION_TEST', 'Run full test suite and ensure all tests pass', 'PENDING', 'npm test', NOW(), NOW()),
('ver_8_5_2', 'task_8_5', 'BUILD_TEST', 'Final production build succeeds', 'PENDING', 'npm run build', NOW(), NOW());

-- Display summary
SELECT 
    phase,
    COUNT(*) as task_count,
    SUM("estimatedHours") as total_hours
FROM "DevelopmentTask"
GROUP BY phase
ORDER BY phase;

SELECT '✅ Successfully seeded ' || COUNT(*) || ' development tasks!' as result
FROM "DevelopmentTask";
