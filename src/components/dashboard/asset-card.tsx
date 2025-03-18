import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { formatCurrency } from "@/lib/utils/format-currency";

type AssetCardProps = {
  asset: {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
  };
  onClick?: () => void;
};

export function AssetCard({ asset, onClick }: AssetCardProps) {
  const isPositive = asset.change24h >= 0;
  
  return (
    <Card 
      className="hover:border-primary/30 transition-colors cursor-pointer hover-lift relative overflow-hidden"
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${isPositive ? 'from-emerald-500/5 to-emerald-500/10' : 'from-rose-500/5 to-rose-500/10'} opacity-30`}></div>
      
      <CardContent className="p-4 relative">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold flex items-center">
              {asset.symbol}
              <ExternalLink className="h-3 w-3 ml-1 text-muted-foreground" />
            </div>
            <div className="text-xs text-muted-foreground">{asset.name}</div>
          </div>
          <div className={`flex items-center ${
            isPositive ? "text-success" : "text-destructive"
          }`}>
            {isPositive ? (
              <TrendingUp className="h-3 w-3 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-1" />
            )}
            <span>{isPositive ? "+" : ""}{asset.change24h}%</span>
          </div>
        </div>
        
        <div className="mt-2 font-mono font-medium">
          {formatCurrency(asset.price)}
        </div>
      </CardContent>
    </Card>
  );
}
