// Mock Assets Data
export const mockAssets = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 45678.92,
    change24h: 3.5,
    change7d: 5.8,
    volume24h: 28564000000,
    marketCap: 858754000000,
    high24h: 46129.35,
    low24h: 44102.59,
    allTimeHigh: 69000,
    allTimeHighDate: "2021-11-10",
    circSupply: 19150000,
    maxSupply: 21000000,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (24 - i) * 3600000).toISOString(),
      price: 44000 + Math.random() * 2000,
    })),
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 2456.78,
    change24h: 2.7,
    change7d: -1.2,
    volume24h: 16453000000,
    marketCap: 295678000000,
    high24h: 2489.35,
    low24h: 2401.59,
    allTimeHigh: 4878,
    allTimeHighDate: "2021-11-10",
    circSupply: 120250000,
    maxSupply: null,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (24 - i) * 3600000).toISOString(),
      price: 2400 + Math.random() * 100,
    })),
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 1.23,
    change24h: -1.8,
    change7d: -3.7,
    volume24h: 1890000000,
    marketCap: 39567000000,
    high24h: 1.29,
    low24h: 1.18,
    allTimeHigh: 3.10,
    allTimeHighDate: "2021-09-02",
    circSupply: 32175000000,
    maxSupply: 45000000000,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (24 - i) * 3600000).toISOString(),
      price: 1.18 + Math.random() * 0.11,
    })),
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 134.56,
    change24h: 5.2,
    change7d: 12.5,
    volume24h: 3456000000,
    marketCap: 54321000000,
    high24h: 138.90,
    low24h: 130.10,
    allTimeHigh: 260.06,
    allTimeHighDate: "2021-11-06",
    circSupply: 404000000,
    maxSupply: null,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (24 - i) * 3600000).toISOString(),
      price: 130 + Math.random() * 8.9,
    })),
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    price: 321.45,
    change24h: 0.8,
    change7d: -2.1,
    volume24h: 1200000000,
    marketCap: 49678000000,
    high24h: 325.42,
    low24h: 319.21,
    allTimeHigh: 690.93,
    allTimeHighDate: "2021-05-10",
    circSupply: 154500000,
    maxSupply: 200000000,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (24 - i) * 3600000).toISOString(),
      price: 319 + Math.random() * 6.5,
    })),
  },
  {
    id: "xrp",
    name: "XRP",
    symbol: "XRP",
    price: 0.532,
    change24h: -0.6,
    change7d: 2.4,
    volume24h: 1870000000,
    marketCap: 27540000000,
    high24h: 0.548,
    low24h: 0.528,
    allTimeHigh: 3.40,
    allTimeHighDate: "2018-01-07",
    circSupply: 51800000000,
    maxSupply: 100000000000,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (24 - i) * 3600000).toISOString(),
      price: 0.52 + Math.random() * 0.03,
    })),
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    price: 15.42,
    change24h: 1.2,
    change7d: -4.1,
    volume24h: 720000000,
    marketCap: 17650000000,
    high24h: 15.78,
    low24h: 15.21,
    allTimeHigh: 55.00,
    allTimeHighDate: "2021-11-04",
    circSupply: 1145000000,
    maxSupply: null,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (24 - i) * 3600000).toISOString(),
      price: 15.2 + Math.random() * 0.6,
    })),
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.0842,
    change24h: 2.3,
    change7d: 8.7,
    volume24h: 680000000,
    marketCap: 11240000000,
    high24h: 0.0863,
    low24h: 0.0821,
    allTimeHigh: 0.731,
    allTimeHighDate: "2021-05-08",
    circSupply: 133500000000,
    maxSupply: null,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (24 - i) * 3600000).toISOString(),
      price: 0.082 + Math.random() * 0.004,
    })),
  },
];

// Mock Portfolio Assets
export const mockPortfolioAssets = [
  {
    assetId: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    quantity: 0.85,
    currentPrice: 45678.92,
    averagePrice: 42000.00,
  },
  {
    assetId: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    quantity: 4.2,
    currentPrice: 2456.78,
    averagePrice: 2100.50,
  },
  {
    assetId: "cardano",
    name: "Cardano",
    symbol: "ADA",
    quantity: 1500,
    currentPrice: 1.23,
    averagePrice: 1.41,
  },
  {
    assetId: "solana",
    name: "Solana",
    symbol: "SOL",
    quantity: 12.5,
    currentPrice: 134.56,
    averagePrice: 120.75,
  },
];

