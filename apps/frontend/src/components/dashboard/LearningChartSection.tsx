import React, { useState, useMemo } from 'react';
import { PeriodSwitcher } from '../ui/PeriodSwitcher';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { activityChartData } from '../../mock/dashboardData';

const monthlyChartData = [
  { day: "Tuần 1", minutes: 120 },
  { day: "Tuần 2", minutes: 210 },
  { day: "Tuần 3", minutes: 180 },
  { day: "Tuần 4", minutes: 285 },
];

const CustomTooltip = ({ active, payload, label, period }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg rounded-lg p-3 min-w-[150px]">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2 border-b border-slate-100 dark:border-slate-700 pb-1">{label}</p>
        <div className="flex justify-between items-center mb-1 gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#008FD5]"></span>
            <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">{period === 'week' ? 'Tuần này' : 'Tháng này'}</span>
          </div>
          <span className="text-[#008FD5] font-bold text-sm">{payload[0]?.value}p</span>
        </div>
        {payload[1] && (
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{period === 'week' ? 'Tuần trước' : 'Tháng trước'}</span>
            </div>
            <span className="text-slate-500 font-bold text-sm">{payload[1]?.value}p</span>
          </div>
        )}
      </div>
    );
  }
  return null;
};

const LearningChartSection: React.FC = () => {
  const [period, setPeriod] = useState<'week' | 'month'>('week');

  // Add mock previous period data to make chart look better and show tooltip
  const data = useMemo(() => {
    if (period === 'week') {
      return activityChartData.map((item, index) => ({
        ...item,
        lastPeriodMinutes: Math.max(10, item.minutes - 10 + (index % 3) * 15) // simple mock calculation
      }));
    }
    return monthlyChartData.map((item, index) => ({
      ...item,
      lastPeriodMinutes: Math.max(50, item.minutes - 40 + (index % 2) * 50)
    }));
  }, [period]);

  return (
    <section className="bg-white dark:bg-slate-800 border border-[#E5E8EE] dark:border-slate-700/80 rounded-2xl p-6 flex flex-col gap-6 shadow-sm transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Thời gian học tập</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Tổng thời gian bạn đã dành cho việc học tiếng Anh.</p>
        </div>
        <PeriodSwitcher value={period} onChange={setPeriod} />
      </div>

      <div className="pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 dark:text-white transition-all duration-300">
                {period === 'week' ? '285 phút' : '795 phút'}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {period === 'week' ? 'Tổng trong tuần này (~4.7 giờ)' : 'Tổng trong tháng này (~13.2 giờ)'}
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#006193] dark:text-sky-300 bg-[#E6F4FA] dark:bg-sky-950/80 px-3 py-1.5 rounded-lg border border-sky-100 dark:border-sky-900/50">
              <span className="material-symbols-outlined text-[16px] text-[#008FD5]">trending_up</span>
              <span>+18% so với {period === 'week' ? 'tuần' : 'tháng'} trước</span>
            </div>
          </div>
          <div className="flex items-center gap-5 text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#008FD5] inline-block shadow-sm ring-2 ring-white dark:ring-slate-800"></span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold">{period === 'week' ? 'Tuần này' : 'Tháng này'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-0.5 border-t-2 border-dashed border-slate-400 inline-block"></span>
              <span className="text-slate-500 dark:text-slate-400">{period === 'week' ? 'Tuần trước' : 'Tháng trước'}</span>
            </div>
          </div>
        </div>

        <div className="w-full relative h-72 text-sm">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#008FD5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#008FD5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="#E5E8EE" className="dark:stroke-slate-700/80" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} tickFormatter={(value) => `${value}m`} />
              <Tooltip content={<CustomTooltip period={period} />} cursor={{ stroke: '#E5E8EE', strokeWidth: 1, strokeDasharray: '4 4' }} />
              
              <Line 
                type="monotone" 
                dataKey="lastPeriodMinutes" 
                stroke="#94A3B8" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                activeDot={{ r: 4, fill: '#94A3B8', strokeWidth: 0 }}
              />
              <Area 
                type="monotone" 
                dataKey="minutes" 
                stroke="#008FD5" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorMinutes)" 
                activeDot={{ r: 6, strokeWidth: 0, fill: '#008FD5' }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default LearningChartSection;
