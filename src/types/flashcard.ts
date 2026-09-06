export type MemoryLevel = "forgot" | "hard" | "normal" | "easy";
export type DeckStatus = "not_started" | "learning" | "completed";
export type DeckLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Flashcard {
  id: number;
  word: string;
  phonetic: string;
  meaning: string;
  definition?: string;
  example: string;
  exampleTranslation?: string;
  memoryLevel?: MemoryLevel;
}

export interface FlashcardDeck {
  id: number;
  title: string;
  description: string;
  topic: string;
  level: DeckLevel;
  totalCards: number;
  learnedCards: number;
  progress: number;
  status: DeckStatus;
  flashcards: Flashcard[];
}

export interface FlashcardAnswer {
  flashcardId: number;
  memoryLevel: MemoryLevel;
}

export interface FlashcardSession {
  deckId: number;
  totalCards: number;
  currentIndex: number;
  answers: FlashcardAnswer[];
  startedAt: Date;
}

export interface SessionResult {
  total: number;
  forgot: number;
  hard: number;
  normal: number;
  easy: number;
  timeSpentMinutes?: number;
}
