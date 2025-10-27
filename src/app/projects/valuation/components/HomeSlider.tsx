"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageProvider";
const images = [
  "/images/valuation/home.jpg",
  "/images/valuation/house.jpg",
  "/images/valuation/commercial.jpg",
  "/images/valuation/land.jpg",
];

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, setLanguage, selectedLanguageData } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-11/12 h-2/3 mt-[124px] overflow-hidden rounded-2xl shadow-xl">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 flex flex-col items-center justify-center text-center text-white px-4 z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-4 drop-shadow-lg">
          {selectedLanguageData?.["evaluate"]}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl drop-shadow-md">
          {selectedLanguageData?.["true market value"]}
        </p>
      </div>
    </div>
  );
}
