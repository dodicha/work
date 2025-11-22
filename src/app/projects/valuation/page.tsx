"use client";

import React, { useState } from "react";
import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";
import TrustSection from "./components/TrustSection";

// telegrami gasakeTebelia

const bedroomOptions = [1, 2, 3, 4, 5];
const buildingOptions = ["Apartment", "House", "Office", "Land"];

export default function page() {
  const [bedrooms, setBedrooms] = useState(1);
  const [buildingType, setBuildingType] = useState("");
  const [activeHouse, setActiveHouse] = useState(false);
  const [activeApartment, setActiveApartment] = useState(false);
  const [acticeOffice, setActiveOffice] = useState(false);
  const [activeLand, setActiveLand] = useState(false);
  const [activeAddress, setActiveAddress] = useState(false);
  const [activeBedrooms, setActiveBedrooms] = useState(false);
  const [activeLivingArea, setActiveLivingArea] = useState(false);
  const [activeLivingFloor, setActiveLivingFloor] = useState(false);
  const activeType = [
    setActiveApartment,
    setActiveHouse,
    setActiveOffice,
    setActiveLand,
  ];
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
              <div className="flex gap-6 mb-4">
                <div className="w-1/2 flex-1">
                  <label className="block mb-1 font-sm">Property Type</label>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-2">
                  {buildingOptions.map((n, index) => (
                    <button
                      key={n}
                      onClick={() => {
                        setBuildingType(n);
                        activeType[index](true);
                        activeType.map((n, i) => {
                          if (i !== index) {
                            n(false);
                          }
                        });
                      }}
                      className={`flex-1 py-2 rounded-lg border 
                  ${
                    buildingType === n
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4 ">
                <label className="block mb-1 font-sm">Address</label>
                <input
                  type="text"
                  placeholder="Your Property Address"
                  className="w-full h-[45px] rounded-lg px-2 py-3 focus:ring-2 focus:ring-blue-500 placeholder:text-xs"
                ></input>
              </div>

              <div
                className={`mb-4 ${
                  activeApartment || activeHouse ? "block" : "hidden"
                }`}
              >
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
              <div
                className={`flex-1 mb-4 ${
                  activeApartment || activeHouse || acticeOffice
                    ? "block"
                    : "hidden"
                }`}
              >
                <label className="block mb-1 font-sm">
                  Living Area (sq ft)
                </label>
                <input
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    // არ მივცეთ "-" ჩაწერის უფლება
                    const input = e.currentTarget;
                    if (input.value.includes("-")) {
                      input.value = input.value.replace(/-/g, "");
                    }

                    // თუ 0-ზე ნაკლებია → გაუქმდეს
                    if (Number(input.value) < 0) {
                      input.value = "0";
                    }
                  }}
                  min="0"
                  type="number"
                  placeholder="e.g. 1500"
                  className=" rounded-lg h-[44px] px-3 py-3 placeholder:text-xs"
                />
              </div>
              <div
                className={`mb-4 ${
                  activeApartment || acticeOffice ? "block" : "hidden"
                }`}
              >
                <label>Living floor</label>
                <input
                  min="1"
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    // არ მივცეთ "-" ჩაწერის უფლება
                    const input = e.currentTarget;
                    if (input.value.includes("-")) {
                      input.value = input.value.replace(/-/g, "");
                    }

                    // თუ 0-ზე ნაკლებია → გაუქმდეს
                    if (Number(input.value) < 0) {
                      input.value = "0";
                    }
                  }}
                  type="number"
                  placeholder="e.g. 2"
                  className="w-full h-[45px] rounded-lg px-3 py-3 placeholder:text-xs"
                ></input>
              </div>
              <div className={`flex-1 mb-4 ${activeLand ? "block" : "hidden"}`}>
                <label className="block mb-1 font-sm">Area Size (sq ft)</label>
                <input
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    // არ მივცეთ "-" ჩაწერის უფლება
                    const input = e.currentTarget;
                    if (input.value.includes("-")) {
                      input.value = input.value.replace(/-/g, "");
                    }

                    // თუ 0-ზე ნაკლებია → გაუქმდეს
                    if (Number(input.value) < 0) {
                      input.value = "0";
                    }
                  }}
                  min="0"
                  type="number"
                  placeholder="e.g. 1500"
                  className=" rounded-lg h-[44px] px-3 py-3 placeholder:text-xs"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition ">
                Get Valuation
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                This is an estimated value for informational purposes only and
                should not be considered an official appraisal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

{
  /* <div className="mb-4">
  <label className="block mb-1 font-sm">Address</label>
  <input
    type="text"
    placeholder="Your Property Address"
    className="w-full h-[45px] rounded-lg px-2 py-3 focus:ring-2 focus:ring-blue-500 placeholder:text-xs"
  ></input>
</div>; */
}
