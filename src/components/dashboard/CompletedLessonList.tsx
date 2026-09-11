import React from 'react';
import type { CompletedLesson } from '../../types/dashboard';
import { CompletedLessonCard } from './CompletedLessonCard';

interface CompletedLessonListProps {
  lessons: CompletedLesson[];
  showAll: boolean;
  onViewMore: () => void;
}

export const CompletedLessonList: React.FC<CompletedLessonListProps> = ({ lessons, showAll, onViewMore }) => {
  const displayLessons = showAll ? lessons : lessons.slice(0, 4);

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bài học đã hoàn thành</h3>
        {lessons.length > 4 && (
          <button 
            onClick={onViewMore}
            className="text-[#008FD5] hover:text-[#006193] dark:hover:text-sky-300 text-sm font-semibold hover:underline flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{showAll ? 'Thu gọn' : 'Xem thêm'}</span>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-200">
              {showAll ? 'expand_less' : 'chevron_right'}
            </span>
          </button>
        )}
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayLessons.map(lesson => (
          <CompletedLessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </>
  );
};

