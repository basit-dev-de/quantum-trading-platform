
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/language-context";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-scale-in">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-2 ${language === "en" ? "bg-accent" : ""}`}
        >
          <span className="w-4 h-4 flex items-center justify-center font-bold">
            🇬🇧
          </span>
          <span>{t("english")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("de")}
          className={`flex items-center gap-2 ${language === "de" ? "bg-accent" : ""}`}
        >
          <span className="w-4 h-4 flex items-center justify-center font-bold">
            🇩🇪
          </span>
          <span>{t("german")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("fr")}
          className={`flex items-center gap-2 ${language === "fr" ? "bg-accent" : ""}`}
        >
          <span className="w-4 h-4 flex items-center justify-center font-bold">
            🇫🇷
          </span>
          <span>{t("french")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`flex items-center gap-2 ${language === "es" ? "bg-accent" : ""}`}
        >
          <span className="w-4 h-4 flex items-center justify-center font-bold">
            🇪🇸
          </span>
          <span>{t("spanish")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
