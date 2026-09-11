import React from 'react';
import type { ChartPeriod } from '../../types/dashboard';

interface PeriodSwitcherProps {
  value: ChartPeriod;
  onChange: (period: ChartPeriod) => void;
}

export const PeriodSwitcher: React.FC<PeriodSwitcherProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center bg-slate-100 p-1 rounded-lg w-fit">
      <button 
        onClick={() => onChange('week')}
        className={`font-semibold text-xs px-3.5 py-1.5 rounded-md transition-all ${
          value === 'week' 
            ? 'bg-white text-[#006193] shadow-sm' 
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        Tuần
      </button>
      <button 
        onClick={() => onChange('month')}
        className={`font-semibold text-xs px-3.5 py-1.5 rounded-md transition-all ${
          value === 'month' 
            ? 'bg-white text-[#006193] shadow-sm' 
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        Tháng
      </button>
    </div>
  );
};
