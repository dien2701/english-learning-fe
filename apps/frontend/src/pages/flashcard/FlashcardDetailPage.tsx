import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Input, Table, Breadcrumb } from 'antd';
import { SearchOutlined, PlayCircleOutlined, SoundOutlined } from '@ant-design/icons';
import type { FlashcardDeck, Flashcard } from '../../types/flashcard';
import { flashcardService } from '../../services/flashcardService';
import './Flashcard.css';

const FlashcardDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [deck, setDeck] = useState<FlashcardDeck | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDeck = async () => {
      if (id) {
        setLoading(true);
        const data = await flashcardService.getDeckById(Number(id));
        setDeck(data || null);
        setLoading(false);
      }
    };
    fetchDeck();
  }, [id]);

  const filteredCards = useMemo(() => {
    if (!deck) return [];
    return deck.flashcards.filter(c => 
      c.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.meaning.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [deck, searchQuery]);

  if (loading) return <div className="fc-page-container">Đang tải dữ liệu...</div>;
  if (!deck) return (
    <div className="fc-page-container" style={{ textAlign: 'center', paddingTop: '60px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Không tìm thấy bộ Flashcard</h2>
      <Button type="primary" onClick={() => navigate('/flashcard')}>Quay lại danh sách</Button>
    </div>
  );

  const getStatusBadge = (card: Flashcard) => {
    if (!card.memoryLevel) {
      return (
        <span className="fc-badge fc-badge-unlearned">
          <span className="fc-badge-dot"></span> Chưa học
        </span>
      );
    }
    
    switch (card.memoryLevel) {
      case 'easy':
      case 'normal':
        return (
          <span className="fc-badge fc-badge-easy">
            <span className="fc-badge-dot"></span> Đã nhớ
          </span>
        );
      case 'hard':
        return (
          <span className="fc-badge fc-badge-hard">
            <span className="fc-badge-dot"></span> Khó
          </span>
        );
      case 'forgot':
        return (
          <span className="fc-badge fc-badge-forgot">
            <span className="fc-badge-dot"></span> Chưa nhớ
          </span>
        );
    }
  };

  const columns = [
    {
      title: 'Từ',
      dataIndex: 'word',
      key: 'word',
      render: (text: string) => <span style={{ fontWeight: 700, color: '#008FD5', fontSize: '16px' }}>{text}</span>,
      width: '25%'
    },
    {
      title: 'Phiên âm',
      dataIndex: 'phonetic',
      key: 'phonetic',
      render: (text: string) => <span style={{ color: '#64748b', fontFamily: 'monospace' }}>{text}</span>,
      width: '20%'
    },
    {
      title: 'Nghĩa',
      dataIndex: 'meaning',
      key: 'meaning',
      render: (text: string) => <span style={{ fontWeight: 500, color: '#1e293b' }}>{text}</span>,
    },
    {
      title: 'Trạng thái',
      key: 'status',
      align: 'center' as const,
      render: (_text: unknown, record: Flashcard) => getStatusBadge(record),
      width: '15%'
    },
    {
      title: 'Phát âm',
      key: 'action',
      align: 'right' as const,
      render: () => (
        <Button 
          type="text" 
          icon={<SoundOutlined />} 
          style={{ color: '#008FD5' }} 
        />
      ),
      width: '10%'
    }
  ];

  return (
    <div className="fc-page-container">
      <div style={{ marginBottom: '24px' }}>
        <Breadcrumb items={[
          { title: <a onClick={() => navigate('/flashcard')}>Flashcard</a> },
          { title: deck.title }
        ]} />
      </div>

      <div className="fc-title-section">
        <div>
          <h1 className="fc-page-title">{deck.title}</h1>
          <p className="fc-page-subtitle">{deck.description}</p>
        </div>
      </div>

      <div className="fc-detail-summary-card">
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div className="fc-detail-stats">
            <span style={{ fontSize: '20px', fontWeight: 700, color: '#1e293b' }}>{deck.totalCards} từ vựng</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span style={{ color: '#64748b', fontWeight: 500 }}>{deck.learnedCards} / {deck.totalCards} đã học</span>
            <span style={{ padding: '2px 10px', borderRadius: '9999px', background: '#e0f2fe', color: '#004b72', fontWeight: 600, fontSize: '12px' }}>
              {deck.totalCards > 0 ? Math.round((deck.learnedCards / deck.totalCards) * 100) : 0}% hoàn thành
            </span>
          </div>
          
          <div style={{ width: '100%', maxWidth: '600px', height: '10px', background: '#E5E8EE', borderRadius: '9999px', marginTop: '16px', overflow: 'hidden' }}>
            <div 
              style={{ 
                height: '100%', 
                background: '#008FD5', 
                borderRadius: '9999px', 
                width: `${deck.totalCards > 0 ? (deck.learnedCards / deck.totalCards) * 100 : 0}%` 
              }} 
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Button 
            type="primary" 
            size="large" 
            icon={<PlayCircleOutlined />}
            onClick={() => navigate(`/flashcard/${deck.id}/study`)}
            style={{ borderRadius: '8px', fontWeight: 600, padding: '0 24px' }}
          >
            {deck.learnedCards > 0 && deck.learnedCards < deck.totalCards ? 'Tiếp tục học' : 'Bắt đầu học'}
          </Button>
          
          {deck.learnedCards > 0 && (
            <Button 
              size="large"
              onClick={() => navigate(`/flashcard/${deck.id}/study`, { state: { mode: 'review' } })}
              style={{ borderRadius: '8px', fontWeight: 600, color: '#008FD5', borderColor: '#E5E8EE' }}
            >
              Ôn từ khó
            </Button>
          )}
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E5E8EE', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #E5E8EE', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, margin: 0 }}>Danh sách từ vựng</h2>
            <span style={{ background: '#f1f5f9', color: '#64748b', padding: '2px 10px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600 }}>
              {deck.flashcards.length} mục
            </span>
          </div>
          <div>
            <Input 
              placeholder="Tìm từ, phiên âm, nghĩa..." 
              prefix={<SearchOutlined style={{ color: '#94A3B8' }} />}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '250px', borderRadius: '8px' }}
            />
          </div>
        </div>
        
        <Table 
          columns={columns} 
          dataSource={filteredCards} 
          rowKey="id"
          pagination={false}
          scroll={{ x: 600 }}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default FlashcardDetailPage;
