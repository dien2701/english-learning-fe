import React from 'react';

interface Props {
  learned: number;
  total: number;
  status: 'not_started' | 'learning' | 'completed';
}

const FlashcardProgress: React.FC<Props> = ({ learned, total, status }) => {
  const percent = total > 0 ? Math.round((learned / total) * 100) : 0;
  
  const getStatusText = () => {
    if (status === 'completed') return <span style={{ color: '#16A34A', fontWeight: 500 }}>Đã hoàn thành</span>;
    if (status === 'not_started') return <span style={{ color: '#94A3B8' }}>Chưa bắt đầu</span>;
    return <span>{learned} / {total} đã học ({percent}%)</span>;
  };

  const getBarColor = () => {
    if (status === 'completed') return '#10B981'; // Emerald 500
    return '#008FD5'; // Brand Blue
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b' }}>
        {getStatusText()}
      </div>
      <div style={{ width: '100%', height: '6px', backgroundColor: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden' }}>
        <div 
          style={{ 
            height: '100%', 
            backgroundColor: getBarColor(), 
            borderRadius: '9999px', 
            width: `${percent}%`,
            transition: 'width 0.3s ease'
          }} 
        />
      </div>
    </div>
  );
};

export default FlashcardProgress;
