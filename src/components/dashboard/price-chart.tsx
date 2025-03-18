
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts";
import { formatCurrency } from "@/lib/utils/format-currency";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";

type PriceChartProps = {
  asset: {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    change7d: number;
    high24h: number;
    low24h: number;
    allTimeHigh: number;
    allTimeHighDate: string;
    circSupply: number;
    maxSupply: number | null;
    chartData: Array<{
      time: string;
      price: number;
    }>;
  };
};

export function PriceChart({ asset }: PriceChartProps) {
  const isPositive = asset.change24h >= 0;
  const isPositive7d = asset.change7d >= 0;
  
  // Calculate important price levels
  const maxPrice = Math.max(...asset.chartData.map(d => d.price)) * 1.01;
  const minPrice = Math.min(...asset.chartData.map(d => d.price)) * 0.99;
  
  // Format date for tooltip
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Format date for ATH
  const formatATHDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  // Calculate percent from ATH
  const percentFromATH = ((asset.price - asset.allTimeHigh) / asset.allTimeHigh) * 100;
  
  // Format large numbers
  const formatLargeNumber = (num: number) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(2)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(2)}K`;
    return num.toString();
  };
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 text-sm border bg-background/80 shadow-md rounded-md">
          <p className="text-muted-foreground">{formatDate(label)}</p>
          <p className="font-medium text-lg">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <Card className="premium-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="flex items-center gap-2">
            {asset.name} ({asset.symbol})
            <Badge variant={isPositive ? "default" : "destructive"} className="ml-2">
              {isPositive ? "+" : ""}{asset.change24h}%
            </Badge>
          </CardTitle>
          <div className="text-sm text-muted-foreground mt-1">
            7d: <span className={isPositive7d ? "text-success" : "text-destructive"}>
              {isPositive7d ? "+" : ""}{asset.change7d}%
            </span>
            {" | "}
            From ATH: <span className="text-destructive">{percentFromATH.toFixed(2)}%</span>
          </div>
        </div>
        <div className="font-mono text-lg font-bold">
          {formatCurrency(asset.price)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={asset.chartData}>
              <defs>
                <linearGradient id={`gradient-${asset.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isPositive ? "rgb(21, 128, 61)" : "rgb(220, 38, 38)"} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={isPositive ? "rgb(21, 128, 61)" : "rgb(220, 38, 38)"} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" 
                tickFormatter={formatDate}
                axisLine={false}
                tickLine={false}
                minTickGap={50}
                tickMargin={10}
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <YAxis 
                domain={[minPrice, maxPrice]}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${Number(value).toLocaleString()}`}
                tickMargin={10}
                tick={{ fill: '#888', fontSize: 12 }}
                width={80}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine 
                y={asset.high24h} 
                stroke="#15803D" 
                strokeDasharray="3 3" 
                label={{ value: "24h High", position: "insideTopRight", fill: "#15803D", fontSize: 10 }} 
              />
              <ReferenceLine 
                y={asset.low24h} 
                stroke="#DC2626" 
                strokeDasharray="3 3" 
                label={{ value: "24h Low", position: "insideBottomRight", fill: "#DC2626", fontSize: 10 }} 
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke={isPositive ? "rgb(21, 128, 61)" : "rgb(220, 38, 38)"}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: isPositive ? "rgb(21, 128, 61)" : "rgb(220, 38, 38)" }}
                fill={`url(#gradient-${asset.id})`}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
          <div className="space-y-1">
            <div className="text-muted-foreground flex items-center">
              <InfoIcon className="h-3 w-3 mr-1" />
              24h High
            </div>
            <div className="font-medium text-success">{formatCurrency(asset.high24h)}</div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground flex items-center">
              <InfoIcon className="h-3 w-3 mr-1" />
              24h Low
            </div>
            <div className="font-medium text-destructive">{formatCurrency(asset.low24h)}</div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground flex items-center">
              <InfoIcon className="h-3 w-3 mr-1" />
              All-Time High
            </div>
            <div className="font-medium">{formatCurrency(asset.allTimeHigh)}</div>
            <div className="text-xs text-muted-foreground">{formatATHDate(asset.allTimeHighDate)}</div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground flex items-center">
              <InfoIcon className="h-3 w-3 mr-1" />
              Circulation
            </div>
            <div className="font-medium">{formatLargeNumber(asset.circSupply)} {asset.symbol}</div>
            {asset.maxSupply && (
              <div className="text-xs text-muted-foreground">
                of {formatLargeNumber(asset.maxSupply)} max
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
