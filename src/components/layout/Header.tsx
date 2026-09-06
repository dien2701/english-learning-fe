import React from 'react';
import { Input, Badge, Avatar, Typography, Breadcrumb, Dropdown, type MenuProps } from 'antd';
import { SearchOutlined, BellOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { mockUser } from '../../mock/dashboardData';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const Header: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Đăng xuất',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
      danger: true,
    }
  ];

  return (
    <div className="header">
      <Breadcrumb
        items={[
          { title: <a href="#">Trang chủ</a> },
          { title: <Text strong style={{ color: 'var(--primary-color)' }}>Tổng quan</Text> }
        ]}
      />

      <div className="header-right">
        <Input 
          className="search-input"
          placeholder="Tìm kiếm bài học..." 
          prefix={<SearchOutlined style={{ color: 'var(--text-secondary)' }} />} 
        />
        
        <Badge dot>
          <div style={{ padding: 8, cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <BellOutlined style={{ fontSize: 18 }} />
          </div>
        </Badge>
        
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 8, marginLeft: 8 }}>
            <Avatar src={mockUser.avatar} icon={!mockUser.avatar && <UserOutlined />} style={{ border: '1px solid var(--border-color)' }} />
            <Text strong style={{ display: 'none' }}>{user?.fullName || 'User'}</Text>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
