"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "fr" | "pt" | "en";
const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({ lang: "fr", setLang: () => undefined });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
