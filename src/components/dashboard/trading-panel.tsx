
import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { formatCurrency } from "@/lib/utils/format-currency";

type TradingPanelProps = {
  asset: {
    id: string;
    name: string;
    symbol: string;
    price: number;
  };
};

export function TradingPanel({ asset }: TradingPanelProps) {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<number>(0);
  const [sliderValue, setSliderValue] = useState<number[]>([0]);
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
      setSliderValue([Math.min(value * 100 / (asset.price * 5), 100)]);
    } else {
      setAmount(0);
      setSliderValue([0]);
    }
  };
  
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    const calculatedAmount = (asset.price * 5) * (value[0] / 100);
    setAmount(parseFloat(calculatedAmount.toFixed(8)));
  };
  
  return (
    <Card className="premium-card">
      <CardHeader className="pb-2">
        <CardTitle>{t("trading")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="buy">{t("buy")}</TabsTrigger>
            <TabsTrigger value="sell">{t("sell")}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy" className="space-y-4">
            <div>
              <Label htmlFor="buy-amount">{t("quantity")}</Label>
              <div className="relative mt-1.5">
                <Input
                  id="buy-amount"
                  type="number"
                  min="0"
                  step="0.00000001"
                  value={amount || ""}
                  onChange={handleAmountChange}
                  className="pr-16"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                  {asset.symbol}
                </div>
              </div>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span>0</span>
                <span>Max</span>
              </div>
              <Slider
                value={sliderValue}
                onValueChange={handleSliderChange}
                max={100}
                step={1}
              />
            </div>
            
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Market Price</span>
                <span>{formatCurrency(asset.price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Cost</span>
                <span>{formatCurrency(amount * asset.price)}</span>
              </div>
            </div>
            
            <Button className="w-full">{t("buy")} {asset.symbol}</Button>
          </TabsContent>
          
          <TabsContent value="sell" className="space-y-4">
            <div>
              <Label htmlFor="sell-amount">{t("quantity")}</Label>
              <div className="relative mt-1.5">
                <Input
                  id="sell-amount"
                  type="number"
                  min="0"
                  step="0.00000001"
                  value={amount || ""}
                  onChange={handleAmountChange}
                  className="pr-16"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                  {asset.symbol}
                </div>
              </div>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span>0</span>
                <span>Max</span>
              </div>
              <Slider
                value={sliderValue}
                onValueChange={handleSliderChange}
                max={100}
                step={1}
              />
            </div>
            
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Market Price</span>
                <span>{formatCurrency(asset.price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Value</span>
                <span>{formatCurrency(amount * asset.price)}</span>
              </div>
            </div>
            
            <Button className="w-full bg-destructive hover:bg-destructive/90">
              {t("sell")} {asset.symbol}
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
