import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardPage from './pages/DashboardPage';
import { themeConfig } from './theme/themeConfig';
import './App.css';

const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className="app-layout">
        <Sider 
          width={256} 
          theme="light" 
          style={{ 
            borderRight: '1px solid var(--border-color)',
            position: 'fixed',
            height: '100vh',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 20
          }}
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Sidebar />
        </Sider>
        
        <Layout style={{ marginLeft: 256, background: 'var(--bg-color)', minHeight: '100vh' }}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
            <Header />
          </div>
          
          <Content>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
