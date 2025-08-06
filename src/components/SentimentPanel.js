import React, { useState, useEffect } from 'react';
import { Card, Progress, Tag, Button, Divider } from 'antd';
import { 
  SmileOutlined, FrownOutlined, MehOutlined, 
  TrendingUpOutlined, TrendingDownOutlined, ReloadOutlined 
} from '@ant-design/icons';

const SentimentPanel = () => {
  const [sentimentScore] = useState(68); // 当前市场情绪指数
  const [isLoading, setIsLoading] = useState(false);

  // Mock news data
  const [news] = useState([
    {
      id: 1,
      title: "Fed Holds Rates Steady, Market Sentiment Turns Optimistic",
      sentiment: "positive",
      keywords: ["Fed", "Interest Rates", "Optimistic"],
      time: "2 hours ago",
      source: "Financial News"
    },
    {
      id: 2,
      title: "Tech Stocks Lead Rally, AI Concepts Show Strong Performance",
      sentiment: "positive", 
      keywords: ["Tech Stocks", "AI", "Strong"],
      time: "4 hours ago",
      source: "Market News"
    },
    {
      id: 3,
      title: "Inflation Data Below Expectations, Risk Appetite Increases",
      sentiment: "neutral",
      keywords: ["Inflation", "Expectations", "Risk Appetite"],
      time: "6 hours ago",
      source: "Economic Data"
    }
  ]);

  const getSentimentIcon = () => {
    if (sentimentScore >= 70) return <SmileOutlined style={{ color: 'white', fontSize: 32 }} />;
    if (sentimentScore >= 40) return <MehOutlined style={{ color: 'white', fontSize: 32 }} />;
    return <FrownOutlined style={{ color: 'white', fontSize: 32 }} />;
  };

  const getSentimentText = () => {
    if (sentimentScore >= 70) return 'Optimistic';
    if (sentimentScore >= 40) return 'Neutral';
    return 'Pessimistic';
  };

  const getSentimentTag = (sentiment) => {
    const colors = {
      positive: '#52c41a',
      neutral: '#faad14', 
      negative: '#ff4d4f'
    };
    
    const texts = {
      positive: 'Positive',
      neutral: 'Neutral',
      negative: 'Negative'
    };

    return <Tag color={colors[sentiment]}>{texts[sentiment]}</Tag>;
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="sentiment-panel">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h3 style={{ margin: 0, color: '#1a1a2e', fontWeight: 600 }}>
          📊 Market Sentiment Analysis
        </h3>
        <Button 
          icon={<ReloadOutlined />} 
          size="small"
          loading={isLoading}
          onClick={handleRefresh}
        />
      </div>

      {/* 市场情绪指数 */}
      <Card 
        style={{ 
          marginBottom: 20, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', // Gold to Orange gradient
          color: 'white',
          border: 'none'
        }}
      >
        <div style={{ marginBottom: 16 }}>
          {getSentimentIcon()}
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          {sentimentScore}
        </div>
        <div style={{ fontSize: 16, opacity: 0.9 }}>
          Market Sentiment Index - {getSentimentText()}
        </div>
        <Progress 
          percent={sentimentScore} 
          showInfo={false}
          strokeColor="rgba(255,255,255,0.8)"
          trailColor="rgba(255,255,255,0.2)"
          style={{ marginTop: 16 }}
        />
      </Card>

      {/* 近期新闻 */}
      <div>
        <h4 style={{ marginBottom: 16, color: '#1a1a2e' }}>Recent News</h4>
        {news.map(item => (
          <div key={item.id} className="news-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              {getSentimentTag(item.sentiment)}
              <span style={{ fontSize: 12, color: '#999' }}>{item.time}</span>
            </div>
            <h5 style={{ margin: '8px 0', fontSize: 14, lineHeight: 1.4 }}>
              {item.title}
            </h5>
            <div style={{ marginBottom: 8 }}>
              {item.keywords.map(keyword => (
                <Tag key={keyword} size="small" style={{ margin: '2px 4px 2px 0' }}>
                  {keyword}
                </Tag>
              ))}
            </div>
            <div style={{ fontSize: 12, color: '#666' }}>
              Source: {item.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentimentPanel;
