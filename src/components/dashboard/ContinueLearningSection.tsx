import React from 'react';
import type { ContinueLearningItem } from '../../types/dashboard';
import { ContinueLearningCard } from './ContinueLearningCard';

interface ContinueLearningSectionProps {
  item: ContinueLearningItem | null;
  onContinue: (path: string) => void;
}

export const ContinueLearningSection: React.FC<ContinueLearningSectionProps> = ({ item, onContinue }) => {
  if (!item) return null;

  return (
    <ContinueLearningCard item={item} onContinue={onContinue} />
  );
};
