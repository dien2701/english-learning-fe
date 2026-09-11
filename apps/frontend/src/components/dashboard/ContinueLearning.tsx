import React from 'react';
import { Row, Col, Typography } from 'antd';
import { AppstoreOutlined, FormOutlined, AudioOutlined } from '@ant-design/icons';
import { continueLearning } from '../../mock/dashboardData';

const { Title, Text } = Typography;

const renderIcon = (iconName: string, color: string) => {
  switch (iconName) {
    case 'style':
      return <AppstoreOutlined style={{ color, fontSize: '20px' }} />;
    case 'edit_document':
      return <FormOutlined style={{ color, fontSize: '20px' }} />;
    case 'headphones':
      return <AudioOutlined style={{ color, fontSize: '20px' }} />;
    default:
      return <AppstoreOutlined style={{ color, fontSize: '20px' }} />;
  }
};

const ContinueLearning: React.FC = () => {
  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={4} style={{ margin: 0, marginBottom: 16 }}>Tiếp tục học</Title>
      <Row gutter={[16, 16]}>
        {continueLearning.map((item) => (
          <Col xs={24} md={8} key={item.id}>
            <div 
              className="course-card" 
              style={{ 
                backgroundColor: 'var(--surface-color)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 12, 
                padding: 16,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="course-icon-wrapper" style={{ backgroundColor: item.iconBg }}>
                {renderIcon(item.icon, item.iconColor)}
              </div>
              <Text strong className="course-title" style={{ display: 'block', marginBottom: 4 }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                {item.subtitle}
              </Text>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContinueLearning;
