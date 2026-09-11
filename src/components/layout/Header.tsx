import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  
  // States for toggles
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');
  
  // Notification states
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Nhắc nhở Flashcard', desc: 'Bạn có 20 từ vựng cần ôn tập hôm nay', time: '5 phút trước', isRead: false, icon: 'style' },
    { id: 2, title: 'Hoàn thành bài tập', desc: 'Bạn đã hoàn thành bài tập nghe xuất sắc', time: '1 giờ trước', isRead: false, icon: 'headphones' },
    { id: 3, title: 'Tính năng mới', desc: 'Trải nghiệm tính năng luyện nói AI mới nhất', time: '2 ngày trước', isRead: false, icon: 'campaign' }
  ]);
  const [notifTab, setNotifTab] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const displayNotifs = notifications.filter(n => notifTab === 'all' || !n.isRead);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.fullName
    ? user.fullName
        .split(' ')
        .map((n) => n[0])
        .slice(-2)
        .join('')
        .toUpperCase()
    : 'TĐ';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E8EE] h-16 w-full flex items-center justify-between px-4 sm:px-6 transition-all">
      {/* Left Side: Logo & Sidebar Toggle */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Sidebar Toggle Button */}
        <button
          aria-label="Mở/Đóng thanh điều hướng"
          className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
          onClick={toggleSidebar}
        >
          <span className="material-symbols-outlined text-[24px]">
            {isSidebarOpen ? 'menu_open' : 'menu'}
          </span>
        </button>

        {/* Logo */}
        <a className="flex items-center gap-2.5 group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <span className="material-symbols-outlined text-[#008FD5] text-[36px] transition-transform group-hover:scale-105">school</span>
          <span className="text-xl font-bold tracking-tight text-[#008FD5] select-none">En-Learning</span>
        </a>
      </div>

      {/* Right Side: Notification & User Profile with Dropdown Trigger */}
      <div className="flex items-center gap-3 sm:gap-5 relative">
        {/* Notification Bell */}
        <div className="relative">
          <button
            aria-label="Thông báo"
            aria-expanded={isNotifOpen}
            onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
            className="relative p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
                {unreadCount}
              </span>
            )}
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#E5E8EE] py-2 z-50 transform origin-top-right transition-all">
              <div className="px-4 py-3 border-b border-[#E5E8EE] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-slate-900">Thông báo</h4>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#E6F4FA] text-[#006193]">{unreadCount} mới</span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button onClick={markAllAsRead} className="text-xs font-semibold text-[#008FD5] hover:text-[#006193] hover:underline transition-colors cursor-pointer">
                    Đánh dấu đã đọc
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 text-xs">
                <button 
                  onClick={() => setNotifTab('all')}
                  className={`px-3 py-1 rounded-full font-semibold transition-colors cursor-pointer ${notifTab === 'all' ? 'bg-[#E6F4FA] text-[#006193]' : 'text-slate-500 hover:bg-slate-100'}`}
                >
                  Tất cả
                </button>
                <button 
                  onClick={() => setNotifTab('unread')}
                  className={`px-3 py-1 rounded-full font-semibold transition-colors cursor-pointer ${notifTab === 'unread' ? 'bg-[#E6F4FA] text-[#006193]' : 'text-slate-500 hover:bg-slate-100'}`}
                >
                  Chưa đọc ({unreadCount})
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                {displayNotifs.length > 0 ? displayNotifs.map(n => (
                  <div key={n.id} className={`p-3.5 hover:bg-slate-50 transition-colors cursor-pointer flex gap-3 ${!n.isRead ? 'bg-[#F7F9FF]' : ''}`}>
                    <div className="w-9 h-9 rounded-full bg-[#E6F4FA] text-[#008FD5] flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <p className={`text-xs truncate ${!n.isRead ? 'font-semibold text-slate-900' : 'font-medium text-slate-700'}`}>{n.title}</p>
                        {!n.isRead && <span className="w-2 h-2 rounded-full bg-[#008FD5] shrink-0"></span>}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">{n.desc}</p>
                      <span className="text-[11px] text-slate-400 mt-1 block">{n.time}</span>
                    </div>
                  </div>
                )) : (
                  <div className="p-4 text-center text-sm text-slate-500">
                    Không có thông báo nào.
                  </div>
                )}
              </div>
              <div className="p-2 border-t border-[#E5E8EE] text-center">
                <button onClick={() => navigate('/notifications')} className="inline-flex items-center justify-center gap-1 w-full py-1.5 text-xs font-semibold text-[#008FD5] hover:text-[#006193] transition-colors cursor-pointer">
                  <span>Xem tất cả thông báo</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-[#E5E8EE]"></div>

        {/* User Profile Trigger Button */}
        <div className="relative">
          <button
            aria-expanded={isProfileOpen}
            aria-haspopup="true"
            onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
            className="flex items-center gap-3 p-1 sm:px-2 py-1.5 rounded-lg hover:bg-slate-100 focus:outline-none transition-colors text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#008FD5] text-white font-semibold flex items-center justify-center text-sm shadow-sm ring-2 ring-white">
              {initials}
            </div>
            <div className="hidden sm:flex flex-col text-left leading-none">
              <span className="text-sm font-semibold text-slate-800 group-hover:text-slate-900">{user?.fullName || 'Trịnh Xuân Diện'}</span>
              <span className="text-[11px] text-slate-500 font-medium mt-0.5">Học viên</span>
            </div>
            <span 
              className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-slate-600 transition-transform duration-200" 
              style={{ transform: isProfileOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              expand_more
            </span>
          </button>

          {/* Dropdown Menu (Menu Hồ sơ) */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E5E8EE] py-2 z-50 transform origin-top-right transition-all">
              {/* User info header */}
              <div className="px-4 py-3 border-b border-[#E5E8EE]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#008FD5] text-white font-semibold flex items-center justify-center text-sm shadow-sm shrink-0">
                    {initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-900 truncate">{user?.fullName || 'Trịnh Xuân Diện'}</p>
                    <p className="text-xs text-slate-500 truncate">{user?.email || 'trinhxuandien@example.com'}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E6F4FA] text-[#006193]">Học viên chính thức</span>
                  </div>
                </div>
              </div>

              {/* Menu items */}
              <div className="py-1">
                <button onClick={() => navigate('/profile')} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                  <span className="material-symbols-outlined text-[20px] text-slate-400">person</span>
                  <span>Thông tin cá nhân</span>
                </button>
                <div className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-slate-400">light_mode</span>
                    <span>Chế độ giao diện</span>
                  </div>
                  <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200 text-xs">
                    <button 
                      onClick={() => setTheme('light')}
                      className={`shadow-sm rounded-full px-2 py-0.5 flex items-center gap-1 font-medium cursor-pointer ${theme === 'light' ? 'bg-white text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <span className={`material-symbols-outlined text-[13px] ${theme === 'light' ? 'text-amber-500' : ''}`}>light_mode</span>
                      Sáng
                    </button>
                    <button 
                      onClick={() => setTheme('dark')}
                      className={`shadow-sm rounded-full px-2 py-0.5 flex items-center gap-1 font-medium cursor-pointer ${theme === 'dark' ? 'bg-white text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <span className={`material-symbols-outlined text-[13px] ${theme === 'dark' ? 'text-indigo-500' : ''}`}>dark_mode</span>
                      Tối
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-slate-400">translate</span>
                    <span>Ngôn ngữ</span>
                  </div>
                  <button 
                    onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                    className="flex items-center gap-1 text-xs font-semibold text-[#006193] bg-[#E6F4FA] hover:bg-[#D5EBF5] transition-colors px-2 py-1 rounded cursor-pointer"
                  >
                    <span>{language === 'vi' ? 'Tiếng Việt' : 'English'}</span>
                    <span className="material-symbols-outlined text-[14px]">swap_horiz</span>
                  </button>
                </div>
              </div>

              <div className="border-t border-[#E5E8EE] my-1"></div>

              {/* Đăng xuất */}
              <div className="py-1">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium text-left cursor-pointer">
                  <span className="material-symbols-outlined text-[20px] text-red-500">logout</span>
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

