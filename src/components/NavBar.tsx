"use client";

import { useState } from "react";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function NavBar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed left-0 top-0 h-full w-32 bg-white shadow-md flex flex-col items-center justify-center gap-6 z-50">
      {navItems.map((item) => {
        const isActive = active === item;
        return (
          <a
            key={item}
            href={`${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className={`
              relative font-medium text-sm md:text-base transition-all duration-300
              text-gray-700 hover:text-black
              ${isActive ? "text-xl font-bold scale-110" : "hover:scale-110"}
            `}
          >
            {item}

            {/* ხაზის ანიმაცია ქვემოთ */}
            <span
              className={`
                block h-[2px] bg-black mt-1 transition-all duration-300
                ${isActive ? "w-full" : "w-0 hover:w-full"}
              `}
            />
          </a>
        );
      })}
    </nav>
  );
}
