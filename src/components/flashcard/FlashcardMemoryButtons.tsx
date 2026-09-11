import React from 'react';
import type { MemoryLevel } from '../../types/flashcard';
import '../../pages/flashcard/Flashcard.css';

interface Props {
  onSelect: (level: MemoryLevel) => void;
}

const FlashcardMemoryButtons: React.FC<Props> = ({ onSelect }) => {
  return (
    <div style={{ width: '100%', textAlign: 'center', marginBottom: '32px' }}>
      <p style={{ fontSize: '14px', fontWeight: 500, color: '#64748b', marginBottom: '12px' }}>
        Bạn nhớ từ này thế nào?
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        <button 
          className="fc-memory-btn fc-memory-forgot"
          onClick={() => onSelect('forgot')}
        >
          Chưa nhớ
        </button>
        
        <button 
          className="fc-memory-btn fc-memory-hard"
          onClick={() => onSelect('hard')}
        >
          Khó
        </button>
        
        <button 
          className="fc-memory-btn fc-memory-normal"
          onClick={() => onSelect('normal')}
        >
          Bình thường
        </button>
        
        <button 
          className="fc-memory-btn fc-memory-easy"
          onClick={() => onSelect('easy')}
        >
          Dễ
        </button>
      </div>
    </div>
  );
};

export default FlashcardMemoryButtons;
