import React from 'react';
import { Menu, Button } from 'antd';
import {
  DashboardOutlined,
  BookOutlined,
  HighlightOutlined,
  CustomerServiceOutlined,
  CheckSquareOutlined,
  LineChartOutlined,
  MailOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: 'Tổng quan' },
    { key: '/vocabulary', icon: <BookOutlined />, label: 'Học từ vựng' },
    { key: '/writing', icon: <HighlightOutlined />, label: 'Luyện viết với AI' },
    { key: '/listening', icon: <CustomerServiceOutlined />, label: 'Luyện nghe' },
    { key: '/quiz', icon: <CheckSquareOutlined />, label: 'Bài kiểm tra' },
    { key: '/progress', icon: <LineChartOutlined />, label: 'Tiến độ học tập' },
    { key: '/messages', icon: <MailOutlined />, label: 'Tin nhắn' },
    { key: '/notifications', icon: <BellOutlined />, label: 'Thông báo' },
    { key: '/profile', icon: <UserOutlined />, label: 'Hồ sơ cá nhân' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="logo-container">
        <div className="logo-icon">
          <HighlightOutlined />
        </div>
        <div className="logo-text">
          <span className="logo-title">EnglishAI</span>
          <span className="logo-subtitle">AI Learning Platform</span>
        </div>
      </div>
      
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        items={menuItems}
        style={{ flex: 1, borderRight: 0 }}
      />
      
      <div className="logout-btn-container">
        <Button 
          icon={<LogoutOutlined />} 
          block 
          size="large"
          style={{ color: 'var(--text-secondary)' }}
        >
          Đăng xuất
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
