import React from 'react';
import { Card, Button, Progress, Divider, Statistic } from 'antd';
import { 
  PieChartOutlined, ReloadOutlined, ClockCircleOutlined, DollarOutlined, ArrowUpOutlined
} from '@ant-design/icons';

const PortfolioPanel = ({ currentTime, lastRebalanceDate, onManualRebalance }) => {
  // Optimized cryptocurrency portfolio data - 5 coins with equal 20% allocation
  const cryptoPortfolio = [
    { 
      symbol: 'ADA', 
      name: 'Cardano', 
      allocation: 20, 
      color: '#0033ad', 
      price: '$0.52', 
      change: '+3.2%',
      value: '$25,136',
      amount: '48,338.46'
    },
    { 
      symbol: 'BNB', 
      name: 'Binance Coin', 
      allocation: 20, 
      color: '#f3ba2f', 
      price: '$612.80', 
      change: '+1.9%',
      value: '$25,136',
      amount: '41.02'
    },
    { 
      symbol: 'BTC', 
      name: 'Bitcoin', 
      allocation: 20, 
      color: '#f7931a', 
      price: '$43,250', 
      change: '+2.4%',
      value: '$25,136',
      amount: '0.5812'
    },
    { 
      symbol: 'DOT', 
      name: 'Polkadot', 
      allocation: 20, 
      color: '#e6007a', 
      price: '$7.20', 
      change: '+0.9%',
      value: '$25,136',
      amount: '3,491.11'
    },
    { 
      symbol: 'ETH', 
      name: 'Ethereum', 
      allocation: 20, 
      color: '#627eea', 
      price: '$2,680', 
      change: '+1.8%',
      value: '$25,136',
      amount: '9.38'
    }
  ];

  const totalValue = 125680;
  const totalChange = '+2.8%';
  const daysSinceRebalance = currentTime.diff(lastRebalanceDate, 'days');
  const nextRebalanceDate = lastRebalanceDate.clone().add(30, 'days');
  const daysUntilRebalance = nextRebalanceDate.diff(currentTime, 'days');

  return (
    <div className="portfolio-panel">
      <h3 style={{ marginBottom: 20, color: '#1a1a2e', fontWeight: 600 }}>
        <PieChartOutlined style={{ marginRight: 8 }} />
        Portfolio Management
      </h3>

      {/* 当前时间 */}
      <Card style={{ marginBottom: 16, textAlign: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>
          <ClockCircleOutlined style={{ marginRight: 8 }} />
          Current Time
        </div>
        <div style={{ fontSize: 14, color: '#666' }}>
          {currentTime.format('YYYY-MM-DD')}
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#1890ff' }}>
          {currentTime.format('HH:mm:ss')}
        </div>
      </Card>

      {/* 投资组合概览 */}
      <Card style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Statistic
            title="Portfolio Value"
            value={totalValue}
            precision={0}
            valueStyle={{ color: '#1890ff', fontSize: '20px', fontWeight: 'bold' }}
            prefix={<DollarOutlined />}
          />
          <Statistic
            title="24h Change"
            value={totalChange}
            valueStyle={{ 
              color: totalChange.startsWith('+') ? '#52c41a' : '#f5222d',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
            prefix={<ArrowUpOutlined />}
          />
        </div>
      </Card>

      {/* 虚拟币持仓详情 */}
      <Card title="Current Holdings (Equal Weight Strategy)" style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 16 }}>
          {cryptoPortfolio.map(coin => (
            <div key={coin.symbol} style={{ 
              marginBottom: 16, 
              padding: '16px', 
              border: '1px solid #f0f0f0', 
              borderRadius: '12px',
              background: '#fafafa'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: coin.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    marginRight: '12px'
                  }}>
                    {coin.symbol}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#1a1a2e' }}>
                      {coin.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {coin.amount} {coin.symbol}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: '#1a1a2e' }}>
                    {coin.allocation}%
                  </div>
                  <div style={{ fontSize: '12px', color: coin.change.startsWith('+') ? '#52c41a' : '#f5222d' }}>
                    {coin.change}
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: '12px', color: '#666' }}>
                  @ {coin.price}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a2e' }}>
                  {coin.value}
                </span>
              </div>
              
              <Progress 
                percent={coin.allocation} 
                strokeColor={coin.color}
                showInfo={false}
                size="small"
                strokeWidth={6}
              />
            </div>
          ))}
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          padding: '16px', 
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>
            Balanced Portfolio Strategy
          </div>
          <div style={{ fontSize: '12px', opacity: 0.9 }}>
            Equal 20% allocation across 5 major cryptocurrencies
          </div>
        </div>
      </Card>

      {/* 再平衡信息 */}
      <Card title="Rebalancing Schedule">
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span>Last Rebalance:</span>
            <span style={{ fontWeight: 500 }}>
              {lastRebalanceDate.format('MM-DD')}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span>Days Since:</span>
            <span style={{ fontWeight: 500, color: '#faad14' }}>
              {daysSinceRebalance} days
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <span>Next Rebalance:</span>
            <span style={{ fontWeight: 500, color: daysUntilRebalance <= 7 ? '#f5222d' : '#52c41a' }}>
              {daysUntilRebalance > 0 ? `in ${daysUntilRebalance} days` : 'Rebalance needed'}
            </span>
          </div>
        </div>

        <Button 
          type="primary" 
          block 
          icon={<ReloadOutlined />}
          onClick={onManualRebalance}
          style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            height: '40px',
            fontWeight: 'bold'
          }}
        >
          Execute Rebalance
        </Button>
      </Card>
    </div>
  );
};

export default PortfolioPanel;
