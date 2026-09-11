import React, { useMemo } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import type { ChartPeriod, LearningChartPoint } from '../../types/dashboard';
import { PeriodSwitcher } from '../ui/PeriodSwitcher';

interface LearningTimeChartProps {
  data: LearningChartPoint[];
  period: ChartPeriod;
  onPeriodChange: (period: ChartPeriod) => void;
}

export const LearningTimeChart: React.FC<LearningTimeChartProps> = ({ data, period, onPeriodChange }) => {
  // Generate random past data to simulate previous period for comparison (dashed line effect)
  const chartData = useMemo(() => {
    return data.map(d => ({
      ...d,
      prevStudyMinutes: Math.max(0, d.studyMinutes - Math.floor(Math.random() * 20) + 10)
    }));
  }, [data, period]); // regenerate when period changes

  const currentTotal = data.reduce((sum, d) => sum + d.studyMinutes, 0);
  const prevTotal = chartData.reduce((sum, d) => sum + d.prevStudyMinutes, 0);
  const diffPercent = prevTotal === 0 ? 100 : Math.round(((currentTotal - prevTotal) / prevTotal) * 100);

  // Custom Tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-[#E5E8EE] p-3 rounded-xl shadow-lg">
          <p className="font-semibold text-slate-900 mb-1">{label}</p>
          <div className="flex flex-col gap-1 text-xs">
            <p className="text-[#008FD5] font-medium flex items-center justify-between gap-4">
              <span>{period === 'week' ? 'Tuần này' : 'Tháng này'}:</span> 
              <span className="font-bold">{payload[0].value} phút</span>
            </p>
            {payload[1] && (
              <p className="text-slate-500 flex items-center justify-between gap-4">
                <span>{period === 'week' ? 'Tuần trước' : 'Tháng trước'}:</span> 
                <span className="font-semibold">{payload[1].value} phút</span>
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  // Custom Cursor to disable hover effect on Saturday (T7)
  const CustomCursor = (props: any) => {
    const { points, payload } = props;
    if (!points || !payload || payload.length === 0) return null;
    
    // Check if the current hovered data is Saturday (T7)
    const isSaturday = payload[0].payload.label === 'T7';
    if (isSaturday) return null;

    const { x } = points[0];
    return (
      <line 
        x1={x} y1={0} x2={x} y2={props.height} 
        stroke="#E5E8EE" strokeWidth={1.5} strokeDasharray="3 3"
      />
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-[#E5E8EE] dark:border-slate-700/80 rounded-2xl p-6 flex flex-col gap-6 shadow-sm transition-colors duration-200">
      {/* Header & Period Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Thời gian học tập</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Tổng thời gian bạn đã dành cho việc học tiếng Anh.</p>
        </div>
        <PeriodSwitcher value={period} onChange={onPeriodChange} />
      </div>

      {/* Chart Area */}
      <div className="pt-4">
        {/* Summary stats and Legend row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{currentTotal} phút</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Tổng trong {period === 'week' ? 'tuần' : 'tháng'} này (~{(currentTotal / 60).toFixed(1)} giờ)</span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div className={`flex items-center gap-2 text-xs font-semibold px-2.5 py-1.5 rounded-md ${diffPercent >= 0 ? 'text-[#006193] dark:text-sky-300 bg-[#E6F4FA] dark:bg-sky-950/80' : 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80'}`}>
              <span className="material-symbols-outlined text-[16px] text-[#008FD5]">
                {diffPercent >= 0 ? 'trending_up' : 'trending_down'}
              </span>
              <span>{diffPercent >= 0 ? '+' : ''}{diffPercent}% so với {period === 'week' ? 'tuần' : 'tháng'} trước</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#008FD5] inline-block shadow-sm ring-2 ring-white dark:ring-slate-800"></span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold">{period === 'week' ? 'Tuần' : 'Tháng'} này</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-0.5 border-t-2 border-dashed border-slate-400 inline-block"></span>
              <span className="text-slate-500 dark:text-slate-400">{period === 'week' ? 'Tuần' : 'Tháng'} trước</span>
            </div>
          </div>
        </div>

        {/* Recharts Area */}
        <div className="w-full h-72 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorStudy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#008FD5" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#008FD5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis 
                dataKey="label" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94A3B8', fontSize: 12 }}
                tickFormatter={(value) => `${value}m`}
              />
              <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
              <Area 
                type="monotone" 
                dataKey="studyMinutes" 
                stroke="#008FD5" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorStudy)" 
                activeDot={{ r: 6, stroke: '#FFFFFF', strokeWidth: 2, fill: '#008FD5' }}
              />
              <Area 
                type="monotone" 
                dataKey="prevStudyMinutes" 
                stroke="#94A3B8" 
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="none" 
                activeDot={{ r: 4, stroke: '#FFFFFF', strokeWidth: 2, fill: '#94A3B8' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
