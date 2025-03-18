
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/context/language-context";
import { LayoutDashboard, TrendingUp, Briefcase, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  const { t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { to: "/dashboard", label: t("dashboard"), icon: LayoutDashboard },
    { to: "/trading", label: t("trading"), icon: TrendingUp },
    { to: "/assets", label: t("assets"), icon: Briefcase },
    { to: "/settings", label: t("settings"), icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center mr-6">
            <span className="font-bold text-lg md:text-xl tracking-tight">
              Quantum
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center text-sm font-medium gap-1.5 transition-colors hover:text-foreground",
                  isActive(item.to)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
      
      {/* Mobile navigation */}
      <nav className="md:hidden px-4 pb-3 flex items-center justify-between overflow-auto">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-3 rounded-md text-xs font-medium transition-colors",
              isActive(item.to)
                ? "text-foreground bg-muted/50"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
            )}
          >
            <item.icon className="h-5 w-5 mb-1" />
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
