import React from 'react';

interface StatusTagProps {
  label: string;
  status?: 'success' | 'warning' | 'info' | 'default';
}

export const StatusTag: React.FC<StatusTagProps> = ({ label, status = 'success' }) => {
  let bgColor = 'bg-slate-100';
  let textColor = 'text-slate-600';
  let dotColor = 'bg-slate-400';

  if (status === 'success') {
    bgColor = 'bg-[#E6F4FA]';
    textColor = 'text-[#006193]';
    dotColor = 'bg-[#008FD5]';
  } else if (status === 'info') {
    bgColor = 'bg-[#E6F4FA]';
    textColor = 'text-[#006193]';
    dotColor = 'bg-[#008FD5]';
  }

  return (
    <span className={`${bgColor} ${textColor} text-xs px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1.5`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
      {label}
    </span>
  );
};
