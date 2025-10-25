"use client";

import { useState, useEffect } from "react";
import translations from "../data/translations.json";

export default function Navbar() {
  const links = ["services", "about", "contact"];
  const savedLang =
    typeof window !== "undefined" ? localStorage.getItem("lang") : "en";

  const [language, setLanguage] = useState(savedLang || "en");
  const [translatedLinks, setTranslatedLinks] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    setTranslatedLinks(links.map((key) => translations[lang][key]));
  };

  useEffect(() => {
    changeLanguage(language);
  }, []);

  return (
    <nav className="w-full bg-black/70 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-8xl mx-12 py-[10px] flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO</div>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex space-x-8 font-medium text-xl">
            {translatedLinks.map((link, i) => (
              <li key={i} className="hover:text-yellow-400 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex space-x-2">
            {["ka", "ru", "en", "tr"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`px-2 py-1 rounded ${
                  language === lang
                    ? "bg-yellow-400 text-black font-semibold"
                    : "hover:bg-gray-700"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <div className="flex space-x-2">
            {["ka", "ru", "en", "tr"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`px-2 py-1 rounded ${
                  language === lang
                    ? "bg-yellow-400 text-black font-semibold"
                    : "hover:bg-gray-700"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 text-lg font-medium">
          {translatedLinks.map((link, i) => (
            <li
              key={i}
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
