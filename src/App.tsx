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

// Flashcard
import FlashcardTopicsPage from './pages/flashcard/FlashcardTopicsPage';
import FlashcardDetailPage from './pages/flashcard/FlashcardDetailPage';
import FlashcardStudyPage from './pages/flashcard/FlashcardStudyPage';
import FlashcardResultPage from './pages/flashcard/FlashcardResultPage';

// Writing
import WritingListPage from './pages/writing/WritingListPage';
import WritingPracticePage from './pages/writing/WritingPracticePage';
import WritingResultPage from './pages/writing/WritingResultPage';
import WritingHistoryPage from './pages/writing/WritingHistoryPage';

// Listening
import ListeningListPage from './pages/listening/ListeningListPage';
import ListeningPracticePage from './pages/listening/ListeningPracticePage';
import ListeningResultPage from './pages/listening/ListeningResultPage';

// Exam
import ExamListPage from './pages/exam/ExamListPage';
import ExamPracticePage from './pages/exam/ExamPracticePage';
import ExamResultPage from './pages/exam/ExamResultPage';
import ExamHistoryPage from './pages/exam/ExamHistoryPage';

// Statistics & Recommendation
import StatisticsPage from './pages/statistics/StatisticsPage';
import RecommendationPage from './pages/recommendation/RecommendationPage';

// Chat & Notification
import ChatListPage from './pages/chat/ChatListPage';
import ChatRoomPage from './pages/chat/ChatRoomPage';
import NotificationCenterPage from './pages/notification/NotificationCenterPage';

// Profile
import ProfilePage from './pages/profile/ProfilePage';
import EditProfilePage from './pages/profile/EditProfilePage';
import SettingsPage from './pages/profile/SettingsPage';

// Admin
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ManageUsersPage from './pages/admin/ManageUsersPage';
import UserDetailPage from './pages/admin/UserDetailPage';
import ManageTopicsPage from './pages/admin/ManageTopicsPage';
import ManageFlashcardsPage from './pages/admin/ManageFlashcardsPage';
import ManageWritingPage from './pages/admin/ManageWritingPage';
import ManageListeningPage from './pages/admin/ManageListeningPage';
import ManageExamsPage from './pages/admin/ManageExamsPage';
import ManageNotificationsPage from './pages/admin/ManageNotificationsPage';

// System
import ForbiddenPage from './pages/system/ForbiddenPage';
import NotFoundPage from './pages/system/NotFoundPage';
import ServerErrorPage from './pages/system/ServerErrorPage';

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
            
            {/* Flashcard */}
            <Route path="/flashcard" element={<FlashcardTopicsPage />} />
            <Route path="/flashcard/:id" element={<FlashcardDetailPage />} />
            <Route path="/flashcard/:id/study" element={<FlashcardStudyPage />} />
            <Route path="/flashcard/:id/result" element={<FlashcardResultPage />} />
            
            {/* Writing */}
            <Route path="/writing" element={<WritingListPage />} />
            <Route path="/writing/:id" element={<WritingPracticePage />} />
            <Route path="/writing/:id/result" element={<WritingResultPage />} />
            <Route path="/writing/history" element={<WritingHistoryPage />} />
            
            {/* Listening */}
            <Route path="/listening" element={<ListeningListPage />} />
            <Route path="/listening/:id" element={<ListeningPracticePage />} />
            <Route path="/listening/:id/result" element={<ListeningResultPage />} />
            
            {/* Exam */}
            <Route path="/exam" element={<ExamListPage />} />
            <Route path="/exam/:id" element={<ExamPracticePage />} />
            <Route path="/exam/:id/result" element={<ExamResultPage />} />
            <Route path="/exam/history" element={<ExamHistoryPage />} />
            
            {/* Statistics & Recommendation */}
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/recommendation" element={<RecommendationPage />} />
            
            {/* Chat & Notification */}
            <Route path="/chat" element={<ChatListPage />} />
            <Route path="/chat/:id" element={<ChatRoomPage />} />
            <Route path="/notifications" element={<NotificationCenterPage />} />
            
            {/* Profile */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<EditProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin">
              <Route index element={<AdminDashboardPage />} />
              <Route path="users" element={<ManageUsersPage />} />
              <Route path="users/:id" element={<UserDetailPage />} />
              <Route path="topics" element={<ManageTopicsPage />} />
              <Route path="flashcards" element={<ManageFlashcardsPage />} />
              <Route path="writing" element={<ManageWritingPage />} />
              <Route path="listening" element={<ManageListeningPage />} />
              <Route path="exams" element={<ManageExamsPage />} />
              <Route path="notifications" element={<ManageNotificationsPage />} />
            </Route>

            {/* Default redirect for root */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/404" replace />} />
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
          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>
          
          {/* System Routes */}
          <Route path="/403" element={<ForbiddenPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/*" element={<DashboardLayout />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;
