import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface NavItem {
  key: string;
  icon: string;
  label: string;
  badge?: boolean;
  iconColor?: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: 'Chính',
    items: [
      { key: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
      { key: '/flashcard', icon: 'style', label: 'Học từ vựng' },
      { key: '/writing', icon: 'edit_note', label: 'Luyện viết' },
      { key: '/listening', icon: 'headphones', label: 'Luyện nghe' },
      { key: '/exam', icon: 'quiz', label: 'Bài kiểm tra' },
    ],
  },
  {
    label: 'Học tập',
    items: [
      { key: '/recommendation', icon: 'auto_awesome', label: 'Gợi ý học tập', iconColor: '#F59E0B' },
      { key: '/statistics', icon: 'insights', label: 'Thống kê học tập' },
    ],
  },
  {
    label: 'Cộng đồng',
    items: [
      { key: '/friends', icon: 'group', label: 'Bạn bè' },
      { key: '/chat', icon: 'chat_bubble_outline', label: 'Tin nhắn' },
    ],
  },
  {
    label: 'Tài khoản',
    items: [
      { key: '/notifications', icon: 'notifications', label: 'Thông báo', badge: true },
      { key: '/profile', icon: 'person', label: 'Hồ sơ' },
      { key: '/settings', icon: 'settings', label: 'Cài đặt' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (key: string) => location.pathname === key || location.pathname.startsWith(key + '/');

  const initials = user?.fullName
    ? user.fullName
        .split(' ')
        .map((n) => n[0])
        .slice(-2)
        .join('')
        .toUpperCase()
    : 'TĐ';

  return (
    <aside
      style={{
        width: 256,
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E5E8EE',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 30,
        userSelect: 'none',
      }}
    >
      {/* Brand Header */}
      <div
        style={{
          height: 64,
          padding: '0 20px',
          borderBottom: '1px solid #E5E8EE',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            backgroundColor: '#008FD5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 20, color: '#fff', fontVariationSettings: "'FILL' 1" }}
          >
            school
          </span>
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: '#008FD5',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            En-Learning
          </div>
          <div style={{ fontSize: 11, color: '#64748B', fontWeight: 500, lineHeight: 1 }}>
            Nền tảng học thông minh
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        {navGroups.map((group) => (
          <div key={group.label}>
            <div
              style={{
                padding: '0 12px 8px',
                fontSize: 11,
                fontWeight: 600,
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {group.label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {group.items.map((item) => {
                const active = isActive(item.key);
                return (
                  <a
                    key={item.key}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.key);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      padding: '10px 12px',
                      borderRadius: 8,
                      backgroundColor: active ? '#E6F4FA' : 'transparent',
                      color: active ? '#008FD5' : '#64748B',
                      fontWeight: active ? 600 : 400,
                      fontSize: 14,
                      textDecoration: 'none',
                      transition: 'background-color 0.15s, color 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#F8FAFC';
                        (e.currentTarget as HTMLElement).style.color = '#1E293B';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                        (e.currentTarget as HTMLElement).style.color = '#64748B';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 20,
                          color: active ? '#008FD5' : item.iconColor || 'inherit',
                          fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0",
                        }}
                      >
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: '#008FD5',
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Profile Card */}
      <div style={{ padding: 12, borderTop: '1px solid #E5E8EE' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px',
            borderRadius: 8,
            cursor: 'pointer',
            transition: 'background-color 0.15s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#F8FAFC';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
          onClick={handleLogout}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#E6F4FA',
                color: '#008FD5',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                boxShadow: '0 0 0 2px #fff',
              }}
            >
              {initials}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: '#1E293B', lineHeight: 1.2 }}>
                {user?.fullName || 'Trịnh Điền'}
              </div>
              <div style={{ fontSize: 11, color: '#64748B', lineHeight: 1 }}>Học viên</div>
            </div>
          </div>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#64748B' }}>
            expand_more
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
