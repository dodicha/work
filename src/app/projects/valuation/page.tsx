"use client";

import React, { useState } from "react";
import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";
import TrustSection from "./components/TrustSection";
import FastValuation from "./components/FastValuation";

// telegrami gasakeTebelia

export default function Page() {
  return (
    <LanguageProvider>
      <div className="w-full">
        <NavBar />
        <HomeSlider />
        <div className="flex flex-col p-4  mt-[15px]">
          <TrustSection />
          <FastValuation />
        </div>
      </div>
    </LanguageProvider>
  );
}
