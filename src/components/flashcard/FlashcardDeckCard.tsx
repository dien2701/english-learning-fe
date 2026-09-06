import React from 'react';
import type { FlashcardDeck } from '../../types/flashcard';
import { useNavigate } from 'react-router-dom';
import { PlayCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import FlashcardProgress from './FlashcardProgress';

interface Props {
  deck: FlashcardDeck;
}

const FlashcardDeckCard: React.FC<Props> = ({ deck }) => {
  const navigate = useNavigate();

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/flashcard/${deck.id}/study`);
  };

  const handleCardClick = () => {
    navigate(`/flashcard/${deck.id}`);
  };

  const getActionText = () => {
    if (deck.status === 'not_started') return 'Bắt đầu học';
    if (deck.status === 'completed') return 'Ôn tập';
    return 'Tiếp tục học';
  };

  const getActionIcon = () => {
    if (deck.status === 'completed') return <SyncOutlined />;
    return <PlayCircleOutlined />;
  };

  return (
    <div className="fc-deck-card" onClick={handleCardClick}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="fc-deck-tag">{deck.topic}</span>
          <span style={{ color: '#94A3B8', fontSize: '12px', fontWeight: 600 }}>{deck.totalCards} từ</span>
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>{deck.title}</h3>
        </div>
      </div>

      <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <FlashcardProgress 
          learned={deck.learnedCards} 
          total={deck.totalCards} 
          status={deck.status} 
        />
        
        <Button 
          type={deck.status === 'completed' ? 'default' : 'primary'}
          icon={getActionIcon()}
          onClick={handleAction}
          style={{ 
            width: '100%', 
            height: '40px', 
            borderRadius: '8px', 
            fontWeight: 600,
            background: deck.status === 'completed' ? '#ffffff' : '#008FD5',
            borderColor: deck.status === 'completed' ? '#E5E8EE' : '#008FD5',
            color: deck.status === 'completed' ? '#334155' : '#ffffff'
          }}
        >
          {getActionText()}
        </Button>
      </div>
    </div>
  );
};

export default FlashcardDeckCard;
