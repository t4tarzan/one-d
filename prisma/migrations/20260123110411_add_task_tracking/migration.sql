-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'CODE_WRITTEN', 'TESTING', 'VERIFIED', 'COMPLETED', 'BLOCKED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "TaskPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "VerificationType" AS ENUM ('UNIT_TEST', 'INTEGRATION_TEST', 'BUILD_TEST', 'MANUAL_TEST', 'CODE_REVIEW', 'PERFORMANCE_TEST', 'SECURITY_TEST');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'RUNNING', 'PASSED', 'FAILED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "NoteType" AS ENUM ('GENERAL', 'BUG', 'IMPROVEMENT', 'BLOCKER', 'QUESTION');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "whisperModel" TEXT NOT NULL DEFAULT 'base',
    "language" TEXT NOT NULL DEFAULT 'en',
    "hotkey" TEXT NOT NULL DEFAULT 'Ctrl+Shift+Space',
    "autoLaunch" BOOLEAN NOT NULL DEFAULT false,
    "theme" TEXT NOT NULL DEFAULT 'system',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transcription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "audioPath" TEXT,
    "text" TEXT NOT NULL,
    "language" TEXT,
    "model" TEXT NOT NULL,
    "duration" DOUBLE PRECISION,
    "accuracy" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transcription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VocabularyEntry" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "pronunciation" TEXT,
    "context" TEXT,
    "frequency" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VocabularyEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Analytics" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalTranscriptions" INTEGER NOT NULL DEFAULT 0,
    "totalDuration" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "avgAccuracy" DOUBLE PRECISION,
    "activeUsers" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DevelopmentTask" (
    "id" TEXT NOT NULL,
    "phase" INTEGER NOT NULL,
    "taskNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TaskStatus" NOT NULL DEFAULT 'PENDING',
    "priority" "TaskPriority" NOT NULL DEFAULT 'MEDIUM',
    "filesCreated" TEXT[],
    "filesModified" TEXT[],
    "linesOfCode" INTEGER NOT NULL DEFAULT 0,
    "codeWritten" BOOLEAN NOT NULL DEFAULT false,
    "codeVerified" BOOLEAN NOT NULL DEFAULT false,
    "testsWritten" BOOLEAN NOT NULL DEFAULT false,
    "testsPassed" BOOLEAN NOT NULL DEFAULT false,
    "buildSuccessful" BOOLEAN NOT NULL DEFAULT false,
    "dependsOn" TEXT[],
    "blockedBy" TEXT[],
    "estimatedHours" DOUBLE PRECISION,
    "actualHours" DOUBLE PRECISION,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DevelopmentTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskVerification" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "verificationType" "VerificationType" NOT NULL,
    "description" TEXT NOT NULL,
    "status" "VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "testCommand" TEXT,
    "expectedOutput" TEXT,
    "actualOutput" TEXT,
    "errorMessage" TEXT,
    "passed" BOOLEAN NOT NULL DEFAULT false,
    "verifiedBy" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TaskVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskNote" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "noteType" "NoteType" NOT NULL DEFAULT 'GENERAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TaskNote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserSettings_userId_key" ON "UserSettings"("userId");

-- CreateIndex
CREATE INDEX "Transcription_userId_idx" ON "Transcription"("userId");

-- CreateIndex
CREATE INDEX "Transcription_createdAt_idx" ON "Transcription"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "VocabularyEntry_word_key" ON "VocabularyEntry"("word");

-- CreateIndex
CREATE INDEX "Analytics_date_idx" ON "Analytics"("date");

-- CreateIndex
CREATE INDEX "DevelopmentTask_status_idx" ON "DevelopmentTask"("status");

-- CreateIndex
CREATE INDEX "DevelopmentTask_phase_idx" ON "DevelopmentTask"("phase");

-- CreateIndex
CREATE UNIQUE INDEX "DevelopmentTask_phase_taskNumber_key" ON "DevelopmentTask"("phase", "taskNumber");

-- CreateIndex
CREATE INDEX "TaskVerification_taskId_idx" ON "TaskVerification"("taskId");

-- CreateIndex
CREATE INDEX "TaskVerification_status_idx" ON "TaskVerification"("status");

-- CreateIndex
CREATE INDEX "TaskNote_taskId_idx" ON "TaskNote"("taskId");

-- AddForeignKey
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transcription" ADD CONSTRAINT "Transcription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskVerification" ADD CONSTRAINT "TaskVerification_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "DevelopmentTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskNote" ADD CONSTRAINT "TaskNote_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "DevelopmentTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;
