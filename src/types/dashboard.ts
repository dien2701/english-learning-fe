export type LearningType = 'FLASHCARD' | 'WRITING' | 'LISTENING' | 'EXAM';
export type ChartPeriod = 'week' | 'month';

export interface ContinueLearningItem {
  id: string;
  title: string;
  type: LearningType;
  progressPercent: number;
  lastStudiedAt: string;
  continuePath: string;
}

export interface CompletedLesson {
  id: string;
  title: string;
  type: LearningType;
  completedAt: string;
  score?: string;
}

export interface LearningChartPoint {
  label: string;
  studyMinutes: number;
  isPeak?: boolean;
}
