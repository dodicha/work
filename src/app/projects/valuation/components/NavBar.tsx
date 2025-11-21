"use client";

import { useState, useEffect } from "react";
import { ViberButton, WhatsappButton } from "./Contact";
import { useLanguage } from "../context/LanguageProvider";

export default function NavBar() {
  const linkKeys = ["services", "about", "contact"];
  const { language, setLanguage, selectedLanguageData } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black/70 text-white fixed top-0 left-0  ">
      <div className="max-w-8xl mx-4 py-[10px] flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO</div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 font-medium text-xl">
            {linkKeys.map((link, i) => (
              <li key={i} className="hover:text-yellow-400 cursor-pointer">
                {selectedLanguageData?.[link]}
              </li>
            ))}
          </ul>

          {/* <div className="flex flex-col gap-2 ml-4">
            <ViberButton />
            <WhatsappButton />
          </div> */}

          <div className="flex space-x-2 ml-4">
            {["ka", "ru", "en", "tr"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 rounded ml-[4px] ${
                  language === lang
                    ? "bg-yellow-400 text-black font-semibold"
                    : "hover:bg-gray-800"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center ">
          <div className="">
            {["ka", "ru", "en", "tr"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 rounded ml-[4px]  ${
                  language === lang
                    ? "bg-yellow-400 text-black font-semibold"
                    : ""
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 ml-2"
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
        <ul className="md:hidden flex flex-col items-center space-y-4 py-2 text-lg font-medium ">
          {linkKeys.length > 0 ? (
            linkKeys.map((link, i) => (
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
