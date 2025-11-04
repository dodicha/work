"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageProvider";

export default function HomeSlider() {
  const { selectedLanguageData } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/valuation/home.jpg",
    "/images/valuation/house.jpg",
    "/images/valuation/commercial.jpg",
    "/images/valuation/land.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className=" w-11/12 h-[450px] mt-[70px] bg-center bg-cover rounded-2xl flex items-center justify-center transition-all duration-700 "
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="flex flex-col items-center text-center text-white px-4 z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {selectedLanguageData?.["evaluate"] ?? ""}
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
          {selectedLanguageData?.["true market value"] ?? ""}
        </p>
      </div>
    </div>
  );
}
