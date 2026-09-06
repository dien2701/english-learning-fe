import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicRoute from './components/auth/PublicRoute';
import { AuthProvider } from './contexts/AuthContext';
import { themeConfig } from './theme/themeConfig';
import './App.css';

const { Sider, Content } = Layout;

const DashboardLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
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
        {children || (
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        )}
      </Content>
    </Layout>
  </Layout>
);

const App: React.FC = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <AuthProvider>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>
          
          <Route element={<ProtectedRoute />}>
            <Route path="/*" element={<DashboardLayout />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;
