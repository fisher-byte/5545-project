import React from 'react';
import { Card, Row, Col, Typography, Statistic, Timeline, Tag } from 'antd';
import { 
  PictureOutlined, TrophyOutlined, RiseOutlined, SafetyOutlined, 
  BulbOutlined, ThunderboltOutlined, EyeOutlined, BarChartOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const StrategyVisualization = () => {
  return (
    <div className="strategy-content" style={{ maxWidth: 1400, margin: 'auto', padding: '24px' }}>
      
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2} style={{ color: '#1a1a2e', marginBottom: 16 }}>
          <PictureOutlined style={{ marginRight: 12, color: '#722ed1' }} />
          Strategy Visualization & Analytics Dashboard
        </Title>
        <Paragraph style={{ fontSize: '16px', color: '#666', maxWidth: 800, margin: '0 auto' }}>
          Comprehensive visual analytics showcasing our ML-driven trading strategy performance, 
          risk management effectiveness, and market intelligence capabilities.
        </Paragraph>
      </div>

      {/* Key Metrics Overview */}
      <Row gutter={[24, 24]} style={{ marginBottom: 40, justifyContent: 'center' }}>
        <Col xs={24} sm={8} md={6}>
          <Card>
            <Statistic
              title="Model AUC (Buy/Sell)"
              value={0.9351}
              precision={4}
              valueStyle={{ color: '#722ed1' }}
              prefix={<BulbOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Main Visualization Grid */}
      <Row gutter={[24, 24]}>
        <Col lg={12} xs={24}>
          <Card 
            hoverable
            title={
              <span>
                <BarChartOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                Market Conditions Analysis
              </span>
            }
            cover={
              <img 
                alt="Market Conditions Analysis" 
                src="https://res.cloudinary.com/djian141s/image/upload/v1754373281/market_conditions_analysis_vxnfbe.png"
                style={{ height: 280, objectFit: 'cover' }}
              />
            }
          >
            <Paragraph>
              <Text strong>Real-time Market Assessment:</Text> Our system continuously monitors market conditions 
              by integrating multiple data sources including price movements, volume patterns, and sentiment indicators. 
              This analysis helps determine optimal trading environments and adjusts strategy parameters dynamically.
            </Paragraph>
            <div style={{ marginTop: 16 }}>
              <Tag color="blue">Technical Indicators</Tag>
              <Tag color="green">Sentiment Data</Tag>
              <Tag color="orange">Volume Analysis</Tag>
            </div>
          </Card>
        </Col>

        <Col lg={12} xs={24}>
          <Card 
            hoverable
            title={
              <span>
                <ThunderboltOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                Decision Calendar
              </span>
            }
            cover={
              <img 
                alt="Decision Calendar" 
                src="https://res.cloudinary.com/djian141s/image/upload/v1754373280/decision_calendar_lusimm.png"
                style={{ height: 280, objectFit: 'cover' }}
              />
            }
          >
            <Paragraph>
              <Text strong>Strategic Timeline:</Text> Visual representation of key trading decisions, portfolio 
              rebalancing events, and performance milestones. This calendar view helps track the strategy's 
              evolution and identify patterns in decision-making processes.
            </Paragraph>
            <div style={{ marginTop: 16 }}>
              <Tag color="purple">Buy Signals</Tag>
              <Tag color="red">Sell Signals</Tag>
              <Tag color="cyan">Rebalancing</Tag>
            </div>
          </Card>
        </Col>

        <Col lg={12} xs={24}>
          <Card 
            hoverable
            title={
              <span>
                <RiseOutlined style={{ marginRight: 8, color: '#f5222d' }} />
                Cumulative Returns Analysis
              </span>
            }
            cover={
              <img 
                alt="Cumulative Returns" 
                src="https://res.cloudinary.com/djian141s/image/upload/v1754373280/cumulative_returns_fhnuul.png"
                style={{ height: 280, objectFit: 'cover' }}
              />
            }
          >
            <Paragraph>
              <Text strong>Performance Tracking:</Text> Comprehensive comparison of our strategy returns versus 
              traditional benchmarks including Buy & Hold, BTC, and ETH. The chart demonstrates the effectiveness 
              of our ML-driven approach in both bull and bear market conditions.
            </Paragraph>
            <div style={{ marginTop: 16 }}>
              <Tag color="blue">Advanced Chan Strategy</Tag>
              <Tag color="gray">Buy & Hold</Tag>
              <Tag color="gold">BTC Benchmark</Tag>
            </div>
          </Card>
        </Col>

        <Col lg={12} xs={24}>
          <Card 
            hoverable
            title={
              <span>
                <EyeOutlined style={{ marginRight: 8, color: '#fa8c16' }} />
                Signal Timeline Analysis
              </span>
            }
            cover={
              <img 
                alt="Signal Timeline Analysis" 
                src="https://res.cloudinary.com/djian141s/image/upload/v1754373280/signal_timeline_analysis_hs6ybv.png"
                style={{ height: 280, objectFit: 'cover' }}
              />
            }
          >
            <Paragraph>
              <Text strong>Signal Intelligence:</Text> Detailed chronological analysis of buy/sell signal generation, 
              showing accuracy metrics and the impact of sentiment integration on signal quality. This visualization 
              helps optimize model parameters and improve prediction accuracy.
            </Paragraph>
            <div style={{ marginTop: 16 }}>
              <Tag color="green">High Confidence</Tag>
              <Tag color="orange">Medium Confidence</Tag>
              <Tag color="red">Low Confidence</Tag>
            </div>
          </Card>
        </Col>

        <Col lg={12} xs={24}>
          <Card 
            hoverable
            title={
              <span>
                <TrophyOutlined style={{ marginRight: 8, color: '#13c2c2' }} />
                Performance Summary
              </span>
            }
            cover={
              <img 
                alt="Performance Summary" 
                src="https://res.cloudinary.com/djian141s/image/upload/v1754373280/performance_summary_jwl0un.png"
                style={{ height: 280, objectFit: 'cover' }}
              />
            }
          >
            <Paragraph>
              <Text strong>Key Metrics Overview:</Text> Comprehensive dashboard showing critical performance 
              indicators including Sharpe ratio, maximum drawdown, win rate, and risk-adjusted returns across 
              various market conditions and time periods.
            </Paragraph>
            <div style={{ marginTop: 16 }}>
              <Tag color="blue">Sharpe Ratio</Tag>
              <Tag color="red">Max Drawdown</Tag>
              <Tag color="green">Win Rate</Tag>
            </div>
          </Card>
        </Col>

        <Col lg={12} xs={24}>
          <Card 
            hoverable
            title={
              <span>
                <BulbOutlined style={{ marginRight: 8, color: '#eb2f96' }} />
                Asset Selection Analysis
              </span>
            }
            cover={
              <img 
                alt="Asset Selection Analysis" 
                src="https://res.cloudinary.com/djian141s/image/upload/v1754373279/asset_selection_analysis_wztan6.png"
                style={{ height: 280, objectFit: 'cover' }}
              />
            }
          >
            <Paragraph>
              <Text strong>Intelligent Asset Selection:</Text> Our ML models analyze multiple factors to identify 
              the most promising cryptocurrency opportunities. This process considers technical indicators, sentiment 
              factors, market cap, liquidity, and correlation patterns.
            </Paragraph>
            <div style={{ marginTop: 16 }}>
              <Tag color="purple">ML Scoring</Tag>
              <Tag color="blue">Technical Analysis</Tag>
              <Tag color="orange">Sentiment Factor</Tag>
            </div>
          </Card>
        </Col>

        <Col span={24}>
          <Card 
            hoverable
            title={
              <span>
                <SafetyOutlined style={{ marginRight: 8, color: '#722ed1' }} />
                Risk-Return Analysis
              </span>
            }
            cover={
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <img 
                  alt="Risk-Return Analysis" 
                  src="https://res.cloudinary.com/djian141s/image/upload/v1754373279/risk_return_hdmhvh.png"
                  style={{ maxHeight: 350, objectFit: 'contain', width: '100%' }}
                />
              </div>
            }
          >
            <Row gutter={[24, 16]}>
              <Col md={12} xs={24}>
                <Paragraph>
                  <Text strong>Risk-Return Profile:</Text> This comprehensive analysis demonstrates our strategy's 
                  superior risk-adjusted performance compared to traditional approaches. The efficient frontier 
                  positioning shows optimal balance between risk and return.
                </Paragraph>
              </Col>
              <Col md={12} xs={24}>
                <Timeline size="small">
                  <Timeline.Item color="green">
                    <Text strong>Superior Sharpe Ratio:</Text> Consistent outperformance in risk-adjusted returns
                  </Timeline.Item>
                  <Timeline.Item color="blue">
                    <Text strong>Controlled Volatility:</Text> Effective risk management through diversification
                  </Timeline.Item>
                  <Timeline.Item color="purple">
                    <Text strong>Efficient Frontier:</Text> Optimal positioning for maximum return per unit of risk
                  </Timeline.Item>
                </Timeline>
              </Col>
            </Row>
            <div style={{ marginTop: 20, textAlign: 'center' }}>
              <Tag color="gold">Efficient Frontier</Tag>
              <Tag color="blue">Risk-Adjusted Returns</Tag>
              <Tag color="green">Portfolio Optimization</Tag>
              <Tag color="purple">Volatility Control</Tag>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StrategyVisualization;
