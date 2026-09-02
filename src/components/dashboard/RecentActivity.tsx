import React from 'react';
import { Card, Typography } from 'antd';
import { recentActivity } from '../../mock/dashboardData';

const { Title, Text } = Typography;

const RecentActivity: React.FC = () => {
  return (
    <Card bordered={false} className="dashboard-card">
      <Title level={4} style={{ margin: 0, marginBottom: 24 }}>Hoạt động gần đây</Title>
      
      <div style={{ paddingLeft: 8 }}>
        {recentActivity.map((activity) => (
          <div key={activity.id} className="timeline-item">
            <div className={`timeline-dot ${activity.status}`}></div>
            
            <Text style={{ display: 'block', fontSize: 12, color: 'var(--text-secondary)', marginBottom: 4 }}>
              {activity.time}
            </Text>
            <Text strong style={{ display: 'block', marginBottom: 4 }}>
              {activity.title}
            </Text>
            
            {activity.score && (
              <div style={{ 
                display: 'inline-block', 
                padding: '4px 8px', 
                backgroundColor: '#F0FDF4', 
                color: '#15803D', 
                border: '1px solid #BBF7D0',
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 600,
                marginTop: 4
              }}>
                🏅 {activity.score}
              </div>
            )}
            
            {activity.subtitle && (
              <Text style={{ display: 'block', fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>
                {activity.subtitle}
              </Text>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;
