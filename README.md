
# ChanTech-Quant-Investment-Dashboard

A professional quantitative investment management platform that provides real-time portfolio monitoring, market sentiment analysis, and AI-driven strategy Q&A functions.

## 🚀 Features

### 📊 Investment Dashboard
- **Real-time Performance Monitoring**: Displays cumulative return, excess return, and Sharpe ratio.
- **Asset Allocation Management**: Visualizes the current investment portfolio allocation.
- **Smart Rebalancing**: Automatic and manual rebalancing functions.
- **Performance Comparison**: Detailed comparison and analysis with benchmark indices.

### 📈 Market Sentiment Analysis
- **Sentiment Index**: Real-time market sentiment score and visualization.
- **News Monitoring**: Keyword extraction and sentiment analysis based on Gemini.
- **Market Conditions**: Comprehensive analysis chart of market conditions.

### 🔍 In-depth Strategy Analysis
- **Strategy Architecture**: Detailed explanation of investment strategies and technical architecture.
- **Execution Flow**: Complete timeline of strategy execution.
- **Risk Management**: Introduction to a multi-level risk control system.
- **Performance Attribution**: Detailed analysis of the sources of returns.

### 🤖 AI Q&A Assistant
- **Intelligent Q&A**: AI assistant based on strategies to answer investment-related questions.
- **Real-time Interaction**: Smooth conversational experience.
- **Preset Questions**: Quick access to frequently asked questions.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **UI Component Library**: Ant Design 5
- **Charting Library**: Recharts
- **Routing**: React Router DOM
- **Styling**: Styled Components + CSS
- **Build Tool**: Webpack 5
- **Package Management**: npm

## 📦 Installation and Running

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.0.0

### Install Dependencies
```bash
npm install
```

### Development Mode
```bash
npm run dev
```
The application will start at http://localhost:3000

### Production Build
```bash
npm run build
```

## 📁 Project Structure

```
chantech-quant-dashboard/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── AIChat.js      # AI Q&A component
│   │   ├── SentimentPanel.js  # Sentiment analysis panel
│   │   └── PortfolioPanel.js  # Investment portfolio panel
│   ├── pages/             # Page components
│   │   ├── Dashboard.js   # Main dashboard page
│   │   └── StrategyDeepDive.js  # In-depth strategy analysis page
│   ├── styles/            # Style files
│   │   └── global.css     # Global styles
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── package.json           # Project configuration
├── webpack.config.js      # Webpack configuration
└── README.md             # Project description
```

## 🎨 Design Highlights

### Modern UI
- Gradient background and glassmorphism design.
- Responsive layout, supporting access from multiple devices.
- Professional financial data visualization.

### User Experience
- Intuitive navigation and information hierarchy.
- Real-time data updates.
- Smooth interactive animations.

### Data Visualization
- Integration of actual chart images for display.
- Multi-dimensional data presentation.
- Clear indicator card design.

## 📊 Core Module Description

### Investment Dashboard
Centralized display of key portfolio indicators, including:
- Cumulative return trend
- Risk-return analysis
- Performance summary report
- Real-time asset allocation

### Sentiment Analysis
Analysis of market sentiment through multi-source data:
- Comprehensive sentiment index calculation
- Keyword extraction from news sentiment
- Real-time monitoring of market conditions

### Strategy Analysis
In-depth analysis of quantitative investment strategies:
- Investment philosophy and principles
- Detailed technical architecture
- Risk management system
- Performance attribution analysis

### AI Assistant
Provides intelligent investment consulting:
- Answers to strategy-related questions
- Real-time interactive experience
- Personalized suggestion support

## 🔧 Custom Configuration

### Modifying Image Resources
The project uses image resources hosted on Cloudinary. To replace them:
1. Update the links in `Image URLs.txt`.
2. Update the image paths in the corresponding components.

### Adding New Features
1. Create a new component in `src/components/`.
2. Import and use it in the corresponding page.
3. Update the routing configuration (if necessary).

### Style Customization
- Modify `src/styles/global.css` to adjust global styles.
- Use inline styles in components for local adjustments.

## 📈 Future Plans

- [ ] Integrate real data APIs
- [ ] Add more chart types
- [ ] Optimize mobile experience
- [ ] Add user permission management
- [ ] Integrate real-time trading functions

## 🤝 Contribution Guidelines

Feel free to submit Issues and Pull Requests to improve the project!

## 📄 License

MIT License

---

© 2024 ChanTech. Provider of professional quantitative investment solutions.
