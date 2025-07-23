import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('preferred-language');
    if (saved && saved in translations) {
      return saved as Language;
    }
    
    // Then check browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang in translations) {
      return browserLang as Language;
    }
    
    // Default to English
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}