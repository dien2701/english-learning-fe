import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { 
  ArrowUpOutlined, 
  PlusOutlined, 
  FireOutlined, 
  ClockCircleOutlined, 
  CheckSquareOutlined, 
  LineChartOutlined 
} from '@ant-design/icons';
import { statCards } from '../../mock/dashboardData';

const { Title, Text } = Typography;

const renderIcon = (iconName: string, color: string) => {
  switch (iconName) {
    case 'local_fire_department':
      return <FireOutlined style={{ color, fontSize: '18px' }} />;
    case 'schedule':
      return <ClockCircleOutlined style={{ color, fontSize: '18px' }} />;
    case 'spellcheck':
      return <CheckSquareOutlined style={{ color, fontSize: '18px' }} />;
    case 'analytics':
      return <LineChartOutlined style={{ color, fontSize: '18px' }} />;
    default:
      return <LineChartOutlined style={{ color, fontSize: '18px' }} />;
  }
};

const renderTrendIcon = (trend: string) => {
  if (trend.includes('+') && !trend.includes('%')) return <PlusOutlined />;
  if (trend.includes('Tăng') || trend.includes('+')) return <ArrowUpOutlined />;
  return null;
};

const StatCards: React.FC = () => {
  return (
    <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
      {statCards.map((stat) => (
        <Col xs={24} sm={12} xl={6} key={stat.id}>
          <Card bordered={false} className="dashboard-card">
            <div className="stat-card-title">
              <Text style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.title}</Text>
              <div className="stat-icon-wrapper" style={{ backgroundColor: stat.bgColor }}>
                {renderIcon(stat.icon, stat.color)}
              </div>
            </div>
            
            <div>
              <Title level={3} className="stat-value" style={{ margin: 0, marginBottom: 8 }}>
                {stat.value}
              </Title>
              <div className="stat-trend" style={{ color: stat.color }}>
                {renderTrendIcon(stat.trend)}
                <span>{stat.trend}</span>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatCards;
