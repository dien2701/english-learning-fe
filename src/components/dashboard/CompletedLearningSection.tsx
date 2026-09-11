import React, { useState } from 'react';
import type { CompletedLesson } from '../../types/dashboard';
import { CompletedLessonList } from './CompletedLessonList';

interface CompletedLearningSectionProps {
  lessons: CompletedLesson[];
}

export const CompletedLearningSection: React.FC<CompletedLearningSectionProps> = ({ lessons }) => {
  const [showAll, setShowAll] = useState(false);

  if (!lessons || lessons.length === 0) return null;

  return (
    <section className="flex flex-col gap-4">
      <CompletedLessonList 
        lessons={lessons} 
        showAll={showAll} 
        onViewMore={() => setShowAll(!showAll)} 
      />
    </section>
  );
};

