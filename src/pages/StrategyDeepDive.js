import React from 'react';
import { Card, Row, Col, Typography, Tag, Timeline, Collapse, Divider, List } from 'antd';
import {
  BulbOutlined, AimOutlined, RocketOutlined, SafetyOutlined, ExperimentOutlined, ApartmentOutlined, HeartOutlined
} from '@ant-design/icons';
import AIChat from '../components/AIChat';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const StrategyDeepDive = () => {
  return (
    <div className="strategy-content" style={{ maxWidth: 1200, margin: 'auto', padding: '24px 0' }}>

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2} style={{ color: '#1a1a2e', marginBottom: 16, fontSize: '28px' }}>
          <RocketOutlined style={{ marginRight: 12, color: '#722ed1' }} />
          Strategy Deep Dive: Advanced ML Trading System with Sentiment Analysis
        </Title>
      </div>

      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Card title={<><HeartOutlined style={{ marginRight: 8 }} />Strategy Philosophy</>}>
            <Row gutter={[24, 24]}>
              <Col md={12} xs={24}>
                <Title level={4}>Innovative Breakthrough: Signal Validity Prediction</Title>
                <Paragraph>
                  Our strategy fundamentally differs from traditional quantitative systems. <Text strong>We do not predict when a technical signal will appear, but rather whether an existing signal is valid.</Text>
                </Paragraph>
                <List size="small">
                  <List.Item>Avoids predicting the unpredictable nature of signal occurrences.</List.Item>
                  <List.Item>Focuses on quality assessment after a signal has appeared.</List.Item>
                  <List.Item>Significantly reduces false positives through ML screening.</List.Item>
                </List>
              </Col>
              <Col md={12} xs={24}>
                <Title level={4}>Fusion of Macro and Micro Analysis</Title>
                <Paragraph>
                  We achieve a seamless integration of macro market sentiment with micro technical signals.
                </Paragraph>
                 <List size="small">
                  <List.Item><Text strong>Macro:</Text> Capturing overall market sentiment via news analysis.</List.Item>
                  <List.Item><Text strong>Micro:</Text> Identifying specific trading opportunities with Chan Theory.</List.Item>
                  <List.Item><Text strong>Fusion:</Text> Sentiment data is fed as a feature into the ML model to influence signal evaluation.</List.Item>
                </List>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={24}>
          <Card title={<><ApartmentOutlined style={{ marginRight: 8 }} />Technical Architecture</>}>
            <Collapse defaultActiveKey={['1']}>
              <Panel header="Data Processing Pipeline" key="1">
                <Title level={5}>Feature Engineering</Title>
                <Paragraph>Our models are powered by over 50 engineered features. We calculate a rich set of technical indicators such as moving averages and volatility over various periods, which are then combined with our proprietary daily sentiment score to form a comprehensive market view.</Paragraph>
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  <Tag color="blue">Price Features</Tag>
                  <Tag color="cyan">Moving Averages</Tag>
                  <Tag color="geekblue">Volatility</Tag>
                  <Tag color="gold">Momentum</Tag>
                  <Tag color="purple">RSI, MACD, Bollinger Bands</Tag>
                  <Tag color="magenta">Volume Features</Tag>
                  <Tag color="orange">Daily Sentiment Score</Tag>
                </div>
              </Panel>
              <Panel header="Machine Learning Model Architecture" key="2">
                <Title level={5}>Dual-Model Design</Title>
                <Paragraph>We use a dual-model architecture to predict the validity of buy and sell signals separately.</Paragraph>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card size="small" title="Buy Model">
                            <p><strong>Goal:</strong> Predict probability of 5% gain within 5 days.</p>
                            <p><strong>Threshold:</strong> Execute buy if probability > 80%.</p>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card size="small" title="Sell Model">
                            <p><strong>Goal:</strong> Predict probability of 5% loss within 5 days.</p>
                            <p><strong>Threshold:</strong> Trigger sell if probability > 70%.</p>
                        </Card>
                    </Col>
                </Row>
                <Title level={5} style={{marginTop: '16px'}}>Model Training</Title>
                <Paragraph>Our models are trained using LightGBM, a high-performance gradient boosting framework. To ensure robustness and prevent overfitting, we employ time-series cross-validation and carefully tune parameters like feature sampling and handling of class imbalance.</Paragraph>
              </Panel>
              <Panel header="Sentiment Analysis Deep Integration" key="3">
                <Title level={5}>Sentiment-Driven Decision Making</Title>
                <Paragraph>Sentiment scores are not just another feature; they dynamically adjust the model's decision thresholds. The final probability of a signal is modified based on the current sentiment, following the principle: <Text strong>Adjusted Probability = Base Probability × (1 + α × Sentiment Score)</Text>. In extremely pessimistic markets, the model becomes more conservative, while in optimistic markets, it becomes more aggressive.</Paragraph>
              </Panel>
            </Collapse>
          </Card>
        </Col>

        <Col span={24}>
          <Card title={<><SafetyOutlined style={{ marginRight: 8 }} />Risk Management System</>}>
            <Timeline>
              <Timeline.Item color="blue">
                <Title level={5}>Signal-Level Control</Title>
                <Paragraph>High probability thresholds (80% for buy, 70% for sell) and confirmation from multiple technical indicators.</Paragraph>
              </Timeline.Item>
              <Timeline.Item color="green">
                <Title level={5}>Portfolio-Level Control</Title>
                <Paragraph>Diversification across a maximum of 10 assets with equal weighting and weekly rebalancing.</Paragraph>
              </Timeline.Item>
              <Timeline.Item color="red">
                <Title level={5}>Market-Level Control</Title>
                <Paragraph>We implement a dynamic drawdown control mechanism. If the portfolio's drawdown exceeds a predefined maximum (e.g., 15%), the system will automatically reduce positions to mitigate further losses.</Paragraph>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>



      </Row>

      <Divider />
      
      <AIChat />
    </div>
  );
};

export default StrategyDeepDive;
