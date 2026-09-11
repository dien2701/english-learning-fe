import React from 'react';
import type { CompletedLesson } from '../../types/dashboard';

interface CompletedLessonCardProps {
  lesson: CompletedLesson;
}

export const CompletedLessonCard: React.FC<CompletedLessonCardProps> = ({ lesson }) => {
  // Mapping icons based on type
  let icon = 'verified';
  switch (lesson.type) {
    case 'FLASHCARD':
      icon = 'work';
      break;
    case 'WRITING':
      icon = 'mail';
      break;
    case 'LISTENING':
      icon = 'record_voice_over';
      break;
    case 'EXAM':
      icon = 'verified';
      break;
  }

  return (
    <div className="bg-[#008FD5] hover:bg-[#007BB8] border border-[#007BB8] rounded-xl p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-all group cursor-pointer text-white">
      <div className="flex flex-col gap-2">
        <div className="w-9 h-9 rounded-lg bg-white/20 text-white flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-[20px] text-white">{icon}</span>
        </div>
        <h4 className="font-semibold text-white text-base leading-snug">
          {lesson.title}
        </h4>
        <p className="text-xs text-white/85">Hoàn thành {lesson.completedAt}</p>
      </div>
      <div className="pt-2 border-t border-white/20 flex items-center justify-between">
        <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          Đã hoàn thành
        </span>
        {lesson.score && (
          <span className="text-xs text-white font-bold">{lesson.score}</span>
        )}
      </div>
    </div>
  );
};

