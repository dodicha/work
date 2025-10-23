"use client";

import { useState } from "react";
import { ViberButton, WhatsappButton } from "./Contact";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Services", "About", "Contact"];

  return (
    <nav className="w-full bg-black/70 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-8xl mx-12 py-[10px] flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">LOGO</div>

        {/* Desktop links */}
        <div className="flex items-center gap-24">
          <div>
            <ul className="hidden md:flex space-x-8 font-medium text-xl">
              {links.map((link) => (
                <li key={link} className="hover:text-yellow-400 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <ViberButton />
            <WhatsappButton />
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
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
        <ul className="md:hidden  flex flex-col items-center space-y-4 py-4 text-lg font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-yellow-400 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
