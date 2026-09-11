import React from 'react';
import { StatusTag } from '../ui/StatusTag';
import { ProgressBar } from '../ui/ProgressBar';
import { useTranslation } from 'react-i18next';

const ContinueLearningSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white dark:bg-slate-800 border border-[#E5E8EE] dark:border-slate-700/80 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm transition-colors duration-200">
      <div className="flex flex-col gap-3.5 flex-1 max-w-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <StatusTag label="Đang học" status="info" />
          <span className="text-sm text-slate-500 dark:text-slate-400">Học gần nhất: Hôm nay, 09:20</span>
        </div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          300 từ vựng tiếng Anh giao tiếp cơ bản
        </h2>
        <ProgressBar value={68} max={100} label="Tiến độ bài học" />
      </div>
      <div className="shrink-0 flex items-center">
        <button className="bg-[#008FD5] hover:bg-[#007BB8] text-white rounded-xl px-6 h-11 text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#008FD5] focus:ring-offset-2 cursor-pointer">
          <span>{t('dashboard.continue_learning')}</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default ContinueLearningSection;
