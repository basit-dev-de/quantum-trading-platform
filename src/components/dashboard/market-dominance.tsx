
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { mockAssets } from "@/lib/data/mock-data";

export function MarketDominance() {
  // Calculate total market cap
  const totalMarketCap = mockAssets.reduce((sum, asset) => sum + asset.marketCap, 0);
  
  // Prepare data for pie chart
  const dominanceData = mockAssets.map(asset => ({
    name: asset.symbol,
    value: asset.marketCap,
    percentage: ((asset.marketCap / totalMarketCap) * 100).toFixed(1)
  }));
  
  // Colors for the pie chart segments
  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316'];
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glass-card p-2 text-sm">
          <p className="font-medium">{data.name}</p>
          <p className="text-muted-foreground">
            {data.percentage}% (${(data.value / 1000000000).toFixed(1)}B)
          </p>
        </div>
      );
    }
    return null;
  };
  
  // Custom label for the pie chart
  const renderCustomizedLabel = ({ 
    cx, cy, midAngle, innerRadius, outerRadius, name, percentage 
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {name}
      </text>
    );
  };
  
  return (
    <Card className="premium-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Market Dominance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dominanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {dominanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {dominanceData.map((item, index) => (
            <div key={item.name} className="flex items-center gap-1 text-xs">
              <div 
                className="w-3 h-3 rounded-sm" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span>{item.name}: {item.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
