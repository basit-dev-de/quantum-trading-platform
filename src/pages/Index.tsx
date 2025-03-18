
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="font-bold text-lg md:text-xl tracking-tight">
            Quantum
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Quantum Trading Platform
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Advanced trading platform with real-time data visualization and machine learning insights.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/dashboard">
                  <Button size="lg" className="gap-1">
                    {t("dashboard")}
                  </Button>
                </Link>
                <Link to="/trading">
                  <Button size="lg" variant="outline" className="gap-1">
                    {t("trading")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform provides everything you need for modern trading
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Real-time Data</h3>
                <p className="text-muted-foreground">
                  Access real-time market data and analytics for informed trading decisions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m2 16 4-4 4 4 4-4 4 4 4-4"></path>
                    <path d="M2 8h20"></path>
                    <path d="M2 12h20"></path>
                    <path d="M2 20h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Advanced Charts</h3>
                <p className="text-muted-foreground">
                  Powerful charting tools with technical indicators and pattern recognition.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Insights</h3>
                <p className="text-muted-foreground">
                  Machine learning powered insights to help you make better trading decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2023 Quantum Trading Platform. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
              {t("dashboard")}
            </Link>
            <Link to="/trading" className="text-sm text-muted-foreground hover:text-foreground">
              {t("trading")}
            </Link>
            <Link to="/assets" className="text-sm text-muted-foreground hover:text-foreground">
              {t("assets")}
            </Link>
            <Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground">
              {t("settings")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
