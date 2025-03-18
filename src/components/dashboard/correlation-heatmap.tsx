
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockAssets } from "@/lib/data/mock-data";

// Generate correlation data (normally this would be calculated from real price movements)
const generateCorrelationData = () => {
  const symbols = mockAssets.map(asset => asset.symbol);
  const correlations: Record<string, Record<string, number>> = {};
  
  symbols.forEach(symbol1 => {
    correlations[symbol1] = {};
    symbols.forEach(symbol2 => {
      if (symbol1 === symbol2) {
        correlations[symbol1][symbol2] = 1;
      } else {
        // Generate a reasonable correlation value between -1 and 1
        // In reality, this would be calculated from price data
        correlations[symbol1][symbol2] = parseFloat((Math.random() * 1.6 - 0.8).toFixed(2));
      }
    });
  });
  
  return { symbols, correlations };
};

export function CorrelationHeatmap() {
  const { symbols, correlations } = generateCorrelationData();
  
  // Function to determine cell color based on correlation value
  const getCellColor = (value: number) => {
    if (value === 1) return 'bg-primary/80';
    if (value >= 0.5) return 'bg-success/60';
    if (value >= 0) return 'bg-success/30';
    if (value >= -0.5) return 'bg-destructive/30';
    return 'bg-destructive/60';
  };
  
  return (
    <Card className="premium-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Price Correlation Heatmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="p-1 text-left"></th>
                {symbols.map(symbol => (
                  <th key={symbol} className="p-1 text-center">{symbol}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {symbols.map(symbol1 => (
                <tr key={symbol1}>
                  <td className="p-1 font-medium">{symbol1}</td>
                  {symbols.map(symbol2 => (
                    <td 
                      key={`${symbol1}-${symbol2}`} 
                      className={`p-1 text-center ${getCellColor(correlations[symbol1][symbol2])}`}
                    >
                      {correlations[symbol1][symbol2]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center mt-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Strong Negative</span>
            <div className="flex">
              <div className="w-4 h-3 bg-destructive/60"></div>
              <div className="w-4 h-3 bg-destructive/30"></div>
              <div className="w-4 h-3 bg-success/30"></div>
              <div className="w-4 h-3 bg-success/60"></div>
              <div className="w-4 h-3 bg-primary/80"></div>
            </div>
            <span>Strong Positive</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
