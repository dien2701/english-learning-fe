import React from 'react';
import HeroBanner from '../components/dashboard/HeroBanner';
import ContinueLearningSection from '../components/dashboard/ContinueLearningSection';
import CompletedLearningSection from '../components/dashboard/CompletedLearningSection';
import LearningChartSection from '../components/dashboard/LearningChartSection';

export const DashboardPage: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-transparent dark:bg-transparent transition-colors duration-200">
      <main className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8 flex-1">
        <HeroBanner />
        <ContinueLearningSection />
        <CompletedLearningSection />
        <LearningChartSection />
      </main>
    </div>
  );
};

export default DashboardPage;
