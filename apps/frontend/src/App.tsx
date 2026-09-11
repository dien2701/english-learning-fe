import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
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
import GlobalFooter from './components/layout/GlobalFooter';
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

/**
 * UserLayout — matches the Stitch design exactly:
 * - Fixed sidebar 256px on the left
 * - Main area (margin-left: 256px) with sticky header + scrollable content
 */
const UserLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-surface-main dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col antialiased selection:bg-[#E6F4FA] selection:text-[#006193]">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex w-full relative">
        {/* Mobile Backdrop overlay */}
        <div 
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 transition-opacity md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
          id="sidebarBackdrop"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        
        <Sidebar isOpen={isSidebarOpen} />
        
        <div className={`flex-1 flex flex-col min-w-0 bg-surface-main dark:bg-slate-900 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
          {/* Page Content routes will render inside the main tag for each page, but the DashboardPage component already has main.w-full.max-w-7xl... */}
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

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        
        {/* Footer */}
        <GlobalFooter />
      </div>
    </div>
  </div>
  );
};


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
            <Route path="/*" element={<UserLayout />} />
          </Route>

        </Routes>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;
