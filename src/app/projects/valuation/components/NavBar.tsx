"use client";

import { useState, useEffect } from "react";
import { ViberButton, WhatsappButton } from "./Contact";

export default function NavBar() {
  const linkKeys = ["services", "about", "contact"];
  const [translations, setTranslations] = useState<any>({});
  const [language, setLanguage] = useState("en");
  const [translatedLinks, setTranslatedLinks] = useState<string[]>([
    "Services",
    "About",
    "Contact",
  ]);
  const [isOpen, setIsOpen] = useState(false);

  // Load language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLanguage(savedLang);
  }, []);

  // Fetch translations from public folder
  useEffect(() => {
    fetch("/data/translations.json")
      .then((res) => res.json())
      .then((data) => {
        setTranslations(data);
      })
      .catch((err) => console.error("Translations fetch error:", err));
  }, []);

  // Update translated links whenever translations or language changes
  useEffect(() => {
    if (Object.keys(translations).length > 0) {
      const newLinks = linkKeys.map((key) => translations[language][key]);
      setTranslatedLinks(newLinks);
      localStorage.setItem("lang", language);
    }
  }, [language, translations]);

  return (
    <nav className="w-full bg-black/70 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-8xl mx-12 py-[10px] flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO</div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 font-medium text-xl">
            {translatedLinks.map((link, i) => (
              <li key={i} className="hover:text-yellow-400 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 ml-4">
            <ViberButton />
            <WhatsappButton />
          </div>

          <div className="flex space-x-2 ml-4">
            {["ka", "ru", "en", "tr"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
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

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex space-x-2">
            {["ka", "ru", "en", "tr"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
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

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 text-lg font-medium bg-black/90">
          {translatedLinks.length > 0 ? (
            translatedLinks.map((link, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </li>
            ))
          ) : (
            <li className="text-gray-400">Loading...</li>
          )}
        </ul>
      )}
    </nav>
  );
}
