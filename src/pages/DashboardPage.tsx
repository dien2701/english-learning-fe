import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  statCards,
  continueLearning,
  dailyGoal,
  quickActions,
  aiRecommendations,
  skills,
  activityChartData,
  recentActivities,
} from '../mock/dashboardData';

// ─── Material Symbol Icon helper ───────────────────────────────────────────────
interface MIcon {
  name: string;
  size?: number;
  color?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}
const MIcon: React.FC<MIcon> = ({ name, size = 20, color, filled = false, style }) => (
  <span
    className="material-symbols-outlined"
    style={{
      fontSize: size,
      color,
      fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
      lineHeight: 1,
      verticalAlign: 'middle',
      ...style,
    }}
  >
    {name}
  </span>
);

// ─── Stat Cards Row ─────────────────────────────────────────────────────────────
const StatCardsRow: React.FC = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
    }}
  >
    {statCards.map((card) => (
      <div
        key={card.id}
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E8EE',
          borderRadius: 12,
          padding: 20,
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <span style={{ fontSize: 12, fontWeight: 500, color: '#64748B', display: 'block', marginBottom: 4 }}>
            {card.title}
          </span>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#1E293B', letterSpacing: '-0.02em' }}>
            {card.value}
            {card.valueSuffix && (
              <span style={{ fontSize: 16, color: '#64748B', fontWeight: 400 }}> {card.valueSuffix}</span>
            )}
          </div>
          <div
            style={{
              fontSize: 12,
              color: card.descColor,
              fontWeight: 500,
              marginTop: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <MIcon name={card.descIcon} size={15} color={card.descColor} filled={card.id === 1} />
            <span>{card.description}</span>
          </div>
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: card.iconBg,
            color: card.iconColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <MIcon name={card.icon} size={22} color={card.iconColor} filled={card.id === 1} />
        </div>
      </div>
    ))}
  </div>
);

// ─── Continue Learning + Daily Goal Row ────────────────────────────────────────
const ContinueLearningRow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '8fr 4fr',
        gap: 20,
      }}
    >
      {/* Tiếp tục học - 8 cols */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E8EE',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '2px 8px',
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  borderRadius: 4,
                  backgroundColor: '#E6F4FA',
                  color: '#008FD5',
                  letterSpacing: '0.06em',
                }}
              >
                {continueLearning.badge}
              </span>
              <span style={{ fontSize: 12, color: '#64748B' }}>{continueLearning.badgeSubtitle}</span>
            </div>
            <h2 style={{ margin: '6px 0 0', fontSize: 20, fontWeight: 700, color: '#1E293B' }}>
              {continueLearning.title}
            </h2>
          </div>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: '#E6F4FA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <MIcon name={continueLearning.icon} size={28} color="#008FD5" />
          </div>
        </div>

        {/* Progress */}
        <div style={{ margin: '20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: 12 }}>
            <span style={{ color: '#64748B', fontWeight: 500 }}>
              {continueLearning.progressLabel}{' '}
              <span style={{ color: '#1E293B', fontWeight: 600 }}>
                {continueLearning.current} / {continueLearning.total} từ
              </span>
            </span>
            <span style={{ color: '#008FD5', fontWeight: 700 }}>{continueLearning.percent}%</span>
          </div>
          <div
            style={{
              width: '100%',
              backgroundColor: '#F1F5F9',
              height: 10,
              borderRadius: 9999,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${continueLearning.percent}%`,
                height: '100%',
                backgroundColor: '#008FD5',
                borderRadius: 9999,
                transition: 'width 0.5s',
              }}
            />
          </div>
          <p style={{ fontSize: 12, color: '#64748B', marginTop: 8 }}>
            Bạn còn <span style={{ fontWeight: 600, color: '#1E293B' }}>{continueLearning.remaining} từ</span> để hoàn thành bài học này.
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => navigate('/flashcard')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#008FD5',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              transition: 'background-color 0.15s, transform 0.1s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#007BB8'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#008FD5'; }}
          >
            <span>Tiếp tục học</span>
            <MIcon name="arrow_forward" size={18} color="#fff" />
          </button>
          <button
            style={{
              padding: '10px 16px',
              backgroundColor: '#FFFFFF',
              color: '#64748B',
              border: '1px solid #E5E8EE',
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'background-color 0.15s, color 0.15s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#F8FAFC';
              (e.currentTarget as HTMLElement).style.color = '#1E293B';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF';
              (e.currentTarget as HTMLElement).style.color = '#64748B';
            }}
          >
            Xem danh sách từ
          </button>
        </div>
      </div>

      {/* Mục tiêu hôm nay - 4 cols */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E8EE',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>Mục tiêu hôm nay</h3>
          <MIcon name="flag" size={20} color="#64748B" />
        </div>

        <div style={{ margin: '16px 0', display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* Circular progress */}
          <div style={{ position: 'relative', width: 80, height: 80, flexShrink: 0 }}>
            <svg width="80" height="80" viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
              <path
                stroke="#F1F5F9"
                strokeWidth="3.5"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                stroke="#008FD5"
                strokeDasharray={`${dailyGoal.percent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 700, color: '#1E293B' }}>{dailyGoal.percent}%</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#1E293B' }}>
              {dailyGoal.studied}{' '}
              <span style={{ fontSize: 14, fontWeight: 400, color: '#64748B' }}>/ {dailyGoal.target} phút</span>
            </div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0', lineHeight: 1.4 }}>
              Bạn chỉ còn <strong style={{ color: '#008FD5' }}>{dailyGoal.remaining} phút</strong> để hoàn thành mục tiêu hôm nay.
            </p>
          </div>
        </div>

        <button
          style={{
            width: '100%',
            padding: '8px 0',
            backgroundColor: '#008FD5',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            transition: 'background-color 0.15s',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#007BB8'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#008FD5'; }}
        >
          <span>Tiếp tục học</span>
          <MIcon name="play_arrow" size={16} color="#fff" />
        </button>
      </div>
    </div>
  );
};

// ─── Quick Actions Row ──────────────────────────────────────────────────────────
const QuickActionsRow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>Học nhanh</h3>
        <span style={{ fontSize: 12, color: '#64748B' }}>Lựa chọn chế độ rèn luyện ngay</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {quickActions.map((action) => (
          <div
            key={action.id}
            onClick={() => navigate(action.route)}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E8EE',
              borderRadius: 12,
              padding: 20,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,143,213,0.5)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.03), 0 2px 4px -2px rgba(0,0,0,0.03)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = '#E5E8EE';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: action.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 12,
                }}
              >
                <MIcon name={action.icon} size={22} color={action.iconColor} />
              </div>
              <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#1E293B' }}>{action.title}</h4>
              <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0', lineHeight: 1.5 }}>{action.description}</p>
            </div>
            <div
              style={{
                marginTop: 16,
                paddingTop: 12,
                borderTop: '1px solid #F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 12,
                fontWeight: 600,
                color: '#008FD5',
              }}
            >
              <span>Bắt đầu</span>
              <MIcon name="arrow_forward" size={18} color="#008FD5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── AI Recommendations + Skills Row ───────────────────────────────────────────
const AiSkillsRow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 20 }}>
      {/* Gợi ý học tập từ AI - 7 cols */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E8EE',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <MIcon name="auto_awesome" size={22} color="#008FD5" />
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>Gợi ý học tập từ AI</h3>
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#008FD5',
                backgroundColor: '#E6F4FA',
                padding: '2px 8px',
                borderRadius: 4,
              }}
            >
              Cá nhân hóa
            </span>
          </div>
          <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 16px', lineHeight: 1.6 }}>
            Bạn đang gặp khó khăn với <strong style={{ color: '#1E293B' }}>thì quá khứ</strong> và một số từ vựng chủ đề{' '}
            <strong style={{ color: '#1E293B' }}>Daily Activities</strong>.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {aiRecommendations.map((rec) => (
              <div
                key={rec.id}
                style={{
                  padding: 14,
                  borderRadius: 8,
                  border: '1px solid #E5E8EE',
                  backgroundColor: 'rgba(248, 250, 252, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background-color 0.15s, border-color 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#F8FAFC';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,143,213,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(248, 250, 252, 0.7)';
                  (e.currentTarget as HTMLElement).style.borderColor = '#E5E8EE';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: rec.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <MIcon name={rec.icon} size={18} color={rec.iconColor} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 12, color: '#1E293B' }}>{rec.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4, fontSize: 11, color: '#64748B' }}>
                      <span
                        style={{
                          backgroundColor: 'rgba(203, 213, 225, 0.8)',
                          color: '#1E293B',
                          padding: '2px 6px',
                          borderRadius: 4,
                          fontSize: 10,
                          fontWeight: 500,
                        }}
                      >
                        {rec.category}
                      </span>
                      <span>·</span>
                      <span>Ước tính: {rec.estimatedTime}</span>
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    padding: '6px 14px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'background-color 0.15s',
                    fontFamily: 'Inter, sans-serif',
                    ...(rec.buttonVariant === 'primary'
                      ? {
                          backgroundColor: '#008FD5',
                          color: '#fff',
                          border: 'none',
                        }
                      : {
                          backgroundColor: '#fff',
                          color: '#008FD5',
                          border: '1px solid #008FD5',
                        }),
                  }}
                >
                  {rec.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #F1F5F9' }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigate('/recommendation'); }}
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#008FD5',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span>Xem tất cả gợi ý</span>
            <MIcon name="arrow_forward" size={16} color="#008FD5" />
          </a>
        </div>
      </div>

      {/* Kỹ năng của bạn - 5 cols */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E8EE',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>Kỹ năng của bạn</h3>
            <span style={{ fontSize: 12, color: '#64748B', fontWeight: 500 }}>Trình độ: Trung cấp B1</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {skills.map((skill) => (
              <div key={skill.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 500, marginBottom: 6 }}>
                  <span style={{ color: '#1E293B' }}>{skill.name}</span>
                  <span style={{ color: '#008FD5', fontWeight: 700 }}>{skill.percent}%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#F1F5F9',
                    height: 8,
                    borderRadius: 9999,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.percent}%`,
                      height: '100%',
                      backgroundColor: '#008FD5',
                      borderRadius: 9999,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20, paddingTop: 12, borderTop: '1px solid #F1F5F9' }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigate('/statistics'); }}
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#008FD5',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span>Xem thống kê chi tiết</span>
            <MIcon name="arrow_forward" size={16} color="#008FD5" />
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Activity Chart + Recent Activities Row ─────────────────────────────────────
const ActivityRow: React.FC = () => {
  const navigate = useNavigate();
  const peakDay = activityChartData.find((d) => d.isPeak);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 20 }}>
      {/* Hoạt động học tập - Bar Chart - 7 cols */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E8EE',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>Hoạt động học tập</h3>
              <span style={{ fontSize: 12, color: '#64748B' }}>
                Tổng thời gian: <strong style={{ color: '#1E293B' }}>4 giờ 35 phút</strong>
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: '#64748B',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E5E8EE',
                padding: '4px 10px',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                cursor: 'pointer',
              }}
            >
              7 ngày gần đây
              <MIcon name="expand_more" size={14} color="#64748B" />
            </span>
          </div>

          {/* Bar Chart */}
          <div style={{ paddingTop: 24, paddingBottom: 8 }}>
            <div
              style={{
                height: 176,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 12,
                padding: '0 8px',
                borderBottom: '1px solid #E5E8EE',
              }}
            >
              {activityChartData.map((bar, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                  className={`chart-bar-group${bar.isPeak ? ' peak' : ''}`}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: bar.isPeak ? '#008FD5' : '#64748B',
                      fontWeight: bar.isPeak ? 700 : 500,
                      opacity: bar.isPeak ? 1 : 0,
                      transition: 'opacity 0.2s',
                    }}
                    className="bar-label"
                  >
                    {bar.minutes}m
                  </div>
                  <div
                    style={{
                      width: '100%',
                      maxWidth: 36,
                      height: `${bar.heightPercent}%`,
                      backgroundColor: bar.isPeak ? '#008FD5' : 'rgba(0,143,213,0.2)',
                      borderRadius: '4px 4px 0 0',
                      transition: 'background-color 0.2s',
                      boxShadow: bar.isPeak ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                    }}
                    className="bar-fill"
                  />
                </div>
              ))}
            </div>
            {/* Day labels */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 8px 0',
                fontSize: 12,
                color: '#64748B',
                fontWeight: 500,
              }}
            >
              {activityChartData.map((bar, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    color: bar.isPeak ? '#008FD5' : '#64748B',
                    fontWeight: bar.isPeak ? 700 : 500,
                  }}
                >
                  {bar.day}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, fontSize: 12, color: '#64748B' }}>
          <span>
            Ngày học tích cực nhất: <strong style={{ color: '#1E293B' }}>Thứ Bảy ({peakDay?.minutes} phút)</strong>
          </span>
          <span style={{ color: '#16A34A', fontWeight: 500 }}>Đạt 110% mục tiêu</span>
        </div>
      </div>

      {/* Hoạt động gần đây - 5 cols */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E8EE',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>Hoạt động gần đây</h3>
            <MIcon name="history" size={18} color="#64748B" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {recentActivities.map((activity) => (
              <div key={activity.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: activity.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <MIcon name={activity.icon} size={18} color={activity.iconColor} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 12,
                      color: '#1E293B',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {activity.title}
                  </div>
                  <div style={{ fontSize: 11, color: '#64748B', marginTop: 2 }}>
                    {activity.id === 2 ? (
                      <>
                        Điểm AI: <span style={{ fontWeight: 600, color: '#16A34A' }}>8.5 / 10</span>
                      </>
                    ) : activity.id === 3 ? (
                      <>
                        Điểm: <span style={{ fontWeight: 600, color: '#008FD5' }}>82%</span>
                      </>
                    ) : (
                      activity.detail
                    )}
                  </div>
                </div>
                <span style={{ fontSize: 11, color: '#64748B', flexShrink: 0 }}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #F1F5F9' }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigate('/statistics'); }}
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#008FD5',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span>Xem tất cả hoạt động</span>
            <MIcon name="arrow_forward" size={16} color="#008FD5" />
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Main Dashboard Page ────────────────────────────────────────────────────────
const DashboardPage: React.FC = () => {
  return (
    <main
      style={{
        flex: 1,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        maxWidth: 1280 + 64, // max-w-7xl equivalent
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Row 1: 4 Stat Cards */}
      <StatCardsRow />

      {/* Row 2: Continue Learning (8 cols) + Daily Goal (4 cols) */}
      <ContinueLearningRow />

      {/* Row 3: Quick Actions (4 cols) */}
      <QuickActionsRow />

      {/* Row 4: AI Recommendations (7 cols) + Skills (5 cols) */}
      <AiSkillsRow />

      {/* Row 5: Activity Chart (7 cols) + Recent Activities (5 cols) */}
      <ActivityRow />
    </main>
  );
};

export default DashboardPage;
