import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { formatCurrency } from "@/lib/utils/format-currency";
import { mockAssets } from "@/lib/data/mock-data";

export function MarketOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {mockAssets.map((asset) => {
        const isPositive = asset.change24h >= 0;
        
        return (
          <Card key={asset.id} className="hover:border-primary/30 transition-colors hover-lift relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${isPositive ? 'from-emerald-500/5 to-emerald-500/10' : 'from-rose-500/5 to-rose-500/10'} opacity-30`}></div>
            
            <CardContent className="p-4 relative">
              <div className="flex justify-between">
                <div className="font-medium flex items-center">
                  {asset.symbol}
                  <ExternalLink className="h-3 w-3 ml-1 text-muted-foreground/70" />
                </div>
                <div className={`flex items-center ${
                  isPositive ? "text-success" : "text-destructive"
                }`}>
                  {isPositive ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  <span className="font-medium">{isPositive ? "+" : ""}{asset.change24h}%</span>
                </div>
              </div>
              <div className="font-mono text-sm mt-2 flex items-baseline">
                {formatCurrency(asset.price)}
                <span className="text-xs text-muted-foreground ml-1">
                  / {asset.volume24h >= 1000000000 
                    ? `Vol: $${(asset.volume24h / 1000000000).toFixed(1)}B` 
                    : `Vol: $${(asset.volume24h / 1000000).toFixed(1)}M`}
                </span>
              </div>
              
              {/* Sparkline visualization */}
              <div className="h-1 w-full bg-muted/50 mt-3 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${isPositive ? 'bg-success' : 'bg-destructive'}`}
                  style={{ width: `${50 + Math.abs(asset.change24h) * 5}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
