
import { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationKey } from "@/lib/i18n/translations";
import { useToast } from "@/components/ui/use-toast";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const defaultLanguageContext: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: () => "",
};

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { toast } = useToast();
  const [language, setLanguage] = useState<Language>(() => {
    // Try to detect browser language first
    const browserLang = navigator.language.split('-')[0];
    const savedLanguage = localStorage.getItem("language");
    
    // Check if browser language is supported and no saved preference exists
    if (!savedLanguage && (browserLang === "en" || browserLang === "de" || browserLang === "fr" || browserLang === "es")) {
      return browserLang as Language;
    }
    
    // Fall back to saved language or default to English
    return (savedLanguage as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    
    // Get the language name to show in the toast
    const languageNames = {
      en: "English",
      de: "Deutsch",
      fr: "Français",
      es: "Español"
    };
    
    // Show a toast notification when language changes (except on initial load)
    if (document.readyState === "complete") {
      toast({
        title: translations[language].language,
        description: `${languageNames[language]}`,
        duration: 2000,
      });
    }
  }, [language, toast]);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
