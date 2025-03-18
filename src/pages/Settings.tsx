
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun, Monitor, Bell, Volume2, Save, RotateCcw, ChevronRight, BarChart4, LineChart, CandlestickChart, UserCircle, Lock, Globe, Sliders } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  
  // User preferences state
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [defaultCurrency, setDefaultCurrency] = useState("USD");
  const [defaultTimeframe, setDefaultTimeframe] = useState("1D");
  const [showVolume, setShowVolume] = useState(true);
  const [showIndicators, setShowIndicators] = useState(true);
  const [chartType, setChartType] = useState("candlestick");
  const [tradingViewEnabled, setTradingViewEnabled] = useState(false);
  
  // User profile state
  const [displayName, setDisplayName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [timezone, setTimezone] = useState("UTC+1");
  
  const handleSaveSettings = () => {
    // Here we would save settings to a backend
    console.log("Settings saved");
  };
  
  const handleResetDefaults = () => {
    // Reset to default settings
    setNotifications(true);
    setSoundEffects(true);
    setDefaultCurrency("USD");
    setDefaultTimeframe("1D");
    setShowVolume(true);
    setShowIndicators(true);
    setChartType("candlestick");
    setTradingViewEnabled(false);
  };

  return (
    <div className="container px-4 py-6 md:py-8 max-w-5xl mx-auto animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">
          {t("settings")}
        </h1>
        <p className="text-muted-foreground">
          {t("customizeInterface")}
        </p>
      </div>
      
      <Tabs defaultValue="appearance" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            {t("appearance")}
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Sliders className="h-4 w-4" />
            {t("preferences")}
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            {t("profile")}
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            {t("security")}
          </TabsTrigger>
        </TabsList>
        
        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle>{t("theme")}</CardTitle>
              <CardDescription>
                {t("chooseTheme")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                defaultValue={theme} 
                value={theme}
                onValueChange={(value) => {
                  setTheme(value as "light" | "dark" | "system");
                }}
                className="grid grid-cols-3 gap-4"
              >
                <div>
                  <RadioGroupItem 
                    value="light" 
                    id="light" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="light"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <Sun className="mb-3 h-6 w-6" />
                    {t("light")}
                  </Label>
                </div>

                <div>
                  <RadioGroupItem 
                    value="dark" 
                    id="dark" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="dark"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <Moon className="mb-3 h-6 w-6" />
                    {t("dark")}
                  </Label>
                </div>

                <div>
                  <RadioGroupItem 
                    value="system" 
                    id="system" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="system"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <Monitor className="mb-3 h-6 w-6" />
                    {t("system")}
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle>{t("language")}</CardTitle>
              <CardDescription>
                {t("chooseLanguage")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                defaultValue={language} 
                value={language}
                onValueChange={(value) => {
                  setLanguage(value as "en" | "de" | "fr" | "es");
                }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div>
                  <RadioGroupItem 
                    value="en" 
                    id="english" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="english"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <span className="text-2xl mb-2">🇬🇧</span>
                    {t("english")}
                  </Label>
                </div>

                <div>
                  <RadioGroupItem 
                    value="de" 
                    id="german" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="german"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <span className="text-2xl mb-2">🇩🇪</span>
                    {t("german")}
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem 
                    value="fr" 
                    id="french" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="french"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <span className="text-2xl mb-2">🇫🇷</span>
                    {t("french")}
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem 
                    value="es" 
                    id="spanish" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="spanish"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <span className="text-2xl mb-2">🇪🇸</span>
                    {t("spanish")}
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle>{t("personalSettings")}</CardTitle>
              <CardDescription>{t("tradingExperience")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">{t("notification")}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t("enableNotifications")}
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  aria-label="Toggle notifications"
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sound">{t("soundEffects")}</Label>
                  <p className="text-sm text-muted-foreground">
                    {notifications ? t("on") : t("off")}
                  </p>
                </div>
                <Switch
                  id="sound"
                  checked={soundEffects}
                  onCheckedChange={setSoundEffects}
                  aria-label="Toggle sound effects"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="premium-card">
            <CardHeader>
              <CardTitle>{t("tradingPreferences")}</CardTitle>
              <CardDescription>{t("chartPreferences")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">{t("defaultCurrency")}</Label>
                  <Select value={defaultCurrency} onValueChange={setDefaultCurrency}>
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="JPY">JPY (¥)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeframe">{t("defaultTimeframe")}</Label>
                  <Select value={defaultTimeframe} onValueChange={setDefaultTimeframe}>
                    <SelectTrigger id="timeframe">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1H">1H</SelectItem>
                      <SelectItem value="4H">4H</SelectItem>
                      <SelectItem value="1D">1D</SelectItem>
                      <SelectItem value="1W">1W</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <Label>{t("chartPreferences")}</Label>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="volume">{t("showVolume")}</Label>
                    <Switch
                      id="volume"
                      checked={showVolume}
                      onCheckedChange={setShowVolume}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="indicators">{t("showIndicators")}</Label>
                    <Switch
                      id="indicators"
                      checked={showIndicators}
                      onCheckedChange={setShowIndicators}
                    />
                  </div>
                </div>
                
                <RadioGroup 
                  value={chartType}
                  onValueChange={setChartType}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                >
                  <div>
                    <RadioGroupItem 
                      value="candlestick" 
                      id="candlestick" 
                      className="peer sr-only" 
                    />
                    <Label
                      htmlFor="candlestick"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <CandlestickChart className="mb-2 h-5 w-5" />
                      {t("candlestickChart")}
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem 
                      value="line" 
                      id="line" 
                      className="peer sr-only" 
                    />
                    <Label
                      htmlFor="line"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <LineChart className="mb-2 h-5 w-5" />
                      {t("lineChart")}
                    </Label>
                  </div>
                  
                  <div>
                    <RadioGroupItem 
                      value="bar" 
                      id="bar" 
                      className="peer sr-only" 
                    />
                    <Label
                      htmlFor="bar"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <BarChart4 className="mb-2 h-5 w-5" />
                      {t("barChart")}
                    </Label>
                  </div>
                  
                  <div>
                    <RadioGroupItem 
                      value="area" 
                      id="area" 
                      className="peer sr-only" 
                    />
                    <Label
                      htmlFor="area"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <LineChart className="mb-2 h-5 w-5" />
                      {t("areaChart")}
                    </Label>
                  </div>
                </RadioGroup>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="tradingview">{t("tradingViewIntegration")}</Label>
                    <p className="text-sm text-muted-foreground">
                      {tradingViewEnabled ? t("on") : t("off")}
                    </p>
                  </div>
                  <Switch
                    id="tradingview"
                    checked={tradingViewEnabled}
                    onCheckedChange={setTradingViewEnabled}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button
                variant="outline"
                onClick={handleResetDefaults}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                {t("resetDefaults")}
              </Button>
              <Button
                onClick={handleSaveSettings}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                {t("saveSettings")}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle>{t("profileSettings")}</CardTitle>
              <CardDescription>{t("personalSettings")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                
                <div className="grid flex-1 gap-1.5">
                  <Label htmlFor="displayName">{t("displayName")}</Label>
                  <Input 
                    id="displayName" 
                    value={displayName} 
                    onChange={e => setDisplayName(e.target.value)} 
                  />
                </div>
              </div>
              
              <div className="grid gap-1.5">
                <Label htmlFor="email">{t("email")}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="currency">{t("currency")}</Label>
                  <Select value={defaultCurrency} onValueChange={setDefaultCurrency}>
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="JPY">JPY (¥)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="timezone">{t("timezone")}</Label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC-12">UTC-12</SelectItem>
                      <SelectItem value="UTC-8">UTC-8 (PST)</SelectItem>
                      <SelectItem value="UTC-5">UTC-5 (EST)</SelectItem>
                      <SelectItem value="UTC+0">UTC+0 (GMT)</SelectItem>
                      <SelectItem value="UTC+1">UTC+1 (CET)</SelectItem>
                      <SelectItem value="UTC+2">UTC+2 (EET)</SelectItem>
                      <SelectItem value="UTC+8">UTC+8 (CST)</SelectItem>
                      <SelectItem value="UTC+9">UTC+9 (JST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto flex items-center gap-2">
                <Save className="h-4 w-4" />
                {t("saveSettings")}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle>{t("securitySettings")}</CardTitle>
              <CardDescription>{t("security")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{t("changePassword")}</h3>
                    <p className="text-sm text-muted-foreground">Update your password</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" /> 
                    {t("changePassword")}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{t("twoFactorAuth")}</h3>
                    <p className="text-sm text-muted-foreground">Enhance your account security</p>
                  </div>
                  <Switch 
                    id="2fa" 
                    defaultChecked={false} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
