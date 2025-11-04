import React from "react";
import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";
import TrustSection from "./components/TrustSection";

export default function page() {
  return (
    <LanguageProvider>
      <div className=" w-full  flex flex-col justify-center items-center ">
        <NavBar />
        <HomeSlider />
        <TrustSection />
      </div>
    </LanguageProvider>
  );
}
