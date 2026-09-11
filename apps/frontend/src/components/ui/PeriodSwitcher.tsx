import React from 'react';

type ChartPeriod = 'week' | 'month';

interface PeriodSwitcherProps {
  value: ChartPeriod;
  onChange: (period: ChartPeriod) => void;
}

export const PeriodSwitcher: React.FC<PeriodSwitcherProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg w-fit">
      <button 
        onClick={() => onChange('week')}
        className={`font-semibold text-xs px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
          value === 'week' 
            ? 'bg-white dark:bg-slate-700 text-[#006193] dark:text-sky-300 shadow-sm' 
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}
      >
        Tuần
      </button>
      <button 
        onClick={() => onChange('month')}
        className={`font-semibold text-xs px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
          value === 'month' 
            ? 'bg-white dark:bg-slate-700 text-[#006193] dark:text-sky-300 shadow-sm' 
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}
      >
        Tháng
      </button>
    </div>
  );
};

export default PeriodSwitcher;
