"use client";

import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";
import TrustSection from "./components/TrustSection";
import FastValuation from "./components/FastValuation";
import Questions from "./components/Questions";
import Map from "./components/Map";

// telegrami gasakeTebelia

export default function Page() {
  return (
    <LanguageProvider>
      <div className="w-full  ">
        <NavBar />
        <HomeSlider />
        <div className="flex flex-col p-4  mt-[15px] md:flex-row md:p-8 lg:m-auto lg:ml-[80px]  lg:gap-10">
          <TrustSection />
          <Questions />
        </div>
        <div className="flex items-center justify-center bg-slate-500 p-8 gap-10">
          <FastValuation />
          <Map />
        </div>
      </div>
    </LanguageProvider>
  );
}
