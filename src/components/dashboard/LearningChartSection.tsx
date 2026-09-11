import React, { useState } from 'react';
import type { ChartPeriod, LearningChartPoint } from '../../types/dashboard';
import { LearningTimeChart } from './LearningTimeChart';

interface LearningChartSectionProps {
  data: LearningChartPoint[]; // fallback data
}

const mockMonthData: LearningChartPoint[] = [
  { label: 'Tuần 1', studyMinutes: 120 },
  { label: 'Tuần 2', studyMinutes: 250 },
  { label: 'Tuần 3', studyMinutes: 180 },
  { label: 'Tuần 4', studyMinutes: 320, isPeak: true },
];

export const LearningChartSection: React.FC<LearningChartSectionProps> = ({ data }) => {
  const [period, setPeriod] = useState<ChartPeriod>('week');

  const currentData = period === 'month' ? mockMonthData : data;
  
  return (
    <section>
      <LearningTimeChart 
        data={currentData} 
        period={period} 
        onPeriodChange={setPeriod} 
      />
    </section>
  );
};
