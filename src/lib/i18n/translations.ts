
export type Language = "en" | "de" | "fr" | "es";

export type TranslationKey =
  | "dashboard"
  | "trading"
  | "assets"
  | "settings"
  | "theme"
  | "language"
  | "light"
  | "dark"
  | "system"
  | "english"
  | "german"
  | "french"
  | "spanish"
  | "welcomeMessage"
  | "liveData"
  | "marketOverview"
  | "yourAssets"
  | "portfolio"
  | "portfolioValue"
  | "recentActivity"
  | "buy"
  | "sell"
  | "name"
  | "price"
  | "quantity"
  | "totalValue"
  | "search"
  | "high"
  | "low"
  | "allTimePerformance"
  | "appearance"
  | "chooseTheme"
  | "chooseLanguage"
  | "personalSettings"
  | "notification"
  | "enableNotifications"
  | "soundEffects"
  | "tradingPreferences"
  | "defaultCurrency"
  | "defaultTimeframe"
  | "chartPreferences"
  | "showVolume"
  | "showIndicators"
  | "candlestickChart"
  | "lineChart"
  | "barChart"
  | "areaChart"
  | "tradingViewIntegration"
  | "saveSettings"
  | "resetDefaults"
  | "profileSettings"
  | "displayName"
  | "email"
  | "currency"
  | "timezone"
  | "securitySettings"
  | "changePassword"
  | "twoFactorAuth"
  | "tradingVolume"
  | "marketDominance"
  | "priceCorrelation"
  | "settings24hVolume"
  | "customizeInterface"
  | "tradingExperience"
  | "security"
  | "profile"
  | "preferences"
  | "on"
  | "off";

type TranslationDictionary = {
  [key in Language]: {
    [key in TranslationKey]: string;
  };
};

