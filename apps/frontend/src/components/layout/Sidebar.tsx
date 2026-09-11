import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    `nav-item flex items-center px-3 py-2.5 mx-3 rounded-lg text-sm transition-all duration-300 group cursor-pointer ${
      isActive 
        ? 'bg-[#E6F4FA] dark:bg-sky-950 text-[#008FD5] dark:text-sky-400 font-semibold' 
        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 font-medium'
    } ${!isOpen ? 'justify-center !px-0 !mx-2' : 'gap-3'}`;

  const getIconClass = (isActive: boolean) => 
    `material-symbols-outlined text-[20px] shrink-0 ${
      isActive
        ? 'text-[#008FD5] dark:text-sky-400'
        : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
    }`;

  const renderNavText = (text: string) => (
    <span className={`nav-text whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? 'w-auto opacity-100' : 'w-0 opacity-0 md:hidden'}`}>
      {text}
    </span>
  );

  return (
    <aside 
      className={`fixed top-16 left-0 bottom-0 bg-surface-main dark:bg-slate-900 border-r border-[#E5E8EE] dark:border-slate-800 flex flex-col z-30 transition-all duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full md:translate-x-0'}`} 
      id="main-sidebar"
    >
      <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden flex flex-col gap-1">
        <div className={`nav-category px-6 py-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden py-0'}`}>
          Học tập & Quản lý
        </div>
        
        <NavLink to="/dashboard" className={getNavClass} title="Dashboard">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>grid_view</span>
              {renderNavText("Dashboard")}
            </>
          )}
        </NavLink>
        
        <NavLink to="/flashcard" className={getNavClass} title="Flashcard">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>style</span>
              {renderNavText("Flashcard")}
            </>
          )}
        </NavLink>

        <NavLink to="/writing" className={getNavClass} title="Luyện viết">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>edit_note</span>
              {renderNavText("Luyện viết")}
            </>
          )}
        </NavLink>
        
        <NavLink to="/listening" className={getNavClass} title="Luyện nghe">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>headphones</span>
              {renderNavText("Luyện nghe")}
            </>
          )}
        </NavLink>
        
        <NavLink to="/exam" className={getNavClass} title="Bài kiểm tra">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>quiz</span>
              {renderNavText("Bài kiểm tra")}
            </>
          )}
        </NavLink>

        <NavLink to="/statistics" className={getNavClass} title="Thống kê">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>bar_chart</span>
              {renderNavText("Thống kê")}
            </>
          )}
        </NavLink>

        <NavLink to="/recommendation" className={getNavClass} title="Gợi ý học tập">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>auto_awesome</span>
              {renderNavText("Gợi ý học tập")}
            </>
          )}
        </NavLink>
        
        <div className={`nav-category px-6 pt-4 pb-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden py-0 pt-0'}`}>
          Tương tác & Hệ thống
        </div>
        
        <NavLink to="/chat" className={getNavClass} title="Chat">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>forum</span>
              {renderNavText("Chat")}
            </>
          )}
        </NavLink>

        <NavLink to="/settings" className={getNavClass} title="Hồ sơ & Cài đặt">
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>manage_accounts</span>
              {renderNavText("Hồ sơ & Cài đặt")}
            </>
          )}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
