import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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

  // Greeting based on time
  const hour = new Date().getHours();
  let greeting = 'Chào';
  if (hour >= 5 && hour < 12) greeting = 'Chào buổi sáng';
  else if (hour >= 12 && hour < 18) greeting = 'Chào buổi chiều';
  else greeting = 'Chào buổi tối';

  const firstName = user?.fullName?.split(' ').pop() || 'Điền';

  return (
    <header
      style={{
        height: 64,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E8EE',
        position: 'sticky',
        top: 0,
        zIndex: 20,
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
      }}
    >
      {/* Left: Greeting */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 700,
            color: '#1E293B',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            lineHeight: 1.2,
          }}
        >
          {greeting}, {firstName} <span style={{ fontSize: 16 }}>👋</span>
        </h1>
        <p
          style={{
            margin: '2px 0 0',
            fontSize: 12,
            color: '#64748B',
            lineHeight: 1.2,
          }}
        >
          Tiếp tục hành trình học tiếng Anh của bạn.
        </p>
      </div>

      {/* Right: Search + Notification + Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Search */}
        <div style={{ position: 'relative', width: 256 }}>
          <span
            className="material-symbols-outlined"
            style={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 18,
              color: '#64748B',
            }}
          >
            search
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm bài học, từ vựng..."
            style={{
              width: '100%',
              backgroundColor: '#F7F9FF',
              fontSize: 12,
              paddingLeft: 36,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              border: '1px solid #E5E8EE',
              outline: 'none',
              color: '#1E293B',
              boxSizing: 'border-box',
              fontFamily: 'Inter, sans-serif',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#008FD5';
              e.currentTarget.style.boxShadow = '0 0 0 1px #008FD5';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#E5E8EE';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Notification Bell */}
        <button
          style={{
            position: 'relative',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            border: '1px solid #E5E8EE',
            backgroundColor: '#FFFFFF',
            color: '#64748B',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.15s, background-color 0.15s',
          }}
          onClick={() => navigate('/notifications')}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = '#008FD5';
            (e.currentTarget as HTMLElement).style.backgroundColor = '#F8FAFC';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = '#64748B';
            (e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF';
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
            notifications
          </span>
          <span
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#DC2626',
              boxShadow: '0 0 0 2px #fff',
            }}
          />
        </button>

        {/* User Avatar */}
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
            fontSize: 12,
            border: '1px solid rgba(0, 143, 213, 0.2)',
            cursor: 'pointer',
          }}
          onClick={handleLogout}
          title="Đăng xuất"
        >
          {initials}
        </div>
      </div>
    </header>
  );
};

export default Header;
