"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { useLanguage } from "../context/LanguageProvider";

const languageList = [
  { code: "ka", flag: "GE" },
  { code: "ru", flag: "RU" },
  { code: "en", flag: "GB" },
];

export default function NavBar() {
  const linkKeys = ["services", "about", "contact"];
  const { language, setLanguage, selectedLanguageData } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black/80 text-white fixed top-0 left-0 z-50  ">
      <div className="max-w-8xl mx-4 py-[10px] flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO</div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 font-medium text-xl">
            {linkKeys.map((link, i) => (
              <Link
                href="/projects/valuation/contact"
                key={i}
                className="hover:text-yellow-400 cursor-pointer"
              >
                {selectedLanguageData?.[link]}
              </Link>
            ))}
          </ul>

          <div className="flex space-x-2 ml-4">
            {languageList.map(({ code, flag }) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`px-2 py-1 rounded ml-[4px] flex items-center gap-1 ${
                  language === code
                    ? "bg-yellow-400 text-black font-semibold"
                    : "hover:bg-gray-800"
                }`}
              >
                <ReactCountryFlag
                  countryCode={flag}
                  svg
                  style={{ width: "1.2em", height: "1.2em" }}
                />
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center ">
          <div className="">
            {languageList.map(({ code }) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`px-2 py-1 rounded ml-[4px]  ${
                  language === code
                    ? "bg-yellow-400 text-black font-semibold"
                    : ""
                }`}
              >
                {code.toUpperCase()}
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
