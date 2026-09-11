import React from 'react';
import type { ContinueLearningItem } from '../../types/dashboard';

interface ContinueLearningCardProps {
  item: ContinueLearningItem;
  onContinue: (path: string) => void;
}

export const ContinueLearningCard: React.FC<ContinueLearningCardProps> = ({ item, onContinue }) => {
  return (
    <section className="bg-white dark:bg-slate-800 border border-[#E5E8EE] dark:border-slate-700/80 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm transition-colors duration-200">
      {/* Left: Title, Meta, Progress Bar */}
      <div className="flex flex-col gap-3.5 flex-1 max-w-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#E6F4FA] dark:bg-sky-950 text-[#006193] dark:text-sky-300 w-fit">
            Đang học
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">Học gần nhất: {item.lastStudiedAt}</span>
        </div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          {item.title}
        </h2>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-300 font-medium">Tiến độ bài học</span>
            <span className="font-semibold text-[#006193] dark:text-sky-400">{item.progressPercent}% hoàn thành</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-[#008FD5] rounded-full" style={{ width: `${item.progressPercent}%` }}></div>
          </div>
        </div>
      </div>
      
      {/* Right: Button "Tiếp tục học" */}
      <div className="shrink-0 flex items-center">
        <button 
          onClick={() => onContinue(item.continuePath)}
          className="bg-[#008FD5] hover:bg-[#007BB8] text-white rounded-xl px-6 h-11 text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#008FD5] focus:ring-offset-2 cursor-pointer"
        >
          <span>Tiếp tục học</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

