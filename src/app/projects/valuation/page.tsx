"use client";

import React, { useState } from "react";
import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";
import TrustSection from "./components/TrustSection";

// telegrami gasakeTebelia

const bedroomOptions = [1, 2, 3, 4, 5];

export default function page() {
  const [bedrooms, setBedrooms] = useState(1);
  return (
    <LanguageProvider>
      <div className="w-full">
        <NavBar />
        <HomeSlider />
        <div className="flex mt-[15px]">
          <TrustSection />
          <div className="w-full  -md mr-[70px] text-center">
            <h2 className="font-semibold text-2xl mb-2">
              Instant Property Valuation
            </h2>
            <div className="w-full rounded-xl py-4 px-4 text-left bg-slate-200">
              <h1 className="mb-[15px] font-semibold">
                Enter Property Details
              </h1>
              <div className="mb-4">
                <label className="block mb-1 font-sm">Address</label>
                <input
                  type="text"
                  placeholder="Your Property Address"
                  className="w-full h-[45px] rounded-lg px-2 py-3 focus:ring-2 focus:ring-blue-500"
                ></input>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="w-1/2 flex-1">
                  <label className="block mb-1 font-sm">Property Type</label>
                  <select className=" rounded-lg px-3 py-3 text-sm">
                    <option>Select property type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Land</option>
                  </select>
                </div>
                <div className=" flex-1">
                  <label className="block mb-1 font-sm">
                    Living Area (sq ft)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 1500"
                    className=" rounded-lg h-[44px] px-3 py-3 placeholder:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-sm">Bedrooms</label>
                <div className="flex gap-2">
                  {bedroomOptions.map((n) => (
                    <button
                      key={n}
                      onClick={() => setBedrooms(n)}
                      className={`flex-1 py-2 rounded-lg border 
                  ${bedrooms === n ? "bg-blue-600 text-white" : "bg-gray-100"}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label>Living floor</label>
                <input
                  type="number"
                  placeholder="e.g. 2"
                  className="w-full h-[45px] rounded-lg px-3 py-3 "
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
