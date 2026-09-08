import { relations } from 'drizzle-orm';
import {
  pgTable,
  pgEnum,
  uuid,
  varchar,
  text,
  integer,
  boolean,
  real,
  jsonb,
  timestamp,
} from 'drizzle-orm/pg-core';

export const subscriptionTierEnum = pgEnum('subscription_tier', ['free', 'pro', 'team', 'enterprise']);
export const academicLevelEnum = pgEnum('academic_level', ['high_school', 'undergraduate', 'masters', 'phd', 'postdoctoral']);
export const disciplineEnum = pgEnum('discipline', ['stem', 'humanities', 'social_sciences', 'business', 'law', 'medical', 'general']);
export const documentStatusEnum = pgEnum('document_status', ['draft', 'humanized', 'reviewed', 'exported']);
export const citationStyleEnum = pgEnum('citation_style', ['apa7', 'mla9', 'chicago17', 'ieee', 'harvard', 'vancouver', 'ama']);

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkId: varchar('clerk_id', { length: 255 }).unique().notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  firstName: varchar('first_name', { length: 255 }),
  lastName: varchar('last_name', { length: 255 }),
  avatarUrl: text('avatar_url'),
  university: varchar('university', { length: 255 }),
  major: varchar('major', { length: 255 }),
  subscriptionTier: subscriptionTierEnum('subscription_tier').default('free').notNull(),
  stripeCustomerId: varchar('stripe_customer_id', { length: 255 }),
  stripeSubscriptionId: varchar('stripe_subscription_id', { length: 255 }),
  wordsUsedThisMonth: integer('words_used_this_month').default(0).notNull(),
  monthlyWordLimit: integer('monthly_word_limit').default(2500).notNull(),
  voiceProfileEnabled: boolean('voice_profile_enabled').default(false).notNull(),
  preferredAcademicLevel: academicLevelEnum('preferred_academic_level'),
  preferredDiscipline: disciplineEnum('preferred_discipline'),
  preferredCitationStyle: citationStyleEnum('preferred_citation_style'),
  onboardingCompleted: boolean('onboarding_completed').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const documents = pgTable('documents', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  originalText: text('original_text').notNull(),
  humanizedText: text('humanized_text'),
  academicLevel: academicLevelEnum('academic_level'),
  discipline: disciplineEnum('discipline'),
  toneSettings: jsonb('tone_settings'), // { formality, creativity, assertiveness }
  wordCount: integer('word_count'),
  status: documentStatusEnum('status').default('draft').notNull(),
  aiDetectionScore: real('ai_detection_score'), // 0-1
  detectionHeatmap: jsonb('detection_heatmap'), // array of { sentenceIndex, score, text }
  humanizationVersion: integer('humanization_version').default(1).notNull(),
  courseTag: varchar('course_tag', { length: 255 }),
  semesterTag: varchar('semester_tag', { length: 255 }),
  isArchived: boolean('is_archived').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const documentVersions = pgTable('document_versions', {
  id: uuid('id').primaryKey().defaultRandom(),
  documentId: uuid('document_id').references(() => documents.id, { onDelete: 'cascade' }).notNull(),
  versionNumber: integer('version_number').notNull(),
  originalText: text('original_text').notNull(),
  humanizedText: text('humanized_text'),
  aiDetectionScore: real('ai_detection_score'),
  snapshotReason: varchar('snapshot_reason', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const citations = pgTable('citations', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  documentId: uuid('document_id').references(() => documents.id, { onDelete: 'set null' }),
  rawInput: text('raw_input').notNull(),
  doi: varchar('doi', { length: 255 }),
  title: text('title'),
  authors: jsonb('authors'), // array of { firstName, lastName }
  journal: varchar('journal', { length: 255 }),
  year: integer('year'),
  volume: varchar('volume', { length: 255 }),
  issue: varchar('issue', { length: 255 }),
  pages: varchar('pages', { length: 255 }),
  url: text('url'),
  accessedDate: timestamp('accessed_date'),
  formattedCitations: jsonb('formatted_citations'), // record of styles
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const researchPapers = pgTable('research_papers', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  fileUrl: text('file_url').notNull(),
  fileSizeBytes: integer('file_size_bytes').notNull(),
  mimeType: varchar('mime_type', { length: 255 }),
  extractedText: text('extracted_text'),
  summary: jsonb('summary'), // { tldr, keyArguments, methodology, strengths, weaknesses, citation }
  flashcards: jsonb('flashcards'), // array of { question, answer }
  processingStatus: text('processing_status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const voiceProfiles = pgTable('voice_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).unique().notNull(),
  sampleDocuments: jsonb('sample_documents'),
  styleAnalysis: jsonb('style_analysis'), // { avgSentenceLength, vocabularyComplexity, passiveVoiceRatio, avgParagraphLength, commonTransitions, commaFrequency, preferredConnectors, formalityScore }
  embeddingVector: real('embedding_vector').array(),
  isCalibrated: boolean('is_calibrated').default(false).notNull(),
  lastCalibratedAt: timestamp('last_calibrated_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const usageLogs = pgTable('usage_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  action: varchar('action', { length: 255 }).notNull(),
  wordsProcessed: integer('words_processed'),
  tokensUsed: integer('tokens_used'),
  llmProvider: varchar('llm_provider', { length: 255 }),
  llmModel: varchar('llm_model', { length: 255 }),
  latencyMs: integer('latency_ms'),
  success: boolean('success').default(true).notNull(),
  errorMessage: text('error_message'),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many, one }) => ({
  documents: many(documents),
  citations: many(citations),
  researchPapers: many(researchPapers),
  usageLogs: many(usageLogs),
  voiceProfile: one(voiceProfiles),
}));

export const documentsRelations = relations(documents, ({ one, many }) => ({
  user: one(users, {
    fields: [documents.userId],
    references: [users.id],
  }),
  versions: many(documentVersions),
  citations: many(citations),
}));

export const documentVersionsRelations = relations(documentVersions, ({ one }) => ({
  document: one(documents, {
    fields: [documentVersions.documentId],
    references: [documents.id],
  }),
}));

export const citationsRelations = relations(citations, ({ one }) => ({
  user: one(users, {
    fields: [citations.userId],
    references: [users.id],
  }),
  document: one(documents, {
    fields: [citations.documentId],
    references: [documents.id],
  }),
}));

export const researchPapersRelations = relations(researchPapers, ({ one }) => ({
  user: one(users, {
    fields: [researchPapers.userId],
    references: [users.id],
  }),
}));

export const voiceProfilesRelations = relations(voiceProfiles, ({ one }) => ({
  user: one(users, {
    fields: [voiceProfiles.userId],
    references: [users.id],
  }),
}));

export const usageLogsRelations = relations(usageLogs, ({ one }) => ({
  user: one(users, {
    fields: [usageLogs.userId],
    references: [users.id],
  }),
}));
