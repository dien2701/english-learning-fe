import type { FlashcardDeck, Flashcard, SessionResult, FlashcardSession } from '../types/flashcard';
import { flashcardMockData } from '../data/flashcardMockData';

// Simulated latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const flashcardService = {
  getDecks: async (): Promise<FlashcardDeck[]> => {
    await delay(300);
    return [...flashcardMockData];
  },

  getDeckById: async (deckId: number): Promise<FlashcardDeck | undefined> => {
    await delay(300);
    return flashcardMockData.find(deck => deck.id === deckId);
  },

  getFlashcardsByDeckId: async (deckId: number): Promise<Flashcard[]> => {
    await delay(300);
    const deck = flashcardMockData.find(deck => deck.id === deckId);
    return deck ? [...deck.flashcards] : [];
  },

  // Helper method for review (gets forgotten or hard cards)
  getFlashcardsForReview: async (deckId: number): Promise<Flashcard[]> => {
    const cards = await flashcardService.getFlashcardsByDeckId(deckId);
    return cards.filter(c => c.memoryLevel === 'forgot' || c.memoryLevel === 'hard');
  },
  
  // Calculate result from a session
  calculateSessionResult: (session: FlashcardSession): SessionResult => {
    const result: SessionResult = {
      total: session.totalCards,
      forgot: 0,
      hard: 0,
      normal: 0,
      easy: 0,
      timeSpentMinutes: Math.round((new Date().getTime() - session.startedAt.getTime()) / 60000)
    };

    session.answers.forEach(answer => {
      if (answer.memoryLevel === 'forgot') result.forgot++;
      if (answer.memoryLevel === 'hard') result.hard++;
      if (answer.memoryLevel === 'normal') result.normal++;
      if (answer.memoryLevel === 'easy') result.easy++;
    });

    return result;
  },

  // Mock API to save session
  finishLearningSession: async (session: FlashcardSession): Promise<SessionResult> => {
    await delay(500);
    return flashcardService.calculateSessionResult(session);
  }
};
