import React from "react";
import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";
import TrustSection from "./components/TrustSection";

// telegrami gasakeTebelia

export default function page() {
  return (
    <LanguageProvider>
      <div className=" w-full  flex flex-col justify-center items-center ">
        <NavBar />
        <HomeSlider />
        <TrustSection />
        <div
          style={{ backgroundImage: `url(/images/valuation/valuation.png)` }}
          className="w-1/2 h-[800px] bg-slate-700 text-white text-center"
        ></div>
      </div>
    </LanguageProvider>
  );
}
