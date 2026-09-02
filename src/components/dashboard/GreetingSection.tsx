import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { mockUser } from '../../mock/dashboardData';

const { Title, Text } = Typography;

const GreetingSection: React.FC = () => {
  return (
    <div className="greeting-section">
      <div>
        <Title level={2} className="greeting-title" style={{ margin: 0 }}>
          Chào mừng trở lại, {mockUser.name}!
        </Title>
        <Text style={{ color: 'var(--text-secondary)' }}>
          Hãy hoàn thành mục tiêu hôm nay để duy trì tiến độ học tiếng Anh của bạn.
        </Text>
      </div>
      
      <Button type="primary" size="large" icon={<ArrowRightOutlined />} iconPosition="end">
        Tiếp tục học
      </Button>
    </div>
  );
};

export default GreetingSection;
