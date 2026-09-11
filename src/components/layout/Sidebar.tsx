import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  key: string;
  icon: string;
  label: string;
  badge?: boolean;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: 'Học tập & Quản lý',
    items: [
      { key: '/dashboard', icon: 'grid_view', label: 'Dashboard' },
      { key: '/flashcard', icon: 'style', label: 'Flashcard' },
      { key: '/writing', icon: 'edit_note', label: 'Luyện viết' },
      { key: '/listening', icon: 'headphones', label: 'Luyện nghe' },
      { key: '/exam', icon: 'quiz', label: 'Bài kiểm tra' },
      { key: '/statistics', icon: 'bar_chart', label: 'Thống kê' },
      { key: '/recommendation', icon: 'auto_awesome', label: 'Gợi ý học tập' },
    ],
  },
  {
    label: 'Tương tác & Hệ thống',
    items: [
      { key: '/chat', icon: 'forum', label: 'Chat' },
      { key: '/profile', icon: 'manage_accounts', label: 'Hồ sơ & Cài đặt' },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (key: string) => location.pathname === key || location.pathname.startsWith(key + '/');

  return (
    <aside
      className={`bg-white border-r border-[#E5E8EE] flex flex-col shrink-0 fixed md:sticky top-16 h-[calc(100vh-4rem)] z-40 md:z-20 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'w-64 translate-x-0' : 'w-[72px] -translate-x-full md:translate-x-0'
      }`}
      id="main-sidebar"
    >
      {/* Navigation Menu */}
      <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden flex flex-col gap-1">
        {navGroups.map((group, groupIdx) => (
          <React.Fragment key={group.label}>
            <div className={`nav-category pb-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider transition-all ${groupIdx > 0 ? 'pt-4' : 'py-1.5'} ${isOpen ? 'px-6' : 'px-0 text-center opacity-0 h-0 overflow-hidden pt-0 pb-0'}`}>
              {group.label}
            </div>
            {group.items.map((item) => {
              const active = isActive(item.key);
              return (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.key);
                  }}
                  title={!isOpen ? item.label : undefined}
                  className={`nav-item flex items-center px-3 py-2.5 mx-3 rounded-lg text-sm transition-colors group ${
                    isOpen ? 'gap-3' : 'justify-center mx-2'
                  } ${
                    active
                      ? 'bg-[#E6F4FA] text-[#008FD5] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[20px] shrink-0 ${
                      active ? 'text-[#008FD5]' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className="nav-text whitespace-nowrap">{item.label}</span>
                  )}
                </a>
              );
            })}
          </React.Fragment>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
