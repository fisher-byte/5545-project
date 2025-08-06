import React, { useState, useRef, useEffect } from 'react';
import { Card, Input, Button, Avatar, Spin, Empty } from 'antd';
import { 
  RobotOutlined, UserOutlined, SendOutlined, 
  BulbOutlined, QuestionCircleOutlined 
} from '@ant-design/icons';

const { TextArea } = Input;

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I am the ChanTech AI assistant, specialized in answering questions related to quantitative investment strategies. You can ask me about our investment strategies, risk management, performance, and any other questions.',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Suggested questions
  const suggestedQuestions = [
    'What is the maximum drawdown of this strategy?',
    'How do you control portfolio risk?',
    'Why choose these asset classes?',
    'What are the sources of strategy returns?',
    'How to deal with extreme market conditions?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  // Mock AI response
  const getAIResponse = (question) => {
    const responses = {
      'maximum drawdown': 'Based on historical backtesting data, our strategy maintains maximum drawdown within 8%. Through dynamic risk management and timely stop-loss mechanisms, we effectively reduce losses in extreme market conditions.',
      'risk control': 'We employ a multi-layered risk management system: 1) Asset allocation limits, 2) Volatility control, 3) Correlation analysis, 4) Stress testing, ensuring portfolio risk remains within controllable range.',
      'asset classes': 'We select four major asset classes: stocks, bonds, commodities, and cash, mainly based on: 1) Low correlation, 2) Good liquidity, 3) Promising long-term returns, 4) Suitable for quantitative trading.',
      'returns': 'Strategy returns mainly come from: 1) Asset allocation optimization (40%), 2) Market timing ability (30%), 3) Risk premium capture (20%), 4) Rebalancing returns (10%).',
      'extreme': 'Facing black swan events, we have contingency plans: 1) Automatically reduce risk exposure, 2) Increase cash allocation, 3) Deploy hedging tools, 4) Manual intervention mechanisms.'
    };

    // 简单的关键词匹配
    for (const [key, response] of Object.entries(responses)) {
      if (question.includes(key)) {
        return response;
      }
    }

    return 'Thank you for your question! Based on our quantitative strategy framework, this is a great observation. Our model will continue to optimize performance in this area. If you need more detailed explanations, I recommend checking the relevant strategy documentation or contacting our research team.';
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // 模拟AI思考时间
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: getAIResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuestionClick = (question) => {
    setInputValue(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card 
      title={
        <span>
          <          RobotOutlined style={{ marginRight: 8, color: '#1890ff' }} />
          Gemini Assistant
        </span>
      }
      className="ai-chat-container"
    >
      {/* 建议问题 */}
      {messages.length === 1 && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ 
            marginBottom: 12, 
            color: '#666', 
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
          }}>
            <QuestionCircleOutlined style={{ marginRight: 6 }} />
            You can try asking these questions:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {suggestedQuestions.map((question, index) => (
              <Button 
                key={index}
                size="small"
                type="dashed"
                onClick={() => handleQuestionClick(question)}
                style={{ 
                  borderRadius: 16,
                  fontSize: 12,
                  height: 'auto',
                  padding: '4px 12px'
                }}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* 消息列表 */}
      <div className="chat-messages">
        {messages.map(message => (
          <div 
            key={message.id}
            style={{
              display: 'flex',
              marginBottom: 16,
              flexDirection: message.type === 'user' ? 'row-reverse' : 'row'
            }}
          >
            <Avatar 
              icon={message.type === 'user' ? <UserOutlined /> : <RobotOutlined />}
              style={{ 
                backgroundColor: message.type === 'user' ? '#1890ff' : '#52c41a',
                marginLeft: message.type === 'user' ? 8 : 0,
                marginRight: message.type === 'user' ? 0 : 8,
                flexShrink: 0
              }}
            />
            <div 
              className={`message ${message.type}`}
              style={{
                maxWidth: '80%',
                padding: '12px 16px',
                borderRadius: message.type === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                backgroundColor: message.type === 'user' ? '#1890ff' : '#f0f0f0',
                color: message.type === 'user' ? 'white' : '#333',
                wordBreak: 'break-word',
                lineHeight: 1.5
              }}
            >
              {message.content}
              <div style={{ 
                fontSize: 11, 
                opacity: 0.7, 
                marginTop: 4,
                textAlign: message.type === 'user' ? 'right' : 'left'
              }}>
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <Avatar 
              icon={<RobotOutlined />}
              style={{ backgroundColor: '#52c41a', marginRight: 8 }}
            />
            <div style={{
              backgroundColor: '#f0f0f0',
              padding: '12px 16px',
              borderRadius: '16px 16px 16px 4px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Spin size="small" style={{ marginRight: 8 }} />
              AI is thinking...
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* 输入区域 */}
      <div className="chat-input-area">
        <div style={{ display: 'flex', gap: 8 }}>
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={handleKeyPress}
            placeholder="Please enter your question..."
            autoSize={{ minRows: 1, maxRows: 4 }}
            style={{ flexGrow: 1 }}
          />
          <Button 
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            loading={isLoading}
            disabled={!inputValue.trim()}
            style={{
              height: 'auto',
              minHeight: 32,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none'
            }}
          >
            Send
          </Button>
        </div>
        <div style={{ 
          fontSize: 12, 
          color: '#999', 
          marginTop: 8,
          display: 'flex',
          alignItems: 'center'
        }}>
          <BulbOutlined style={{ marginRight: 4 }} />
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </Card>
  );
};

export default AIChat;
