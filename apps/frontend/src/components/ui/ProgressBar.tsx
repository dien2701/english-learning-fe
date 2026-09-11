import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, label, className = '' }) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-300 font-medium">{label}</span>
          <span className="font-semibold text-[#006193] dark:text-sky-400">{Math.round(percent)}% hoàn thành</span>
        </div>
      )}
      <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#008FD5] rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
