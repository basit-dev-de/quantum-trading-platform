import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PriceChart } from "@/components/dashboard/price-chart";
import { mockAssets, mockTransactions } from "@/lib/data/mock-data";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, TrendingUp, TrendingDown, Sliders, BookOpen, History, BarChart3 } from "lucide-react";
import { formatCurrency } from "@/lib/utils/format-currency";
import { AssetCard } from "@/components/dashboard/asset-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Trading = () => {
  const { t } = useLanguage();
  const [selectedAsset, setSelectedAsset] = useState(mockAssets[0]);

  // Format date for transactions
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="container px-4 py-6 md:py-8 max-w-7xl animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">
          {t("trading")}
        </h1>
        <p className="text-muted-foreground">
          {t("liveData")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Market Section - 1/4 width */}
        <div className="space-y-6">
          <Card className="premium-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Markets</CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <div className="space-y-2">
                {mockAssets.map(asset => (
                  <div 
                    key={asset.id}
                    className={`p-2 rounded-md cursor-pointer transition-colors hover:bg-muted ${
                      selectedAsset.id === asset.id ? 'bg-muted' : ''
                    }`}
                    onClick={() => setSelectedAsset(asset)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{asset.symbol}</div>
                        <div className="text-xs text-muted-foreground">{asset.name}</div>
                      </div>
                      <div className={`text-sm ${
                        asset.change24h >= 0 ? "text-success" : "text-destructive"
                      }`}>
                        {asset.change24h >= 0 ? (
                          <TrendingUp className="h-3 w-3 inline mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 inline mr-1" />
                        )}
                        <span>{asset.change24h >= 0 ? "+" : ""}{asset.change24h}%</span>
                      </div>
                    </div>
                    <div className="font-mono text-sm">{formatCurrency(asset.price)}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="premium-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <div className="space-y-3">
                {mockTransactions.slice(0, 3).map(tx => (
                  <div key={tx.id} className="text-sm border-b pb-2 last:border-0 last:pb-0">
                    <div className="flex justify-between">
                      <span className={tx.type === 'buy' ? 'text-success' : 'text-destructive'}>
                        {tx.type === 'buy' ? 'Bought' : 'Sold'}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {formatDate(tx.timestamp)}
                      </span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>
                        {tx.amount.toFixed(tx.amount < 1 ? 4 : 2)} {tx.assetSymbol}
                      </span>
                      <span className="font-mono">
                        {formatCurrency(tx.amount * tx.price)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-3 text-xs gap-1">
                <History className="h-3 w-3" />
                View All Transactions
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Trading Interface - 3/4 width */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="premium-card">
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <CardTitle className="text-xl">{selectedAsset.name} ({selectedAsset.symbol})</CardTitle>
                  <CardDescription>
                    Market Cap: {formatCurrency(selectedAsset.marketCap)}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="gap-1">
                    <Sliders className="h-3 w-3" />
                    Settings
                  </Button>
                  <Button size="sm" variant="outline" className="gap-1">
                    <BookOpen className="h-3 w-3" />
                    Details
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <PriceChart asset={selectedAsset} />
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card className="premium-card">
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground">24h Volume</div>
                <div className="font-mono text-xl mt-1">{formatCurrency(selectedAsset.volume24h)}</div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground">24h High</div>
                <div className="font-mono text-xl mt-1 text-success">{formatCurrency(selectedAsset.high24h)}</div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground">24h Low</div>
                <div className="font-mono text-xl mt-1 text-destructive">{formatCurrency(selectedAsset.low24h)}</div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="premium-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Trading Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buy">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="buy">Buy {selectedAsset.symbol}</TabsTrigger>
                  <TabsTrigger value="sell">Sell {selectedAsset.symbol}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="buy">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Amount</label>
                        <div className="flex items-center border rounded-md overflow-hidden">
                          <input 
                            type="number" 
                            className="flex-1 p-2 bg-transparent focus:outline-none" 
                            placeholder="0.00"
                            defaultValue="1"
                          />
                          <div className="bg-muted px-2 py-2 text-sm font-medium">
                            {selectedAsset.symbol}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Price</label>
                        <div className="flex items-center border rounded-md overflow-hidden">
                          <input 
                            type="number" 
                            className="flex-1 p-2 bg-transparent focus:outline-none" 
                            value={selectedAsset.price}
                            readOnly
                          />
                          <div className="bg-muted px-2 py-2 text-sm font-medium">
                            USD
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-md bg-muted/50">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Total:</span>
                          <span className="font-mono">{formatCurrency(selectedAsset.price)}</span>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Fee (0.1%):</span>
                          <span className="font-mono">{formatCurrency(selectedAsset.price * 0.001)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md h-full flex flex-col justify-between">
                        <div>
                          <h4 className="font-medium mb-2">Order Summary</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            You are about to place a market order to buy 1 {selectedAsset.symbol} at the current market price.
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Button className="w-full">Buy {selectedAsset.symbol}</Button>
                          <Button variant="outline" className="w-full">Set Limit Order</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="sell">
                  <div className="p-8 text-center">
                    <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium mb-2">No {selectedAsset.symbol} Available</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      You don't have any {selectedAsset.symbol} in your portfolio to sell.
                    </p>
                    <Button className="gap-1">
                      <ArrowUpDown className="h-4 w-4" />
                      Buy {selectedAsset.symbol} First
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trading;
