import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { SoundOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import type { FlashcardDeck, Flashcard, FlashcardSession, MemoryLevel } from '../../types/flashcard';
import { flashcardService } from '../../services/flashcardService';
import FlashcardMemoryButtons from '../../components/flashcard/FlashcardMemoryButtons';
import './Flashcard.css';

const FlashcardStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [deck, setDeck] = useState<FlashcardDeck | null>(null);
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [session, setSession] = useState<FlashcardSession | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const initSession = async () => {
      if (!id) return;
      setLoading(true);
      const deckData = await flashcardService.getDeckById(Number(id));
      if (!deckData) {
        setLoading(false);
        return;
      }
      
      let sessionCards: Flashcard[];
      const mode = location.state?.mode;
      
      if (mode === 'review') {
        sessionCards = await flashcardService.getFlashcardsForReview(Number(id));
      } else {
        sessionCards = await flashcardService.getFlashcardsByDeckId(Number(id));
      }
      
      if (sessionCards.length === 0) {
        // If reviewing but no cards to review, fallback to all cards
        sessionCards = deckData.flashcards;
      }

      setDeck(deckData);
      setCards(sessionCards);
      
      setSession({
        deckId: deckData.id,
        totalCards: sessionCards.length,
        currentIndex: 0,
        answers: [],
        startedAt: new Date()
      });
      
      setLoading(false);
    };
    
    initSession();
  }, [id, location.state]);

  const toggleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleNext = useCallback(() => {
    if (!session) return;
    if (session.currentIndex < session.totalCards - 1) {
      setSession(prev => prev ? { ...prev, currentIndex: prev.currentIndex + 1 } : null);
      setIsFlipped(false);
    }
  }, [session]);

  const handlePrev = useCallback(() => {
    if (!session) return;
    if (session.currentIndex > 0) {
      setSession(prev => prev ? { ...prev, currentIndex: prev.currentIndex - 1 } : null);
      setIsFlipped(false);
    }
  }, [session]);

  // Keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput = activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'TEXTAREA' || activeEl?.tagName === 'SELECT';
      if (isInput) return;

      if (e.code === 'Space') {
        e.preventDefault();
        toggleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleFlip, handleNext, handlePrev]);

  const handleMemorySelect = async (level: MemoryLevel) => {
    if (!session || !cards.length) return;
    
    const currentCard = cards[session.currentIndex];
    const newAnswers = [...session.answers];
    const existingIndex = newAnswers.findIndex(a => a.flashcardId === currentCard.id);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { flashcardId: currentCard.id, memoryLevel: level };
    } else {
      newAnswers.push({ flashcardId: currentCard.id, memoryLevel: level });
    }

    const updatedSession = { ...session, answers: newAnswers };
    setSession(updatedSession);

    if (session.currentIndex < session.totalCards - 1) {
      handleNext();
    } else {
      // Session finished
      const result = await flashcardService.finishLearningSession(updatedSession);
      navigate(`/flashcard/${id}/result`, { state: { sessionResult: result, mode: location.state?.mode } });
    }
  };

  if (loading) return <div style={{ padding: '60px', textAlign: 'center' }}>Đang tải bộ thẻ...</div>;
  if (!deck || !session || cards.length === 0) return <div style={{ padding: '60px', textAlign: 'center' }}>Lỗi tải dữ liệu.</div>;

  const currentCard = cards[session.currentIndex];
  const progressPercent = session.totalCards > 0 ? Math.round(((session.currentIndex) / session.totalCards) * 100) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 'calc(100vh - 64px)', background: '#F7F9FF' }}>
      {/* Top Learning Bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E8EE', padding: '12px 32px' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
            <span style={{ fontWeight: 600, color: '#1e293b' }}>{deck.title}</span>
            <span style={{ color: '#E5E8EE' }}>•</span>
            <span style={{ color: '#64748b', fontWeight: 500 }}>Thẻ {session.currentIndex + 1} / {session.totalCards}</span>
          </div>
          
          <div style={{ flex: 1, maxWidth: '320px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '100%', height: '6px', background: '#E5E8EE', borderRadius: '9999px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: '#008FD5', width: `${progressPercent}%`, transition: 'width 0.3s' }}></div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#008FD5' }}>{progressPercent}%</span>
          </div>
          
          <div>
            <Button type="text" onClick={() => navigate(`/flashcard/${deck.id}`)} style={{ color: '#64748b' }}>Thoát</Button>
          </div>
        </div>
      </div>

      {/* Main Flashcard Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 24px' }}>
        <div className="fc-study-card-container">
          {/* Card */}
          <div className="perspective-1000" style={{ marginBottom: '32px' }}>
            <div className={`fc-study-card transform-style-preserve-3d ${isFlipped ? 'card-flipped' : ''}`} onClick={toggleFlip}>
              
              {/* Front */}
              <div className="fc-study-card-face fc-study-card-front backface-hidden">
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, letterSpacing: '2px' }}>TỪ VỰNG</span>
                </div>
                
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <h2 style={{ fontSize: '44px', fontWeight: 700, color: '#1e293b', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                    {currentCard.word}
                  </h2>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#F0F4FA', padding: '4px 12px', borderRadius: '9999px' }}>
                    <span style={{ color: '#64748b', fontSize: '16px', fontFamily: 'monospace' }}>{currentCard.phonetic}</span>
                    <Button 
                      type="text" 
                      shape="circle" 
                      icon={<SoundOutlined />} 
                      onClick={(e) => { e.stopPropagation(); /* Play sound */ }} 
                      style={{ color: '#008FD5', background: '#fff', width: '28px', height: '28px', minWidth: '28px' }}
                    />
                  </div>
                </div>
                
                <div style={{ textAlign: 'center', borderTop: '1px solid #E5E8EE', paddingTop: '16px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>Nhấn vào thẻ để lật xem nghĩa (hoặc phím <kbd style={{ padding: '2px 6px', background: '#EBEEF4', borderRadius: '4px', border: '1px solid #DFE3E9', fontFamily: 'monospace' }}>Space</kbd>)</p>
                </div>
              </div>

              {/* Back */}
              <div className="fc-study-card-face fc-study-card-back backface-hidden">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E5E8EE', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ fontSize: '20px', fontWeight: 700, color: '#1e293b' }}>{currentCard.word}</span>
                    <span style={{ color: '#BFC7D2' }}>—</span>
                    <span style={{ fontSize: '20px', fontWeight: 700, color: '#008FD5' }}>{currentCard.meaning}</span>
                  </div>
                  <Button 
                    type="text" 
                    shape="circle" 
                    icon={<SoundOutlined />} 
                    onClick={(e) => { e.stopPropagation(); /* Play sound */ }} 
                    style={{ color: '#008FD5' }}
                  />
                </div>
                
                <div style={{ textAlign: 'left', padding: '16px 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {currentCard.definition && (
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Định nghĩa</p>
                      <p style={{ fontSize: '16px', color: '#1e293b', lineHeight: 1.5 }}>{currentCard.definition}</p>
                    </div>
                  )}
                  {currentCard.example && (
                    <div>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>Ví dụ</p>
                      <p style={{ fontSize: '16px', color: '#1e293b', fontStyle: 'italic', lineHeight: 1.5 }}>"{currentCard.example}"</p>
                      {currentCard.exampleTranslation && (
                        <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Dịch nghĩa: {currentCard.exampleTranslation}</p>
                      )}
                    </div>
                  )}
                </div>
                
                <div style={{ textAlign: 'center', borderTop: '1px solid #E5E8EE', paddingTop: '16px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>Nhấn vào thẻ để lật lại mặt trước</p>
                </div>
              </div>

            </div>
          </div>

          {/* Memory Actions (Visible only when flipped) */}
          <div style={{ visibility: isFlipped ? 'visible' : 'hidden', opacity: isFlipped ? 1 : 0, transition: 'opacity 0.3s' }}>
            <FlashcardMemoryButtons onSelect={handleMemorySelect} />
          </div>

          {/* Navigation Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px' }}>
            <Button 
              type="text" 
              icon={<ArrowLeftOutlined />} 
              onClick={handlePrev} 
              disabled={session.currentIndex === 0}
              style={{ color: '#64748b', fontWeight: 500 }}
            >
              Trước
            </Button>
            <Button 
              type="text" 
              onClick={handleNext} 
              disabled={session.currentIndex === session.totalCards - 1}
              style={{ color: '#64748b', fontWeight: 500 }}
            >
              Tiếp <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardStudyPage;
