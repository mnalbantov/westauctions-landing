import { create } from 'zustand';
import translations from './translations';

type Language = 'en' | 'bg';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'bg',
  setLanguage: (lang) => set({ language: lang }),
}));

// Type-safe way to access translations
export const useTranslations = () => {
  const { language } = useLanguageStore();
  return translations[language];
};