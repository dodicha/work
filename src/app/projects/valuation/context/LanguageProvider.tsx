"use client";
import React, { useContext, useEffect, useState, createContext } from "react";

interface TranslationData {
  [key: string]: string;
}

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  selectedLanguageData: TranslationData | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState("en");
  const [selectedLanguageData, setSelectedLanguageData] =
    useState<TranslationData | null>(null);

  useEffect(() => {
    const getLanguage = async () => {
      const res = await fetch(`/data/translation.json`);
      const data = await res.json();
      setSelectedLanguageData(data[language]);
    };
    getLanguage();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, selectedLanguageData }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
