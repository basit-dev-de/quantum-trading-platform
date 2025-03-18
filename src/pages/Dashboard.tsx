
import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PriceChart } from "@/components/dashboard/price-chart";
import { MarketOverview } from "@/components/dashboard/market-overview";
import { PortfolioChart } from "@/components/dashboard/portfolio-chart";
import { VolumeChart } from "@/components/dashboard/volume-chart";
import { MarketDominance } from "@/components/dashboard/market-dominance";
import { CorrelationHeatmap } from "@/components/dashboard/correlation-heatmap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockAssets, mockPortfolioAssets, calculatePortfolioValue, calculatePortfolioProfitPercentage, marketSentimentData } from "@/lib/data/mock-data";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Wallet, DollarSign, TrendingUp, TrendingDown, Activity, BarChart, LineChart, PieChart } from "lucide-react";
import { formatCurrency } from "@/lib/utils/format-currency";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const { t } = useLanguage();
  const [selectedAsset, setSelectedAsset] = useState(mockAssets[0]);
  const portfolioValue = calculatePortfolioValue(mockPortfolioAssets);
  const profitPercentage = calculatePortfolioProfitPercentage(mockPortfolioAssets);

  return (
    <div className="container px-4 py-6 md:py-8 max-w-7xl animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">
          {t("dashboard")}
        </h1>
        <p className="text-muted-foreground">
          {t("welcomeMessage")}
        </p>
      </div>
      
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="premium-card col-span-2 hover-lift">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              Portfolio Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                <p className="text-3xl font-bold font-mono">{formatCurrency(portfolioValue)}</p>
                <div className={`flex items-center text-sm mt-1 ${profitPercentage >= 0 ? "text-success" : "text-destructive"}`}>
                  {profitPercentage >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                  <span>{profitPercentage >= 0 ? "+" : ""}{profitPercentage.toFixed(2)}% overall</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Deposit</Button>
                <Button size="sm" variant="outline">Withdraw</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {mockPortfolioAssets.slice(0, 4).map((asset) => (
                <div key={asset.assetId} className="p-2 border rounded-md bg-background/50">
                  <div className="font-medium">{asset.symbol}</div>
                  <div className="text-xs text-muted-foreground">{asset.quantity.toFixed(asset.quantity < 1 ? 4 : 2)} units</div>
                  <div className="font-mono text-sm mt-1">{formatCurrency(asset.quantity * asset.currentPrice)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="premium-card hover-lift">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Market Sentiment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Overall Trend</p>
                <div className="flex items-center text-xl font-semibold">
                  {marketSentimentData.fearGreedIndex > 50 ? (
                    <TrendingUp className="h-5 w-5 mr-2 text-success" />
                  ) : (
                    <TrendingDown className="h-5 w-5 mr-2 text-destructive" />
                  )}
                  {marketSentimentData.overall}
                </div>
                <div className="mt-2 w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      marketSentimentData.fearGreedIndex > 75 ? "bg-success" : 
                      marketSentimentData.fearGreedIndex > 50 ? "bg-success/70" : 
                      marketSentimentData.fearGreedIndex > 25 ? "bg-amber-500" : 
                      "bg-destructive"
                    }`}
                    style={{ width: `${marketSentimentData.fearGreedIndex}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Fear</span>
                  <span>Greed</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Trending Topics</p>
                <div className="flex flex-wrap gap-1">
                  {marketSentimentData.trendingKeywords.map((keyword, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  <BarChart className="h-4 w-4 mr-1" />
                  Detailed Analysis
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Portfolio Performance Chart */}
      <div className="mb-6">
        <PortfolioChart />
      </div>
      
      {/* Market Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <DollarSign className="h-5 w-5 mr-1 text-primary" />
          Market Overview
        </h2>
        <MarketOverview />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <VolumeChart />
        <MarketDominance />
      </div>
      
      {/* Correlation Heatmap */}
      <div className="mb-6">
        <CorrelationHeatmap />
      </div>
      
      {/* Featured Asset Chart */}
      <div className="mb-6">
        <Tabs defaultValue="bitcoin" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <LineChart className="h-5 w-5 mr-1 text-primary" />
              Featured Assets
            </h2>
            <TabsList className="bg-muted/50">
              {mockAssets.slice(0, 4).map(asset => (
                <TabsTrigger 
                  key={asset.id} 
                  value={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                >
                  {asset.symbol}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {mockAssets.slice(0, 4).map(asset => (
            <TabsContent key={asset.id} value={asset.id}>
              <PriceChart asset={asset} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* Recent News */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <PieChart className="h-5 w-5 mr-1 text-primary" />
          Market News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {marketSentimentData.recentNews.map(news => (
            <Card key={news.id} className="premium-card hover-lift">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={
                    news.sentiment === "positive" ? "default" : 
                    news.sentiment === "negative" ? "destructive" : "outline"
                  }>
                    {news.sentiment}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {news.timestamp.toLocaleDateString()}
                  </span>
                </div>
                <h3 className="font-medium mb-1">{news.title}</h3>
                <div className="text-xs text-muted-foreground flex justify-between items-center">
                  <span>{news.source}</span>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    Read More <ArrowUpRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
