"use client";

import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
interface languageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  selectedLanguageData: object | null;
}

const LanguageContext = createContext<languageContextType | undefined>(
  undefined
);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState("en");
  const [selectedLanguageData, setSelectedLanguageData] = useState<
    object | null
  >(null);

  useEffect(() => {
    const getLanguage = async () => {
      const res = await fetch(`/data/translation.json`);
      const data = await res.json();
      setSelectedLanguageData(data[language]);
    };
    getLanguage();
  }, [language]);

  console.log(language);

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
