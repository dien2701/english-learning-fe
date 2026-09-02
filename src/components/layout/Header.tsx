import React from 'react';
import { Input, Badge, Avatar, Typography, Breadcrumb } from 'antd';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { mockUser } from '../../mock/dashboardData';

const { Text } = Typography;

const Header: React.FC = () => {
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
        
        <Avatar src={mockUser.avatar} style={{ marginLeft: 8, cursor: 'pointer', border: '1px solid var(--border-color)' }} />
      </div>
    </div>
  );
};

export default Header;