// Extend portfolio performance data for better visualization
export const mockPortfolioPerformance = Array.from({ length: 30 }, (_, i) => {
  // Generate more realistic data with some trends
  const baseValue = 50000;
  const dayTrend = i * 300; // General uptrend
  const volatility = Math.random() * 2000 - 1000; // Daily volatility
  
  // Add a market correction in the middle
  const correction = i > 12 && i < 17 ? -2000 * (16 - i) : 0;
  
  return {
    date: new Date(Date.now() - (30 - i) * 86400000),
    value: baseValue + dayTrend + volatility + correction,
  };
});

// Add more transactions
export const mockTransactions = [
  {
    id: "tx1",
    type: "buy",
    assetId: "bitcoin",
    assetSymbol: "BTC",
    amount: 0.15,
    price: 44930.25,
    timestamp: new Date(Date.now() - 2 * 86400000),
  },
  {
    id: "tx2",
    type: "sell",
    assetId: "ethereum",
    assetSymbol: "ETH",
    amount: 1.2,
    price: 2435.67,
    timestamp: new Date(Date.now() - 4 * 86400000),
  },
  {
    id: "tx3",
    type: "buy",
    assetId: "solana",
    assetSymbol: "SOL",
    amount: 5.5,
    price: 129.43,
    timestamp: new Date(Date.now() - 7 * 86400000),
  },
  {
    id: "tx4",
    type: "buy",
    assetId: "cardano",
    assetSymbol: "ADA",
    amount: 500,
    price: 1.27,
    timestamp: new Date(Date.now() - 10 * 86400000),
  },
  {
    id: "tx5",
    type: "sell",
    assetId: "bitcoin",
    assetSymbol: "BTC",
    amount: 0.05,
    price: 43567.89,
    timestamp: new Date(Date.now() - 14 * 86400000),
  },
  {
    id: "tx6",
    type: "buy",
    assetId: "binancecoin",
    assetSymbol: "BNB",
    amount: 2.5,
    price: 318.42,
    timestamp: new Date(Date.now() - 16 * 86400000),
  },
  {
    id: "tx7",
    type: "buy",
    assetId: "polkadot",
    assetSymbol: "DOT",
    amount: 30,
    price: 15.87,
    timestamp: new Date(Date.now() - 18 * 86400000),
  },
  {
    id: "tx8",
    type: "sell",
    assetId: "dogecoin",
    assetSymbol: "DOGE",
    amount: 2000,
    price: 0.079,
    timestamp: new Date(Date.now() - 22 * 86400000),
  },
  {
    id: "tx9",
    type: "buy",
    assetId: "xrp",
    assetSymbol: "XRP",
    amount: 500,
    price: 0.51,
    timestamp: new Date(Date.now() - 25 * 86400000),
  },
  {
    id: "tx10",
    type: "sell",
    assetId: "ethereum",
    assetSymbol: "ETH",
    amount: 0.75,
    price: 2389.45,
    timestamp: new Date(Date.now() - 28 * 86400000),
  },
];

// Add market sentiment data
export const marketSentimentData = {
  overall: "Bullish",
  fearGreedIndex: 72, // 0-100 scale, over 50 is greedy/bullish
  topGainers: mockAssets.slice().sort((a, b) => b.change24h - a.change24h).slice(0, 3),
  topLosers: mockAssets.slice().sort((a, b) => a.change24h - b.change24h).slice(0, 3),
  trendingKeywords: ["Bitcoin ETF", "Layer 2", "DeFi Summer", "AI Tokens", "Regulation"],
  recentNews: [
    {
      id: "news1",
      title: "Central Bank Considers Digital Currency Framework",
      source: "CryptoNews",
      timestamp: new Date(Date.now() - 1 * 86400000),
      sentiment: "neutral"
    },
    {
      id: "news2",
      title: "Major Retailer Begins Accepting Cryptocurrency Payments",
      source: "BlockchainTimes",
      timestamp: new Date(Date.now() - 2 * 86400000),
      sentiment: "positive"
    },
    {
      id: "news3",
      title: "Regulatory Concerns Grow as Market Reaches New Heights",
      source: "TokenInsider",
      timestamp: new Date(Date.now() - 3 * 86400000),
      sentiment: "negative"
    }
  ]
};

// Utility functions
export const calculatePortfolioValue = (portfolio: typeof mockPortfolioAssets) => {
  return portfolio.reduce((total, asset) => {
    return total + (asset.quantity * asset.currentPrice);
  }, 0);
};

export const calculatePortfolioProfitPercentage = (portfolio: typeof mockPortfolioAssets) => {
  let currentValue = 0;
  let costBasis = 0;
  
  portfolio.forEach(asset => {
    currentValue += asset.quantity * asset.currentPrice;
    costBasis += asset.quantity * asset.averagePrice;
  });
  
  if (costBasis === 0) return 0;
  return ((currentValue - costBasis) / costBasis) * 100;
};
