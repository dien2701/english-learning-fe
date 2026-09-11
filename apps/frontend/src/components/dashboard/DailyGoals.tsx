import React from 'react';
import { Card, Typography, Progress, Button } from 'antd';
import { CheckCircleFilled, BorderOutlined, CaretRightOutlined } from '@ant-design/icons';
import { dailyGoals } from '../../mock/dashboardData';

const { Title, Text } = Typography;

const DailyGoals: React.FC = () => {
  const completedCount = dailyGoals.filter(g => g.completed).length;
  const totalCount = dailyGoals.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <Card bordered={false} className="dashboard-card" style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Title level={4} style={{ margin: 0 }}>Mục tiêu học tập hôm nay</Title>
        <div style={{ backgroundColor: '#F0F4FA', padding: '4px 8px', borderRadius: 4, fontSize: 12, color: 'var(--text-secondary)' }}>
          {completedCount}/{totalCount} hoàn thành
        </div>
      </div>

      <Progress 
        percent={progressPercent} 
        showInfo={false} 
        strokeColor="var(--primary-color)" 
        trailColor="#F0F4FA"
        style={{ marginBottom: 24 }}
      />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {dailyGoals.map(goal => (
          <div key={goal.id} className={`goal-item ${goal.completed ? 'completed' : 'active'}`}>
            {goal.completed ? (
              <CheckCircleFilled style={{ color: '#16A34A', fontSize: 18 }} />
            ) : (
              <BorderOutlined style={{ color: 'var(--border-color)', fontSize: 18 }} />
            )}
            <Text style={{ 
              textDecoration: goal.completed ? 'line-through' : 'none',
              color: goal.completed ? 'var(--text-secondary)' : 'var(--text-primary)',
              fontWeight: goal.completed ? 'normal' : 500
            }}>
              {goal.title}
            </Text>
          </div>
        ))}
      </div>

      <Button type="primary" block size="large" icon={<CaretRightOutlined />} iconPosition="end" style={{ marginTop: 8 }}>
        Hoàn thành bài nghe
      </Button>
    </Card>
  );
};

export default DailyGoals;
