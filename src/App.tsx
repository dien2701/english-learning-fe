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
    <div className="min-h-screen bg-[#F7F9FF] text-slate-900 flex flex-col antialiased selection:bg-[#E6F4FA] selection:text-[#006193]">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex w-full relative">
        {/* Mobile Backdrop overlay */}
        <div 
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 transition-opacity md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
          id="sidebarBackdrop"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        
        <Sidebar isOpen={isSidebarOpen} />
        
        <div className="flex-1 flex flex-col min-w-0 bg-[#F7F9FF]">
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
        <footer className="w-full bg-white border-t border-[#E5E8EE] px-6 sm:px-8 py-8 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#008FD5] text-[24px]">school</span>
                <span className="text-base font-bold text-[#008FD5]">En-Learning</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Nền tảng ứng dụng trí tuệ nhân tạo hỗ trợ tối ưu lộ trình và nâng cao năng lực tiếng Anh toàn diện cho người học.
              </p>
              <div className="pt-1">
                <a className="text-xs font-semibold text-[#008FD5] hover:text-[#006193] inline-flex items-center gap-1 hover:underline" href="#ho-tro">
                  <span>Hỗ trợ người học</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Chính sách</h5>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-500">
                <li><a className="hover:text-[#008FD5] transition-colors" href="#chinh-sach-bao-mat">Chính sách bảo mật</a></li>
                <li><a className="hover:text-[#008FD5] transition-colors" href="#dieu-khoan-su-dung">Điều khoản sử dụng</a></li>
                <li><a className="hover:text-[#008FD5] transition-colors" href="#quy-dinh-hoc-tap">Quy định học tập &amp; chứng chỉ</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Liên hệ</h5>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-500">
                <li>
                  <a className="hover:text-[#008FD5] transition-colors flex items-center gap-1.5" href="#trung-tam-ho-tro">
                    <span className="material-symbols-outlined text-[16px] text-slate-400">headset_mic</span>
                    <span>Trung tâm hỗ trợ</span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#008FD5] transition-colors flex items-center gap-1.5" href="#gui-phan-hoi">
                    <span className="material-symbols-outlined text-[16px] text-slate-400">rate_review</span>
                    <span>Gửi phản hồi</span>
                  </a>
                </li>
                <li className="text-slate-400 pt-1">© 2026 En-Learning. All rights reserved.</li>
              </ul>
            </div>
          </div>
        </footer>
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