export const translations: TranslationDictionary = {
  en: {
    dashboard: "Dashboard",
    trading: "Trading",
    assets: "Assets",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
    english: "English",
    german: "German",
    french: "French",
    spanish: "Spanish",
    welcomeMessage: "Welcome to your trading dashboard",
    liveData: "Live market data and trading",
    marketOverview: "Market Overview",
    yourAssets: "Your Assets",
    portfolio: "Portfolio",
    portfolioValue: "Portfolio Value",
    recentActivity: "Recent Activity",
    buy: "Buy",
    sell: "Sell",
    name: "Name",
    price: "Price",
    quantity: "Quantity",
    totalValue: "Total Value",
    search: "Search",
    high: "High",
    low: "Low",
    allTimePerformance: "All-time Performance",
    appearance: "Appearance",
    chooseTheme: "Choose your preferred theme",
    chooseLanguage: "Select your preferred language",
    personalSettings: "Personal Settings",
    notification: "Notifications",
    enableNotifications: "Enable Notifications",
    soundEffects: "Sound Effects",
    tradingPreferences: "Trading Preferences",
    defaultCurrency: "Default Currency",
    defaultTimeframe: "Default Timeframe",
    chartPreferences: "Chart Preferences",
    showVolume: "Show Volume",
    showIndicators: "Show Indicators",
    candlestickChart: "Candlestick Chart",
    lineChart: "Line Chart",
    barChart: "Bar Chart",
    areaChart: "Area Chart",
    tradingViewIntegration: "TradingView Integration",
    saveSettings: "Save Settings",
    resetDefaults: "Reset to Defaults",
    profileSettings: "Profile Settings",
    displayName: "Display Name",
    email: "Email",
    currency: "Currency",
    timezone: "Timezone",
    securitySettings: "Security Settings",
    changePassword: "Change Password",
    twoFactorAuth: "Two-Factor Authentication",
    tradingVolume: "Trading Volume",
    marketDominance: "Market Dominance",
    priceCorrelation: "Price Correlation",
    settings24hVolume: "24h Trading Volume",
    customizeInterface: "Customize your interface",
    tradingExperience: "Trading Experience",
    security: "Security",
    profile: "Profile",
    preferences: "Preferences",
    on: "On",
    off: "Off"
  },
  de: {
    dashboard: "Übersicht",
    trading: "Handel",
    assets: "Anlagen",
    settings: "Einstellungen",
    theme: "Thema",
    language: "Sprache",
    light: "Hell",
    dark: "Dunkel",
    system: "System",
    english: "Englisch",
    german: "Deutsch",
    french: "Französisch",
    spanish: "Spanisch",
    welcomeMessage: "Willkommen auf Ihrem Handelsdashboard",
    liveData: "Live-Marktdaten und Handel",
    marketOverview: "Marktübersicht",
    yourAssets: "Ihre Anlagen",
    portfolio: "Portfolio",
    portfolioValue: "Portfoliowert",
    recentActivity: "Letzte Aktivitäten",
    buy: "Kaufen",
    sell: "Verkaufen",
    name: "Name",
    price: "Preis",
    quantity: "Menge",
    totalValue: "Gesamtwert",
    search: "Suche",
    high: "Hoch",
    low: "Tief",
    allTimePerformance: "Gesamtperformance",
    appearance: "Erscheinungsbild",
    chooseTheme: "Wählen Sie Ihr bevorzugtes Thema",
    chooseLanguage: "Wählen Sie Ihre bevorzugte Sprache",
    personalSettings: "Persönliche Einstellungen",
    notification: "Benachrichtigungen",
    enableNotifications: "Benachrichtigungen aktivieren",
    soundEffects: "Soundeffekte",
    tradingPreferences: "Handelseinstellungen",
    defaultCurrency: "Standardwährung",
    defaultTimeframe: "Standard-Zeitrahmen",
    chartPreferences: "Diagrammeinstellungen",
    showVolume: "Volumen anzeigen",
    showIndicators: "Indikatoren anzeigen",
    candlestickChart: "Kerzenchart",
    lineChart: "Linienchart",
    barChart: "Balkenchart",
    areaChart: "Flächenchart",
    tradingViewIntegration: "TradingView-Integration",
    saveSettings: "Einstellungen speichern",
    resetDefaults: "Auf Standardwerte zurücksetzen",
    profileSettings: "Profileinstellungen",
    displayName: "Anzeigename",
    email: "E-Mail",
    currency: "Währung",
    timezone: "Zeitzone",
    securitySettings: "Sicherheitseinstellungen",
    changePassword: "Passwort ändern",
    twoFactorAuth: "Zwei-Faktor-Authentifizierung",
    tradingVolume: "Handelsvolumen",
    marketDominance: "Marktdominanz",
    priceCorrelation: "Preiskorrelation",
    settings24hVolume: "24h Handelsvolumen",
    customizeInterface: "Passen Sie Ihre Benutzeroberfläche an",
    tradingExperience: "Handelserfahrung",
    security: "Sicherheit",
    profile: "Profil",
    preferences: "Präferenzen",
    on: "Ein",
    off: "Aus"
  },
  fr: {
    dashboard: "Tableau de bord",
    trading: "Trading",
    assets: "Actifs",
    settings: "Paramètres",
    theme: "Thème",
    language: "Langue",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    english: "Anglais",
    german: "Allemand",
    french: "Français",
    spanish: "Espagnol",
    welcomeMessage: "Bienvenue sur votre tableau de bord de trading",
    liveData: "Données de marché et trading en direct",
    marketOverview: "Aperçu du marché",
    yourAssets: "Vos actifs",
    portfolio: "Portefeuille",
    portfolioValue: "Valeur du portefeuille",
    recentActivity: "Activité récente",
    buy: "Acheter",
    sell: "Vendre",
    name: "Nom",
    price: "Prix",
    quantity: "Quantité",
    totalValue: "Valeur totale",
    search: "Rechercher",
    high: "Haut",
    low: "Bas",
    allTimePerformance: "Performance globale",
    appearance: "Apparence",
    chooseTheme: "Choisissez votre thème préféré",
    chooseLanguage: "Sélectionnez votre langue préférée",
    personalSettings: "Paramètres personnels",
    notification: "Notifications",
    enableNotifications: "Activer les notifications",
    soundEffects: "Effets sonores",
    tradingPreferences: "Préférences de trading",
    defaultCurrency: "Devise par défaut",
    defaultTimeframe: "Période par défaut",
    chartPreferences: "Préférences de graphique",
    showVolume: "Afficher le volume",
    showIndicators: "Afficher les indicateurs",
    candlestickChart: "Graphique en chandeliers",
    lineChart: "Graphique en ligne",
    barChart: "Graphique en barres",
    areaChart: "Graphique en aires",
    tradingViewIntegration: "Intégration TradingView",
    saveSettings: "Enregistrer les paramètres",
    resetDefaults: "Réinitialiser les paramètres",
    profileSettings: "Paramètres du profil",
    displayName: "Nom d'affichage",
    email: "Email",
    currency: "Devise",
    timezone: "Fuseau horaire",
    securitySettings: "Paramètres de sécurité",
    changePassword: "Changer le mot de passe",
    twoFactorAuth: "Authentification à deux facteurs",
    tradingVolume: "Volume de trading",
    marketDominance: "Dominance du marché",
    priceCorrelation: "Corrélation des prix",
    settings24hVolume: "Volume de trading 24h",
    customizeInterface: "Personnalisez votre interface",
    tradingExperience: "Expérience de trading",
    security: "Sécurité",
    profile: "Profil",
    preferences: "Préférences",
    on: "Activé",
    off: "Désactivé"
  },
  es: {
    dashboard: "Panel",
    trading: "Trading",
    assets: "Activos",
    settings: "Configuración",
    theme: "Tema",
    language: "Idioma",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    english: "Inglés",
    german: "Alemán",
    french: "Francés",
    spanish: "Español",
    welcomeMessage: "Bienvenido a su panel de trading",
    liveData: "Datos de mercado y trading en vivo",
    marketOverview: "Resumen del mercado",
    yourAssets: "Sus activos",
    portfolio: "Cartera",
    portfolioValue: "Valor de la cartera",
    recentActivity: "Actividad reciente",
    buy: "Comprar",
    sell: "Vender",
    name: "Nombre",
    price: "Precio",
    quantity: "Cantidad",
    totalValue: "Valor total",
    search: "Buscar",
    high: "Alto",
    low: "Bajo",
    allTimePerformance: "Rendimiento histórico",
    appearance: "Apariencia",
    chooseTheme: "Elija su tema preferido",
    chooseLanguage: "Seleccione su idioma preferido",
    personalSettings: "Configuración personal",
    notification: "Notificaciones",
    enableNotifications: "Habilitar notificaciones",
    soundEffects: "Efectos de sonido",
    tradingPreferences: "Preferencias de trading",
    defaultCurrency: "Moneda predeterminada",
    defaultTimeframe: "Marco temporal predeterminado",
    chartPreferences: "Preferencias de gráficos",
    showVolume: "Mostrar volumen",
    showIndicators: "Mostrar indicadores",
    candlestickChart: "Gráfico de velas",
    lineChart: "Gráfico de líneas",
    barChart: "Gráfico de barras",
    areaChart: "Gráfico de áreas",
    tradingViewIntegration: "Integración con TradingView",
    saveSettings: "Guardar configuración",
    resetDefaults: "Restablecer valores predeterminados",
    profileSettings: "Configuración del perfil",
    displayName: "Nombre de visualización",
    email: "Correo electrónico",
    currency: "Moneda",
    timezone: "Zona horaria",
    securitySettings: "Configuración de seguridad",
    changePassword: "Cambiar contraseña",
    twoFactorAuth: "Autenticación de dos factores",
    tradingVolume: "Volumen de trading",
    marketDominance: "Dominancia del mercado",
    priceCorrelation: "Correlación de precios",
    settings24hVolume: "Volumen de trading 24h",
    customizeInterface: "Personalice su interfaz",
    tradingExperience: "Experiencia de trading",
    security: "Seguridad",
    profile: "Perfil",
    preferences: "Preferencias",
    on: "Activado",
    off: "Desactivado"
  }
};
