import React from "react";
import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";

export default function page() {
  return (
    <LanguageProvider>
      <div className="w-full h-screen flex  justify-center ">
        <NavBar />
        <HomeSlider />
      </div>
    </LanguageProvider>
  );
}
