import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Typography, Button } from 'antd';
import {
  DollarOutlined,
  HeartOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import SentimentPanel from '../components/SentimentPanel';
import PortfolioPanel from '../components/PortfolioPanel';
import moment from 'moment';

const { Title } = Typography;

// More accurately extracted data from the provided images
const lowRiskData = {
  summary: [
    { key: '1', strategy: 'Advanced Chan Strategy', finalValue: '$165,266', totalReturn: '65.3%', sharpeRatio: 6.28, maxDrawdown: '12.0%' },
    { key: '2', strategy: 'Buy and Hold', finalValue: '$111,448', totalReturn: '11.4%', sharpeRatio: 0.29, maxDrawdown: '62.5%' },
    { key: '3', strategy: 'BTC Benchmark', finalValue: '$148,357', totalReturn: '48.4%', sharpeRatio: 3.73, maxDrawdown: '21.3%' },
    { key: '4', strategy: 'ETH Benchmark', finalValue: '$131,783', totalReturn: '31.8%', sharpeRatio: 1.96, maxDrawdown: '60.8%' },
  ],
  chart: [
    { date: '24-10', 'Advanced Chan Strategy': 1.0, 'Buy and Hold': 1.0, 'BTC Benchmark': 1.0, 'ETH Benchmark': 1.0 },
    { date: '24-11', 'Advanced Chan Strategy': 1.05, 'Buy and Hold': 1.2, 'BTC Benchmark': 1.15, 'ETH Benchmark': 1.05 },
    { date: '24-12', 'Advanced Chan Strategy': 1.3, 'Buy and Hold': 2.1, 'BTC Benchmark': 1.45, 'ETH Benchmark': 1.35 },
    { date: '25-01', 'Advanced Chan Strategy': 1.25, 'Buy and Hold': 1.6, 'BTC Benchmark': 1.3, 'ETH Benchmark': 1.2 },
    { date: '25-02', 'Advanced Chan Strategy': 1.2, 'Buy and Hold': 1.2, 'BTC Benchmark': 1.15, 'ETH Benchmark': 0.95 },
    { date: '25-03', 'Advanced Chan Strategy': 1.2, 'Buy and Hold': 0.75, 'BTC Benchmark': 1.0, 'ETH Benchmark': 0.7 },
    { date: '25-04', 'Advanced Chan Strategy': 1.25, 'Buy and Hold': 1.0, 'BTC Benchmark': 1.2, 'ETH Benchmark': 1.0 },
    { date: '25-05', 'Advanced Chan Strategy': 1.4, 'Buy and Hold': 1.2, 'BTC Benchmark': 1.35, 'ETH Benchmark': 1.1 },
    { date: '25-06', 'Advanced Chan Strategy': 1.5, 'Buy and Hold': 0.9, 'BTC Benchmark': 1.3, 'ETH Benchmark': 0.8 },
    { date: '25-07', 'Advanced Chan Strategy': 1.68, 'Buy and Hold': 1.2, 'BTC Benchmark': 1.5, 'ETH Benchmark': 1.2 },
    { date: '25-08', 'Advanced Chan Strategy': 1.65, 'Buy and Hold': 1.3, 'BTC Benchmark': 1.48, 'ETH Benchmark': 1.35 },
  ]
};

const highRiskData = {
  summary: [
    { key: '1', strategy: 'Advanced Chan Strategy', finalValue: '$228,032', totalReturn: '128.0%', sharpeRatio: 1.77, maxDrawdown: '12.3%' },
    { key: '2', strategy: 'Buy and Hold', finalValue: '$116,515', totalReturn: '16.5%', sharpeRatio: 0.35, maxDrawdown: '63.0%' },
    { key: '3', strategy: 'BTC Benchmark', finalValue: '$150,249', totalReturn: '50.2%', sharpeRatio: 3.44, maxDrawdown: '21.1%' },
    { key: '4', strategy: 'ETH Benchmark', finalValue: '$131,407', totalReturn: '31.4%', sharpeRatio: 1.61, maxDrawdown: '60.2%' },
  ],
  chart: [
    { date: '24-10', 'Advanced Chan Strategy': 1.0, 'Buy and Hold': 1.0, 'BTC Benchmark': 1.0, 'ETH Benchmark': 1.0 },
    { date: '24-11', 'Advanced Chan Strategy': 1.2, 'Buy and Hold': 1.2, 'BTC Benchmark': 1.15, 'ETH Benchmark': 1.05 },
    { date: '24-12', 'Advanced Chan Strategy': 1.55, 'Buy and Hold': 2.1, 'BTC Benchmark': 1.45, 'ETH Benchmark': 1.35 },
    { date: '25-01', 'Advanced Chan Strategy': 1.45, 'Buy and Hold': 1.6, 'BTC Benchmark': 1.3, 'ETH Benchmark': 1.2 },
    { date: '25-02', 'Advanced Chan Strategy': 1.35, 'Buy and Hold': 1.2, 'BTC Benchmark': 1.15, 'ETH Benchmark': 0.95 },
    { date: '25-03', 'Advanced Chan Strategy': 1.35, 'Buy and Hold': 0.75, 'BTC Benchmark': 1.0, 'ETH Benchmark': 0.7 },
    { date: '25-04', 'Advanced Chan Strategy': 1.5, 'Buy and Hold': 1.0, 'BTC Benchmark': 1.2, 'ETH Benchmark': 1.0 },
    { date: '25-05', 'Advanced Chan Strategy': 1.6, 'Buy and Hold': 1.2, 'BTC Benchmark': 1.35, 'ETH Benchmark': 1.1 },
    { date: '25-06', 'Advanced Chan Strategy': 1.75, 'Buy and Hold': 0.9, 'BTC Benchmark': 1.3, 'ETH Benchmark': 0.8 },
    { date: '25-07', 'Advanced Chan Strategy': 1.9, 'Buy and Hold': 1.2, 'BTC Benchmark': 1.5, 'ETH Benchmark': 1.2 },
    { date: '25-08', 'Advanced Chan Strategy': 1.95, 'Buy and Hold': 1.3, 'BTC Benchmark': 1.48, 'ETH Benchmark': 1.35 },
  ]
};

const columns = [
  { title: 'Strategy', dataIndex: 'strategy', key: 'strategy', width: '25%' },
  { title: 'Final Value', dataIndex: 'finalValue', key: 'finalValue', width: '18%' },
  { title: 'Total Return', dataIndex: 'totalReturn', key: 'totalReturn', width: '18%' },
  { title: 'Sharpe Ratio', dataIndex: 'sharpeRatio', key: 'sharpeRatio', width: '18%' },
  { title: 'Max Drawdown', dataIndex: 'maxDrawdown', key: 'maxDrawdown', width: '21%' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{`Date: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ 
            margin: '4px 0', 
            color: entry.color,
            fontWeight: entry.dataKey === 'Advanced Chan Strategy' ? 'bold' : 'normal'
          }}>
            {`${entry.dataKey}: ${(entry.value * 100 - 100).toFixed(1)}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const PerformanceDisplay = ({ summaryData, chartData }) => (
  <div style={{ marginTop: '16px' }}>
    <Card bordered={false} style={{ marginBottom: '24px' }}>
      <Title level={4} style={{ marginBottom: '20px', textAlign: 'center' }}>
        Strategy Performance: Cumulative Return
      </Title>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" stroke="#666" />
          <YAxis domain={['auto', 'auto']} stroke="#666" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="Advanced Chan Strategy" 
            stroke="#1890ff" 
            strokeWidth={4} 
            dot={{ fill: '#1890ff', r: 4 }}
            activeDot={{ r: 6, fill: '#1890ff' }}
          />
          <Line 
            type="monotone" 
            dataKey="Buy and Hold" 
            stroke="#8a2be2" 
            strokeWidth={2} 
            dot={false}
            strokeDasharray="5 5"
          />
          <Line 
            type="monotone" 
            dataKey="BTC Benchmark" 
            stroke="#ffa500" 
            strokeWidth={2} 
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="ETH Benchmark" 
            stroke="#ff4500" 
            strokeWidth={2} 
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
    <Card bordered={false}>
      <Title level={4} style={{ marginBottom: '20px' }}>Performance Summary</Title>
      <Table 
        dataSource={summaryData} 
        columns={columns} 
        pagination={false} 
        size="small"
        rowClassName={(record) => 
          record.strategy === 'Advanced Chan Strategy' ? 'highlight-row' : ''
        }
      />
    </Card>
  </div>
);

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const [lastRebalanceDate] = useState(moment().subtract(7, 'days'));
  const [activeStrategy, setActiveStrategy] = useState('low-risk');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(moment()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentData = activeStrategy === 'low-risk' ? lowRiskData : highRiskData;

  return (
    <div className="dashboard-grid">
      <SentimentPanel />
      <div className="main-dashboard">
        <div className="performance-header">
          <div className="performance-title">
            <DollarOutlined style={{ marginRight: 8, fontSize: '20px' }} />
            <Title level={3} style={{ margin: 0, display: 'inline' }}>
              Investment Performance Analysis
            </Title>
          </div>
          <div className="strategy-toggle">
            <Button
              type={activeStrategy === 'low-risk' ? 'primary' : 'default'}
              icon={<HeartOutlined />}
              onClick={() => setActiveStrategy('low-risk')}
              style={{ 
                marginRight: '8px',
                borderRadius: '6px',
                fontWeight: activeStrategy === 'low-risk' ? 'bold' : 'normal'
              }}
            >
              With Sentiment (Low Risk)
            </Button>
            <Button
              type={activeStrategy === 'high-risk' ? 'primary' : 'default'}
              icon={<ThunderboltOutlined />}
              onClick={() => setActiveStrategy('high-risk')}
              style={{
                borderRadius: '6px',
                fontWeight: activeStrategy === 'high-risk' ? 'bold' : 'normal'
              }}
            >
              Without Sentiment (High Risk)
            </Button>
          </div>
        </div>
        <PerformanceDisplay summaryData={currentData.summary} chartData={currentData.chart} />
      </div>
      <PortfolioPanel 
        currentTime={currentTime}
        lastRebalanceDate={lastRebalanceDate}
        onManualRebalance={() => console.log('Executing manual rebalance')}
      />
    </div>
  );
};

export default Dashboard;