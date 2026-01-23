import { config } from 'dotenv';
config({ path: './env.local' });

import { prisma } from '../lib/prisma';

const developmentTasks = [
  // PHASE 1: Core Infrastructure
  {
    phase: 1,
    taskNumber: 1,
    title: "Database Setup",
    description: "Run Prisma migration and create seed data for development. Verify all models are created correctly in Neon PostgreSQL.",
    priority: "CRITICAL" as const,
    estimatedHours: 2,
    dependsOn: [],
    verifications: [
      {
        verificationType: "BUILD_TEST" as const,
        description: "Run prisma migrate dev and verify no errors",
        testCommand: "npx prisma migrate dev",
      },
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Verify all tables exist in Neon database",
        testCommand: "npx prisma db pull",
      },
    ],
  },
  {
    phase: 1,
    taskNumber: 2,
    title: "API Routes Foundation",
    description: "Create API routes for auth, users, transcriptions, settings, and analytics. Implement CRUD operations with proper error handling.",
    priority: "CRITICAL" as const,
    estimatedHours: 8,
    dependsOn: ["1.1"],
    verifications: [
      {
        verificationType: "UNIT_TEST" as const,
        description: "Test each API endpoint returns correct status codes",
        testCommand: "npm test -- api",
      },
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Verify database operations work correctly",
      },
    ],
  },
  {
    phase: 1,
    taskNumber: 3,
    title: "Error Handling & Middleware",
    description: "Set up global error handlers, API middleware, CORS configuration, and logging utilities.",
    priority: "HIGH" as const,
    estimatedHours: 4,
    dependsOn: ["1.2"],
    verifications: [
      {
        verificationType: "UNIT_TEST" as const,
        description: "Test error handlers catch and format errors correctly",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Trigger various error scenarios and verify responses",
      },
    ],
  },

  // PHASE 2: Audio Recording
  {
    phase: 2,
    taskNumber: 1,
    title: "Audio Utilities Library",
    description: "Create lib/audio.ts with MediaRecorder API integration, microphone permission handling, and audio format conversion to 16kHz WAV.",
    priority: "CRITICAL" as const,
    estimatedHours: 6,
    dependsOn: ["1.3"],
    verifications: [
      {
        verificationType: "UNIT_TEST" as const,
        description: "Test audio recording functions",
        testCommand: "npm test -- audio.test",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Record 30s audio and verify file format is 16kHz WAV",
      },
    ],
  },
  {
    phase: 2,
    taskNumber: 2,
    title: "Audio Recording UI",
    description: "Build record button component, recording status indicator (red dot), audio level visualization, and stop/cancel controls.",
    priority: "HIGH" as const,
    estimatedHours: 5,
    dependsOn: ["2.1"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test UI components render and respond to user actions",
      },
      {
        verificationType: "BUILD_TEST" as const,
        description: "Verify build succeeds with new components",
        testCommand: "npm run build",
      },
    ],
  },
  {
    phase: 2,
    taskNumber: 3,
    title: "Audio Testing & Validation",
    description: "Test audio recording on different browsers, verify audio quality (16kHz, 16-bit), and test file size limits (max 5 minutes).",
    priority: "MEDIUM" as const,
    estimatedHours: 3,
    dependsOn: ["2.2"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test on Chrome, Firefox, Safari",
      },
      {
        verificationType: "PERFORMANCE_TEST" as const,
        description: "Verify 5-minute recording doesn't exceed size limits",
      },
    ],
  },

  // PHASE 3: STT Integration
  {
    phase: 3,
    taskNumber: 1,
    title: "Whisper Model Setup",
    description: "Research and integrate Whisper.cpp Node.js bindings, download base model (142MB), create lib/whisper.ts wrapper with progress tracking.",
    priority: "CRITICAL" as const,
    estimatedHours: 8,
    dependsOn: ["2.3"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Load Whisper model and verify it initializes correctly",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test transcription with sample audio file",
      },
    ],
  },
  {
    phase: 3,
    taskNumber: 2,
    title: "Transcription API Endpoint",
    description: "Build POST /api/transcribe endpoint with audio file upload, Whisper processing, database storage, and response handling.",
    priority: "CRITICAL" as const,
    estimatedHours: 6,
    dependsOn: ["3.1"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Upload audio file and verify transcription is returned",
        testCommand: "curl -X POST -F 'audio=@test.wav' http://localhost:3000/api/transcribe",
      },
      {
        verificationType: "PERFORMANCE_TEST" as const,
        description: "Verify 30s audio transcribes in <5 seconds",
      },
    ],
  },
  {
    phase: 3,
    taskNumber: 3,
    title: "End-to-End STT Testing",
    description: "Test complete audio → text pipeline with various audio samples, languages, and edge cases. Verify accuracy and error handling.",
    priority: "HIGH" as const,
    estimatedHours: 4,
    dependsOn: ["3.2"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Test with 10 different audio samples",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Verify transcription accuracy is >90%",
      },
    ],
  },

  // PHASE 4: Core Features
  {
    phase: 4,
    taskNumber: 1,
    title: "Global Hotkey System",
    description: "Implement Ctrl+Shift+Space global hotkey listener with customization support and conflict handling.",
    priority: "CRITICAL" as const,
    estimatedHours: 6,
    dependsOn: ["3.3"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test hotkey triggers recording from any application",
      },
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Verify hotkey customization persists",
      },
    ],
  },
  {
    phase: 4,
    taskNumber: 2,
    title: "Auto-Paste Functionality",
    description: "Integrate Clipboard API for auto-paste to active window with confirmation option and failure handling.",
    priority: "HIGH" as const,
    estimatedHours: 4,
    dependsOn: ["4.1"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test auto-paste works in different applications",
      },
      {
        verificationType: "UNIT_TEST" as const,
        description: "Test clipboard operations",
      },
    ],
  },
  {
    phase: 4,
    taskNumber: 3,
    title: "Transcription History Page",
    description: "Build /transcriptions page with list view, search/filter, detail view, delete/edit functionality, and export to txt/md.",
    priority: "HIGH" as const,
    estimatedHours: 8,
    dependsOn: ["4.2"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test CRUD operations on transcriptions",
      },
      {
        verificationType: "BUILD_TEST" as const,
        description: "Verify page builds and renders correctly",
        testCommand: "npm run build",
      },
    ],
  },
  {
    phase: 4,
    taskNumber: 4,
    title: "System Tray Integration",
    description: "Add system tray icon with quick actions menu, show/hide window, and quit application (if using Electron).",
    priority: "MEDIUM" as const,
    estimatedHours: 5,
    dependsOn: ["4.3"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test system tray appears and actions work",
      },
    ],
  },

  // PHASE 5: User Settings
  {
    phase: 5,
    taskNumber: 1,
    title: "Settings Schema Definition",
    description: "Define zod schemas for all user settings including model selection, language, hotkey, theme, auto-launch, and notifications.",
    priority: "HIGH" as const,
    estimatedHours: 3,
    dependsOn: ["4.4"],
    verifications: [
      {
        verificationType: "UNIT_TEST" as const,
        description: "Test schema validation with valid and invalid data",
        testCommand: "npm test -- settings.schema.test",
      },
    ],
  },
  {
    phase: 5,
    taskNumber: 2,
    title: "Settings UI Page",
    description: "Build /settings page using shadcn/ui form components and react-hook-form with all setting options.",
    priority: "HIGH" as const,
    estimatedHours: 6,
    dependsOn: ["5.1"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test all form fields render and validate correctly",
      },
      {
        verificationType: "BUILD_TEST" as const,
        description: "Verify settings page builds successfully",
        testCommand: "npm run build",
      },
    ],
  },
  {
    phase: 5,
    taskNumber: 3,
    title: "Settings Persistence & Application",
    description: "Implement save/load from database via /api/settings and apply settings in real-time without restart.",
    priority: "HIGH" as const,
    estimatedHours: 4,
    dependsOn: ["5.2"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Save settings and verify they persist after reload",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Change settings and verify they apply immediately",
      },
    ],
  },

  // PHASE 6: Analytics Dashboard
  {
    phase: 6,
    taskNumber: 1,
    title: "Analytics Data Collection",
    description: "Implement tracking for transcription count, total duration, average accuracy, and active users.",
    priority: "MEDIUM" as const,
    estimatedHours: 4,
    dependsOn: ["5.3"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Verify analytics data is collected and stored correctly",
      },
      {
        verificationType: "UNIT_TEST" as const,
        description: "Test analytics calculation functions",
      },
    ],
  },
  {
    phase: 6,
    taskNumber: 2,
    title: "Dashboard UI with Recharts",
    description: "Create /dashboard page with line chart (transcriptions over time), bar chart (usage by language), pie chart (model usage), and stats cards.",
    priority: "MEDIUM" as const,
    estimatedHours: 8,
    dependsOn: ["6.1"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Verify all charts render with real data",
      },
      {
        verificationType: "BUILD_TEST" as const,
        description: "Verify dashboard builds successfully",
        testCommand: "npm run build",
      },
    ],
  },
  {
    phase: 6,
    taskNumber: 3,
    title: "Reusable Chart Components",
    description: "Create reusable chart components with responsive design and data refresh functionality.",
    priority: "LOW" as const,
    estimatedHours: 4,
    dependsOn: ["6.2"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test charts on different screen sizes",
      },
      {
        verificationType: "UNIT_TEST" as const,
        description: "Test chart components with mock data",
      },
    ],
  },

  // PHASE 7: Advanced Features
  {
    phase: 7,
    taskNumber: 1,
    title: "Custom Vocabulary Management",
    description: "Build vocabulary management UI with add/edit/delete words, pronunciation hints, and Whisper context integration.",
    priority: "MEDIUM" as const,
    estimatedHours: 6,
    dependsOn: ["6.3"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Add custom words and verify they improve transcription accuracy",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test vocabulary CRUD operations",
      },
    ],
  },
  {
    phase: 7,
    taskNumber: 2,
    title: "Real-time Transcription Mode",
    description: "Implement streaming audio to Whisper with live text overlay window, edit-while-speaking, and performance optimization.",
    priority: "HIGH" as const,
    estimatedHours: 10,
    dependsOn: ["7.1"],
    verifications: [
      {
        verificationType: "PERFORMANCE_TEST" as const,
        description: "Verify real-time mode has <2s latency",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test continuous speech transcription",
      },
    ],
  },
  {
    phase: 7,
    taskNumber: 3,
    title: "Voice Commands System",
    description: "Implement basic voice commands ('New line', 'Delete that', 'Send message') with command parser and action executor.",
    priority: "MEDIUM" as const,
    estimatedHours: 8,
    dependsOn: ["7.2"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Test each voice command executes correctly",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test custom command creation",
      },
    ],
  },
  {
    phase: 7,
    taskNumber: 4,
    title: "Multi-language Auto-detection",
    description: "Implement automatic language detection with seamless switching and language indicator UI.",
    priority: "MEDIUM" as const,
    estimatedHours: 6,
    dependsOn: ["7.3"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Test with audio in multiple languages",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Verify language switching works mid-sentence",
      },
    ],
  },

  // PHASE 8: UI Polish & Optimization
  {
    phase: 8,
    taskNumber: 1,
    title: "Animations & Transitions",
    description: "Add framer-motion animations, smooth transitions, loading states, empty states with illustrations, and tooltips.",
    priority: "LOW" as const,
    estimatedHours: 6,
    dependsOn: ["7.4"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Verify animations are smooth and not janky",
      },
      {
        verificationType: "PERFORMANCE_TEST" as const,
        description: "Ensure animations don't impact performance",
      },
    ],
  },
  {
    phase: 8,
    taskNumber: 2,
    title: "Responsive Design Optimization",
    description: "Optimize layouts for mobile, tablet, and desktop with proper scaling and touch interactions.",
    priority: "MEDIUM" as const,
    estimatedHours: 5,
    dependsOn: ["8.1"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test on mobile, tablet, desktop screen sizes",
      },
    ],
  },
  {
    phase: 8,
    taskNumber: 3,
    title: "Performance Optimization",
    description: "Implement code splitting, lazy loading, image optimization, and bundle size reduction.",
    priority: "HIGH" as const,
    estimatedHours: 6,
    dependsOn: ["8.2"],
    verifications: [
      {
        verificationType: "PERFORMANCE_TEST" as const,
        description: "Run Lighthouse audit and achieve >90 score",
        testCommand: "npm run lighthouse",
      },
      {
        verificationType: "BUILD_TEST" as const,
        description: "Verify bundle size is optimized",
        testCommand: "npm run build && npm run analyze",
      },
    ],
  },
  {
    phase: 8,
    taskNumber: 4,
    title: "Accessibility Implementation",
    description: "Add keyboard navigation, screen reader support, ARIA labels, and high contrast mode.",
    priority: "HIGH" as const,
    estimatedHours: 5,
    dependsOn: ["8.3"],
    verifications: [
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Test with screen reader (NVDA/JAWS)",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Navigate entire app using only keyboard",
      },
    ],
  },
  {
    phase: 8,
    taskNumber: 5,
    title: "Final Testing & Bug Fixes",
    description: "Cross-browser testing, performance profiling, user acceptance testing, and comprehensive bug fixes.",
    priority: "CRITICAL" as const,
    estimatedHours: 10,
    dependsOn: ["8.4"],
    verifications: [
      {
        verificationType: "INTEGRATION_TEST" as const,
        description: "Run full test suite and ensure all tests pass",
        testCommand: "npm test",
      },
      {
        verificationType: "MANUAL_TEST" as const,
        description: "Complete end-to-end user flow testing",
      },
      {
        verificationType: "BUILD_TEST" as const,
        description: "Final production build succeeds",
        testCommand: "npm run build",
      },
    ],
  },
];

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing tasks
  await prisma.taskVerification.deleteMany();
  await prisma.taskNote.deleteMany();
  await prisma.developmentTask.deleteMany();

  console.log('✅ Cleared existing tasks');

  // Create tasks with verifications
  for (const taskData of developmentTasks) {
    const { verifications, ...task } = taskData;
    
    const createdTask = await prisma.developmentTask.create({
      data: {
        ...task,
        verifications: {
          create: verifications,
        },
      },
      include: {
        verifications: true,
      },
    });

    console.log(`✅ Created task ${createdTask.phase}.${createdTask.taskNumber}: ${createdTask.title}`);
  }

  console.log(`\n🎉 Successfully seeded ${developmentTasks.length} development tasks!`);
  console.log('📊 Task breakdown by phase:');
  
  const tasksByPhase = developmentTasks.reduce((acc, task) => {
    acc[task.phase] = (acc[task.phase] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  Object.entries(tasksByPhase).forEach(([phase, count]) => {
    console.log(`   Phase ${phase}: ${count} tasks`);
  });
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
