import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Breadcrumb } from 'antd';
import { CheckCircleFilled, SyncOutlined, SoundOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import type { SessionResult, Flashcard, FlashcardDeck } from '../../types/flashcard';
import { flashcardService } from '../../services/flashcardService';
import './Flashcard.css';

const FlashcardResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [deck, setDeck] = useState<FlashcardDeck | null>(null);
  const [reviewCards, setReviewCards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  // Safely extract session result from navigation state
  const sessionResult = location.state?.sessionResult as SessionResult | undefined;

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      setLoading(true);
      const deckData = await flashcardService.getDeckById(Number(id));
      if (deckData) {
        setDeck(deckData);
        // Get cards marked as forgot or hard
        const toReview = await flashcardService.getFlashcardsForReview(Number(id));
        setReviewCards(toReview);
      }
      setLoading(false);
    };
    
    fetchData();
  }, [id]);

  if (!sessionResult && !loading) {
    return (
      <div className="fc-page-container" style={{ textAlign: 'center', paddingTop: '60px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Không tìm thấy kết quả phiên học</h2>
        <Button type="primary" onClick={() => navigate(`/flashcard/${id}`)}>Quay lại bài học</Button>
      </div>
    );
  }

  if (loading || !deck || !sessionResult) return <div className="fc-page-container">Đang tải...</div>;

  const goodCount = sessionResult.easy + sessionResult.normal;
  const needReviewCount = sessionResult.forgot + sessionResult.hard;
  const goodPercent = sessionResult.total > 0 ? Math.round((goodCount / sessionResult.total) * 100) : 0;

  return (
    <div className="fc-page-container">
      {/* Breadcrumb */}
      <div style={{ marginBottom: '24px' }}>
        <Breadcrumb items={[
          { title: <a onClick={() => navigate('/flashcard')}>Flashcard</a> },
          { title: <a onClick={() => navigate(`/flashcard/${id}`)}>{deck.title}</a> },
          { title: 'Kết quả' }
        ]} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h1 className="fc-page-title">Kết quả học</h1>
        <p className="fc-page-subtitle">Phiên học bộ từ vựng {deck.title}</p>
      </div>

      {/* Summary Card */}
      <section className="fc-result-summary">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircleFilled style={{ fontSize: '32px' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1e293b', marginBottom: '2px' }}>
              Bạn đã hoàn thành {sessionResult.total} từ
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b' }}>
              {goodCount} từ đã nhớ tốt, {needReviewCount} từ cần ôn lại
            </p>
          </div>
        </div>

        <div style={{ width: '224px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
            <span>Tỷ lệ nhớ tốt</span>
            <span style={{ fontWeight: 700, color: '#1e293b' }}>{goodPercent}%</span>
          </div>
          <div style={{ width: '100%', height: '10px', background: '#E5E8EE', borderRadius: '9999px', overflow: 'hidden' }}>
            <div style={{ height: '100%', background: '#10B981', borderRadius: '9999px', width: `${goodPercent}%` }}></div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div className="fc-stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#64748b' }}>Đã học</span>
          </div>
          <div>
            <span style={{ fontSize: '32px', fontWeight: 700, color: '#1e293b', marginRight: '6px' }}>{sessionResult.total}</span>
            <span style={{ fontSize: '14px', color: '#64748b' }}>từ</span>
          </div>
        </div>

        <div className="fc-stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#64748b' }}>Đã nhớ</span>
          </div>
          <div>
            <span style={{ fontSize: '32px', fontWeight: 700, color: '#059669', marginRight: '6px' }}>{goodCount}</span>
            <span style={{ fontSize: '14px', color: '#64748b' }}>từ</span>
          </div>
        </div>

        <div className="fc-stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#64748b' }}>Cần ôn lại</span>
          </div>
          <div>
            <span style={{ fontSize: '32px', fontWeight: 700, color: '#D97706', marginRight: '6px' }}>{needReviewCount}</span>
            <span style={{ fontSize: '14px', color: '#64748b' }}>từ</span>
          </div>
        </div>
      </section>

      {/* Words to Review Table */}
      {reviewCards.length > 0 && (
        <section style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E5E8EE', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>Từ cần ôn lại</h3>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>Danh sách các thuật ngữ cần tiếp tục củng cố</p>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E5E8EE', color: '#64748b', fontSize: '12px' }}>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Thuật ngữ</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Nghĩa tiếng Việt</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Trạng thái</th>
                <th style={{ padding: '12px 16px', fontWeight: 600, textAlign: 'right' }}>Phát âm</th>
              </tr>
            </thead>
            <tbody>
              {reviewCards.map(card => (
                <tr key={card.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600, color: '#1e293b' }}>{card.word}</td>
                  <td style={{ padding: '14px 16px', color: '#475569' }}>{card.meaning}</td>
                  <td style={{ padding: '14px 16px' }}>
                    {card.memoryLevel === 'forgot' ? (
                      <span style={{ display: 'inline-flex', padding: '2px 10px', borderRadius: '9999px', fontSize: '12px', fontWeight: 500, background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA' }}>
                        Chưa nhớ
                      </span>
                    ) : (
                      <span style={{ display: 'inline-flex', padding: '2px 10px', borderRadius: '9999px', fontSize: '12px', fontWeight: 500, background: '#FFFBEB', color: '#B45309', border: '1px solid #FDE68A' }}>
                        Khó
                      </span>
                    )}
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <Button type="text" shape="circle" icon={<SoundOutlined />} style={{ color: '#64748b' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* Footer Actions */}
      <footer style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E5E8EE', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a 
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#64748b', cursor: 'pointer' }}
          onClick={() => navigate('/flashcard')}
        >
          <ArrowLeftOutlined /> Quay lại danh sách
        </a>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button 
            size="large"
            onClick={() => navigate(`/flashcard/${id}/study`)}
            style={{ borderRadius: '8px', fontWeight: 600, color: '#1e293b', borderColor: '#E5E8EE' }}
          >
            Tiếp tục học
          </Button>
          <Button 
            type="primary" 
            size="large"
            icon={<SyncOutlined />}
            onClick={() => navigate(`/flashcard/${id}/study`, { state: { mode: 'review' } })}
            style={{ borderRadius: '8px', fontWeight: 600, background: '#008FD5' }}
            disabled={reviewCards.length === 0}
          >
            Ôn lại từ chưa nhớ
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default FlashcardResultPage;
