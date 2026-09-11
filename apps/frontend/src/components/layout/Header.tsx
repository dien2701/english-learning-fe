import React, { useState, useEffect, useRef } from 'react';

export const Header: React.FC<{ toggleSidebar?: () => void, isSidebarOpen?: boolean }> = ({ toggleSidebar }) => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'VI' | 'EN'>('VI');
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const getOptionBtnClass = (isActive: boolean) => 
    `rounded-full px-2.5 py-1 flex items-center gap-1 font-medium transition-all cursor-pointer ${
      isActive 
        ? 'bg-white text-slate-800 shadow-sm dark:bg-slate-600 dark:text-white dark:shadow-none' 
        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent'
    }`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-surface-main/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-[#E5E8EE] dark:border-slate-800 h-16 w-full flex items-center justify-between px-4 sm:px-6 transition-colors duration-200">
      <div className="flex items-center gap-3 sm:gap-4">
        <button 
          aria-label="Mở/Đóng thanh điều hướng" 
          className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors cursor-pointer"
          onClick={toggleSidebar}
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
        <a className="flex items-center gap-2.5 group cursor-pointer" href="/dashboard">
          <img alt="En-Learning Logo" className="h-9 w-9 object-contain rounded-md transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEwr_YbXb5oX0vziwgVyr3CVi0Ea1vpu8y1GG2QnUGPnZlEjghBLbA7i6k7gRNtz7UAxECUmazJHjkE9vZvGVUbS3Cm2Li84uWNGQ3HTp-C2mjbvnUf1gw-oFZiLbEbLlaeyVuwGKCBulzbyEvELe_YDJgwf6BKMfDv2f2unr4plZJusuLq581L6nHYCE6E0Nrp2FdTznZzC87Ozm9z9fR3wX5xl9cu_82uFOpuPbLaCT4GUplF0ETPB3aHKpD54K7Rg" />
          <span className="text-xl font-bold tracking-tight text-[#008FD5] select-none">En-Learning</span>
        </a>
      </div>

      <div className="flex items-center gap-3 sm:gap-5 relative">
        <div className="relative" ref={notifRef}>
          <button 
            aria-expanded={isNotifOpen} 
            className="relative p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
          >
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900">3</span>
          </button>
          
          <div className={`${isNotifOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-[#E5E8EE] dark:border-slate-700 py-2 z-50 transform origin-top-right transition-all`}>
            <div className="px-4 py-3 border-b border-[#E5E8EE] dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Thông báo</h4>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#E6F4FA] dark:bg-sky-950 text-[#006193] dark:text-sky-400">3 mới</span>
              </div>
              <button className="text-xs font-semibold text-[#008FD5] hover:text-[#006193] dark:hover:text-sky-300 hover:underline transition-colors cursor-pointer" type="button">Đánh dấu tất cả đã đọc</button>
            </div>
            
            <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-700">
              <div className="notif-item unread p-3.5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer flex gap-3 bg-[#F7F9FF] dark:bg-slate-800/80">
                <div className="w-9 h-9 rounded-full bg-[#E6F4FA] dark:bg-sky-950 text-[#008FD5] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">style</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">Nhắc nhở Flashcard</p>
                    <span className="notif-dot w-2 h-2 rounded-full bg-[#008FD5] shrink-0"></span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-2">Bạn có 20 từ vựng cần ôn tập hôm nay theo phương pháp lặp lại ngắt quãng</p>
                  <span className="text-[11px] text-slate-400 dark:text-slate-400 mt-1 block">5 phút trước</span>
                </div>
              </div>
              
              <div className="notif-item p-3.5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer flex gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">quiz</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">Bài kiểm tra</p>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">Bạn đã hoàn thành bài kiểm tra Từ vựng A2 với kết quả 92%</p>
                  <span className="text-[11px] text-slate-400 mt-1 block">Hôm qua</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-6 w-px bg-[#E5E8EE] dark:bg-slate-700"></div>

        <div className="relative" ref={profileRef}>
          <button 
            aria-expanded={isProfileOpen} 
            className="flex items-center gap-3 p-1 sm:px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors text-left group cursor-pointer"
            onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
          >
            <div className="w-9 h-9 rounded-full bg-[#008FD5] text-white font-semibold flex items-center justify-center text-sm shadow-sm ring-2 ring-white dark:ring-slate-900">
              TXD
            </div>
            <div className="hidden sm:flex flex-col text-left leading-none">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">Trịnh Xuân Diện</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Học viên</span>
            </div>
            <span className={`material-symbols-outlined text-[18px] text-slate-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`}>expand_more</span>
          </button>
          
          <div className={`${isProfileOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-[#E5E8EE] dark:border-slate-700 py-2 z-50 transform origin-top-right transition-all`}>
            <div className="px-4 py-3 border-b border-[#E5E8EE] dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#008FD5] text-white font-semibold flex items-center justify-center text-sm shadow-sm shrink-0">
                  TXD
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Trịnh Xuân Diện</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">trinhxuandien@example.com</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E6F4FA] dark:bg-sky-950 text-[#006193] dark:text-sky-300">Học viên chính thức</span>
                </div>
              </div>
            </div>
            
            <div className="py-1">
              <a className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors" href="/profile">
                <span className="material-symbols-outlined text-[20px] text-slate-400">person</span>
                <span>Thông tin cá nhân</span>
              </a>
              
              <div className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-slate-400">language</span>
                  <span>Ngôn ngữ</span>
                </div>
                <div className="flex items-center bg-slate-100 dark:bg-slate-700 p-0.5 rounded-full border border-slate-200 dark:border-slate-600 text-xs">
                  <button className={getOptionBtnClass(language === 'VI')} onClick={() => setLanguage('VI')} type="button">
                    VI
                  </button>
                  <button className={getOptionBtnClass(language === 'EN')} onClick={() => setLanguage('EN')} type="button">
                    EN
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-slate-400">{theme === 'light' ? 'light_mode' : 'dark_mode'}</span>
                  <span>Chế độ giao diện</span>
                </div>
                <div className="flex items-center bg-slate-100 dark:bg-slate-700 p-0.5 rounded-full border border-slate-200 dark:border-slate-600 text-xs">
                  <button className={getOptionBtnClass(theme === 'light')} onClick={() => setTheme('light')} type="button">
                    Sáng
                  </button>
                  <button className={getOptionBtnClass(theme === 'dark')} onClick={() => setTheme('dark')} type="button">
                    Tối
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-[#E5E8EE] dark:border-slate-700 my-1"></div>
            
            <div className="py-1">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors font-medium text-left cursor-pointer" type="button">
                <span className="material-symbols-outlined text-[20px] text-red-500">logout</span>
                <span>Đăng xuất</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
