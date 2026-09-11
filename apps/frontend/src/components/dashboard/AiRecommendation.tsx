import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { RobotOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const AiRecommendation: React.FC = () => {
  return (
    <Card bordered={false} className="dashboard-card ai-card" style={{ marginBottom: 24 }}>
      <StarOutlined className="ai-bg-icon" />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, position: 'relative', zIndex: 10 }}>
        <RobotOutlined style={{ color: 'var(--primary-color)', fontSize: 20 }} />
        <Title level={4} style={{ margin: 0 }}>AI đề xuất cho bạn</Title>
      </div>
      
      <Text style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: 24, position: 'relative', zIndex: 10 }}>
        Bạn đang yếu ở ngữ pháp thì quá khứ và cần ôn lại từ vựng khó.
      </Text>
      
      <Space direction="vertical" style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <Button type="primary" block>
          Luyện viết: Kể về ngày hôm qua
        </Button>
        <Button block>
          Ôn lại 12 từ vựng khó
        </Button>
      </Space>
    </Card>
  );
};

export default AiRecommendation;
