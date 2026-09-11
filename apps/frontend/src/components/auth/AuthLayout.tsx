import React from 'react';
import { Card, Typography, Layout } from 'antd';
import { HighlightOutlined } from '@ant-design/icons';
import './AuthLayout.css';

const { Title, Text } = Typography;

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <Layout className="auth-layout">
      <div className="auth-container">
        <div className="auth-header">
          <div className="auth-logo">
            <div className="logo-icon-auth">
              <HighlightOutlined />
            </div>
            <div className="logo-text-auth">
              <span className="logo-title-auth">EnglishAI</span>
            </div>
          </div>
        </div>
        <Card className="auth-card" bordered={false}>
          <div className="auth-card-header">
            <Title level={2} className="auth-title">{title}</Title>
            <Text className="auth-subtitle">{subtitle}</Text>
          </div>
          {children}
        </Card>
      </div>
    </Layout>
  );
};

export default AuthLayout;
