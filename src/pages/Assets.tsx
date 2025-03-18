import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AssetCard } from "@/components/dashboard/asset-card";
import { PriceChart } from "@/components/dashboard/price-chart";
import { mockPortfolioAssets, mockAssets, calculatePortfolioValue } from "@/lib/data/mock-data";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils/format-currency";
import { ArrowUpRight, TrendingUp, TrendingDown, Plus, ArrowRight, PieChart, RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Assets = () => {
  const { t } = useLanguage();
  const [selectedAsset, setSelectedAsset] = useState(mockAssets[0]);
  const portfolioValue = calculatePortfolioValue(mockPortfolioAssets);

  // Calculate allocation percentages
  const portfolioAllocations = mockPortfolioAssets.map(asset => {
    const value = asset.quantity * asset.currentPrice;
    return {
      ...asset,
      value,
      percentage: (value / portfolioValue) * 100
    };
  }).sort((a, b) => b.value - a.value);

  return (
    <div className="container px-4 py-6 md:py-8 max-w-7xl animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">
          {t("assets")}
        </h1>
        <p className="text-muted-foreground">
          {t("yourAssets")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Portfolio Summary */}
          <Card className="premium-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">Portfolio Summary</CardTitle>
              <Button size="sm" variant="outline" className="gap-1">
                <RefreshCw className="h-3 w-3" />
                Refresh
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-3xl font-bold font-mono">{formatCurrency(portfolioValue)}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Buy
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ArrowRight className="h-4 w-4" />
                    Transfer
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium flex items-center gap-1 mb-2">
                  <PieChart className="h-4 w-4 text-primary" /> 
                  Asset Allocation
                </h3>
                
                {portfolioAllocations.map((asset) => (
                  <div key={asset.assetId} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{asset.name} ({asset.symbol})</span>
                      <span>{asset.percentage.toFixed(1)}%</span>
                    </div>
                    <Progress value={asset.percentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{asset.quantity.toFixed(asset.quantity < 1 ? 4 : 2)} {asset.symbol}</span>
                      <span>{formatCurrency(asset.value)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Asset Performance */}
          <Card className="premium-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-xl">Asset Performance</CardTitle>
                <CardDescription>Select an asset to view details</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <PriceChart asset={selectedAsset} />
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          {/* Assets List */}
          <Card className="premium-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Your Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockPortfolioAssets.map((asset) => {
                  const fullAsset = mockAssets.find(a => a.id === asset.assetId);
                  const profitLoss = asset.currentPrice - asset.averagePrice;
                  const profitLossPercentage = (profitLoss / asset.averagePrice) * 100;
                  
                  return (
                    <div 
                      key={asset.assetId} 
                      className="p-3 border rounded-lg hover:bg-accent/10 transition-colors cursor-pointer"
                      onClick={() => {
                        const assetData = mockAssets.find(a => a.id === asset.assetId);
                        if (assetData) setSelectedAsset(assetData);
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{asset.symbol}</div>
                          <div className="text-xs text-muted-foreground">{asset.name}</div>
                        </div>
                        <div className={profitLossPercentage >= 0 ? "text-success" : "text-destructive"}>
                          <div className="flex items-center justify-end">
                            {profitLossPercentage >= 0 ? (
                              <TrendingUp className="h-3 w-3 mr-1" />
                            ) : (
                              <TrendingDown className="h-3 w-3 mr-1" />
                            )}
                            <span>{profitLossPercentage >= 0 ? "+" : ""}{profitLossPercentage.toFixed(2)}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-1 flex justify-between">
                        <span className="text-sm">{asset.quantity.toFixed(asset.quantity < 1 ? 4 : 2)} units</span>
                        <span className="font-mono text-sm">{formatCurrency(asset.quantity * asset.currentPrice)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button variant="outline" className="w-full mt-4 gap-1">
                <Plus className="h-4 w-4" />
                Add New Asset
              </Button>
            </CardContent>
          </Card>
          
          {/* Watchlist */}
          <Card className="premium-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Watchlist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {mockAssets.slice(2, 4).map(asset => (
                  <AssetCard 
                    key={asset.id} 
                    asset={asset} 
                    onClick={() => setSelectedAsset(asset)}
                  />
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 gap-1">
                <Plus className="h-4 w-4" />
                Add to Watchlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Assets;
