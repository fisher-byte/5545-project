import React from 'react';
import { Tabs } from 'antd';
import { DashboardOutlined, BarChartOutlined, PictureOutlined } from '@ant-design/icons';
import Dashboard from './pages/Dashboard';
import StrategyDeepDive from './pages/StrategyDeepDive';
import StrategyVisualization from './pages/StrategyVisualization';

function App() {
  const tabStyle = {
    color: 'rgba(255, 255, 255, 0.65)',
    fontSize: '16px',
    padding: '10px 24px',
    border: 'none',
  };

  const activeTabStyle = {
    color: '#ffffff',
    fontSize: '16px',
    padding: '10px 24px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    borderBottom: '2px solid #1890ff',
  };
  
  return (
    <div className="dashboard-container">
      <div className="content-wrapper">
        <header className="header">
          <img 
            src="https://res.cloudinary.com/djian141s/image/upload/v1754373548/jimeng-2025-07-24-2057-Luxurious_2D_metallic_gold_logo_for__Cha...-removebg-preview_fuvhjc.png" 
            alt="ChanTech Logo" 
            className="logo"
          />
          <div>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>ChanTech</h1>
            <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Quantitative Investment Intelligence Platform</p>
          </div>
        </header>
        
        <Tabs 
          defaultActiveKey="1" 
          className="nav-tabs-custom"
        >
          <Tabs.TabPane 
            tab={
              <span>
                <DashboardOutlined />
                Investment Dashboard
              </span>
            } 
            key="1"
          >
            <Dashboard />
          </Tabs.TabPane>
          <Tabs.TabPane 
            tab={
              <span>
                <BarChartOutlined />
                Strategy Deep Dive
              </span>
            } 
            key="2"
          >
            <StrategyDeepDive />
          </Tabs.TabPane>
          <Tabs.TabPane 
            tab={
              <span>
                <PictureOutlined />
                Strategy Visualization
              </span>
            } 
            key="3"
          >
            <StrategyVisualization />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
