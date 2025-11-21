import React from "react";
import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";
import TrustSection from "./components/TrustSection";

// telegrami gasakeTebelia

export default function page() {
  return (
    <LanguageProvider>
      <div className="w-full">
        <NavBar />
        <HomeSlider />
        <div className="flex mt-[15px]">
          <TrustSection />
          <div className="w-full bg-slate-400 mr-[70px]"></div>
        </div>
      </div>
    </LanguageProvider>
  );
}
