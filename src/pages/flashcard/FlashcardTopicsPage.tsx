import React, { useEffect, useState, useMemo } from 'react';
import { Input, Button, Empty } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { FlashcardDeck } from '../../types/flashcard';
import { flashcardService } from '../../services/flashcardService';
import FlashcardDeckCard from '../../components/flashcard/FlashcardDeckCard';
import './Flashcard.css';

const TOPICS = ["Tất cả chủ đề", "Giao tiếp", "Công việc", "Du lịch", "Công nghệ", "Đời sống", "Giáo dục"];

const FlashcardTopicsPage: React.FC = () => {
  const [decks, setDecks] = useState<FlashcardDeck[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Tất cả chủ đề");

  useEffect(() => {
    const fetchDecks = async () => {
      setLoading(true);
      const data = await flashcardService.getDecks();
      setDecks(data);
      setLoading(false);
    };
    fetchDecks();
  }, []);

  const filteredDecks = useMemo(() => {
    return decks.filter(deck => {
      const matchSearch = deck.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          deck.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchTopic = selectedTopic === "Tất cả chủ đề" || deck.topic === selectedTopic;
      return matchSearch && matchTopic;
    });
  }, [decks, searchQuery, selectedTopic]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTopic("Tất cả chủ đề");
  };

  return (
    <div className="fc-page-container">
      {/* Title & Action */}
      <div className="fc-title-section">
        <div>
          <h1 className="fc-page-title">Flashcard</h1>
          <p className="fc-page-subtitle">Chọn một bộ từ vựng để bắt đầu học</p>
        </div>
        <div>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            style={{ borderRadius: '8px', fontWeight: 600, height: '36px' }}
          >
            Tạo bộ mới
          </Button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="fc-filters-row">
        <Input
          className="fc-search-input"
          placeholder="Tìm bộ Flashcard..."
          prefix={<SearchOutlined style={{ color: '#94A3B8' }} />}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        
        <div className="fc-filter-tags">
          {TOPICS.map(topic => (
            <div 
              key={topic}
              className={`fc-filter-tag ${selectedTopic === topic ? 'active' : ''}`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>

      {/* Deck Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>Đang tải dữ liệu...</div>
      ) : filteredDecks.length > 0 ? (
        <div className="fc-deck-grid">
          {filteredDecks.map(deck => (
            <FlashcardDeckCard key={deck.id} deck={deck} />
          ))}
        </div>
      ) : (
        <div style={{ padding: '60px 0', background: '#fff', borderRadius: '12px', border: '1px solid #E5E8EE' }}>
          <Empty 
            description={<span style={{ color: '#64748b' }}>Không tìm thấy bộ Flashcard phù hợp</span>}
          >
            <Button onClick={clearFilters}>Xóa bộ lọc</Button>
          </Empty>
        </div>
      )}
    </div>
  );
};

export default FlashcardTopicsPage;
