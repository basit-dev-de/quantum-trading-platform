
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { mockAssets } from "@/lib/data/mock-data";
import { useLanguage } from "@/context/language-context";

export function VolumeChart() {
  const { t } = useLanguage();
  
  // Prepare data for the volume chart
  const volumeData = mockAssets.map(asset => ({
    name: asset.symbol,
    volume: asset.volume24h / 1000000000, // Convert to billions
    color: asset.change24h >= 0 ? "rgb(21, 128, 61)" : "rgb(220, 38, 38)"
  }));
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-2 text-sm">
          <p className="text-muted-foreground">{label}</p>
          <p className="font-medium">${payload[0].value.toFixed(2)}B</p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <Card className="premium-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{t("settings24hVolume")} ({t("quantity")})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={volumeData}>
              <XAxis 
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value.toFixed(1)}B`}
                tick={{ fill: '#888', fontSize: 12 }}
                width={60}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="volume" 
                radius={[4, 4, 0, 0]}
                fill="rgba(59, 130, 246, 0.8)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
