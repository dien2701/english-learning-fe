import React from 'react';
import { Row, Col } from 'antd';
import GreetingSection from '../components/dashboard/GreetingSection';
import StatCards from '../components/dashboard/StatCards';
import DailyGoals from '../components/dashboard/DailyGoals';
import ContinueLearning from '../components/dashboard/ContinueLearning';
import AiRecommendation from '../components/dashboard/AiRecommendation';
import RecentActivity from '../components/dashboard/RecentActivity';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-content">
      <GreetingSection />
      
      <StatCards />
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <DailyGoals />
            <ContinueLearning />
          </div>
        </Col>
        
        <Col xs={24} lg={8}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AiRecommendation />
            <RecentActivity />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
