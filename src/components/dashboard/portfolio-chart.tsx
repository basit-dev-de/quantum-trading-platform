
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatCurrency } from "@/lib/utils/format-currency";
import { mockPortfolioPerformance } from "@/lib/data/mock-data";

export function PortfolioChart() {
  // Format date for tooltip and labels
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-2 text-sm">
          <p className="text-muted-foreground">{formatDate(label)}</p>
          <p className="font-medium">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <Card className="premium-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Portfolio Performance (30-Day)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockPortfolioPerformance.map(item => ({
              date: item.date.toISOString(),
              value: item.value
            }))}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(59, 130, 246)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="rgb(59, 130, 246)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => formatDate(date)}
                axisLine={false}
                tickLine={false}
                minTickGap={50}
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <YAxis 
                dataKey="value"
                domain={['auto', 'auto']}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
                tick={{ fill: '#888', fontSize: 12 }}
                width={60}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="rgb(59, 130, 246)" 
                fillOpacity={1} 
                fill="url(#portfolioGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
