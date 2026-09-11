import React from 'react';
import { HeroBanner } from '../components/dashboard/HeroBanner';
import { ContinueLearningSection } from '../components/dashboard/ContinueLearningSection';
import { CompletedLearningSection } from '../components/dashboard/CompletedLearningSection';
import { LearningChartSection } from '../components/dashboard/LearningChartSection';
import type { ContinueLearningItem, CompletedLesson, LearningChartPoint } from '../types/dashboard';
import { useNavigate } from 'react-router-dom';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data - In a real app this would come from a global state or API query
  const userName = "Trịnh Xuân Diện";
  
  const continueLearningItem: ContinueLearningItem = {
    id: '1',
    title: '300 từ vựng tiếng Anh giao tiếp cơ bản',
    type: 'FLASHCARD',
    progressPercent: 68,
    lastStudiedAt: 'Hôm nay, 09:20',
    continuePath: '/flashcard'
  };

  const completedLessons: CompletedLesson[] = [
    {
      id: '1',
      title: 'Từ vựng chủ đề Công việc',
      type: 'FLASHCARD',
      completedAt: 'hôm nay',
      score: '100%'
    },
    {
      id: '2',
      title: 'Viết email xin nghỉ phép',
      type: 'WRITING',
      completedAt: 'hôm qua',
      score: '9.5/10'
    },
    {
      id: '3',
      title: 'Listening: Daily Conversation',
      type: 'LISTENING',
      completedAt: '09/09/2026',
      score: '10/10'
    },
    {
      id: '4',
      title: 'Bài kiểm tra từ vựng A2',
      type: 'EXAM',
      completedAt: '08/09/2026',
      score: '92%'
    }
  ];

  const chartData: LearningChartPoint[] = [
    { label: "Thứ 2", studyMinutes: 25 },
    { label: "Thứ 3", studyMinutes: 40 },
    { label: "Thứ 4", studyMinutes: 20 },
    { label: "Thứ 5", studyMinutes: 55 },
    { label: "Thứ 6", studyMinutes: 35 },
    { label: "Thứ 7", studyMinutes: 65, isPeak: true },
    { label: "CN", studyMinutes: 45 },
  ];

  const handleContinueLearning = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#F7F9FF] dark:bg-slate-900 transition-colors duration-200">
      <main className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8 flex-1">
        <HeroBanner userName={userName} />
        <ContinueLearningSection item={continueLearningItem} onContinue={handleContinueLearning} />
        <CompletedLearningSection lessons={completedLessons} />
        <LearningChartSection data={chartData} />
      </main>
    </div>
  );
};

export default DashboardPage;
