"use client";

import React, { useState } from "react";

const RoomOptions = [1, 2, 3, 4, 5];
const buildingOptions = ["Apartment", "House", "Office", "Land"];
const mdgomareoba = [
  "Needs Renovation",
  "Fully Renovated",
  "In Average Condition",
];

export default function FastValuation() {
  const [bedrooms, setBedrooms] = useState(1);
  const [buildingType, setBuildingType] = useState("");
  const [activeHouse, setActiveHouse] = useState(false);
  const [activeApartment, setActiveApartment] = useState(false);
  const [acticeOffice, setActiveOffice] = useState(false);
  const [activeLand, setActiveLand] = useState(false);

  const [activeCondition, setActiveCondition] = useState("");
  const [formCadastral, setFormCadastral] = useState("");
  const [livingAreaEntered, setLivingAreaEntered] = useState("");
  const [areaSizeEntered, setAreaSizeEntered] = useState("");

  const [valuationResult, setValuationResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const activeBuildingType = [
    setActiveApartment,
    setActiveHouse,
    setActiveOffice,
    setActiveLand,
  ];

  async function getValuation() {
    setLoading(true);
    setValuationResult(null);

    // 🔹 ინგლისური UI → ქართული DB მნიშვნელობები
    const mappedCondition =
      activeCondition === "Needs Renovation"
        ? "სარემონტო"
        : activeCondition === "Fully Renovated"
        ? "გარემონტებული"
        : activeCondition === "In Average Condition"
        ? "საშუალო დონის რემონტი"
        : "";

    const mappedBuildingType =
      buildingType === "Apartment"
        ? "ბინა"
        : buildingType === "House"
        ? "სახლი"
        : buildingType === "Office"
        ? "ოფისი"
        : buildingType === "Land"
        ? "მიწა"
        : "";

    const res = await fetch("/api/valuation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cadastral: formCadastral,
        condition: mappedCondition,
        propertyType: mappedBuildingType,
        area: livingAreaEntered ? Number(livingAreaEntered) : null,
      }),
    });

    const data = await res.json();
    console.log("RESULT:", data);

    if (data?.avg_price !== null && data?.avg_price !== undefined) {
      setValuationResult(data.avg_price);
    }

    setLoading(false);
  }

  return (
    <div className=" mt-10  text-center md:w-1/2 md:mt-0 lg:w-2/5 ">
      <h2 className="font-semibold text-2xl mb-2">
        Instant Property Valuation
      </h2>

      <div className="w-full rounded-xl py-4 px-4 text-left bg-slate-200">
        <h1 className="mb-[15px] font-semibold">Enter Property Details</h1>

        {/* PROPERTY TYPE */}
        <div className="mb-4">
          <label className="block mb-1 font-sm">Property Type</label>
          <div className="flex flex-wrap gap-2">
            {buildingOptions.map((n, index) => (
              <button
                key={n}
                onClick={() => {
                  setActiveCondition("");
                  setBuildingType(n);
                  activeBuildingType[index](true);
                  activeBuildingType.forEach((fn, i) => {
                    if (i !== index) fn(false);
                  });
                }}
                className={`w-[45%] py-2 rounded-lg border
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

        {/* ADDRESS */}
        <div className="mb-4">
          <label className="block mb-1 font-sm">Address</label>
          <input
            type="text"
            placeholder="Your Property Address or Cadastral Code"
            value={formCadastral}
            onChange={(e) => setFormCadastral(e.target.value)}
            className="w-full h-[45px] rounded-lg px-2 py-3 placeholder:text-xs"
          />
        </div>

        {/* CONDITION */}
        <div
          className={`mb-4 ${
            activeApartment || activeHouse || acticeOffice ? "block" : "hidden"
          }`}
        >
          <label className="block mb-2 font-sm">Condition</label>
          <div className="flex flex-wrap gap-2">
            {mdgomareoba.map((n) => (
              <button
                key={n}
                onClick={() => setActiveCondition(n)}
                className={`w-[45%] py-2 rounded-lg border
                  ${
                    activeCondition === n
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* ROOMS */}
        <div
          className={`mb-4 ${
            activeApartment || activeHouse ? "block" : "hidden"
          }`}
        >
          <label className="block mb-2 font-sm">Rooms</label>
          <div className="flex gap-2">
            {RoomOptions.map((n) => (
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

        {/* LIVING AREA */}
        <div
          className={`mb-4 ${
            activeApartment || activeHouse || acticeOffice ? "block" : "hidden"
          }`}
        >
          <label className="block mb-1 font-sm">Living Area (sq ft)</label>
          <input
            type="number"
            min="0"
            placeholder="e.g. 1500"
            value={livingAreaEntered}
            onChange={(e) => setLivingAreaEntered(e.target.value)}
            className="rounded-lg h-[44px] px-3 py-3 placeholder:text-xs"
          />
        </div>

        <div
          className={`mb-4 ${activeHouse || activeLand ? "block" : "hidden"}`}
        >
          <label className="block mb-1 font-sm">Area Size (sq ft)</label>
          <input
            type="number"
            min="0"
            placeholder="e.g. 1500"
            value={areaSizeEntered}
            onChange={(e) => setAreaSizeEntered(e.target.value)}
            className="rounded-lg h-[44px] px-3 py-3 placeholder:text-xs"
          />
        </div>

        <button
          onClick={getValuation}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Get Valuation
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          This is an estimated value for informational purposes only.
        </p>
      </div>

      {loading && (
        <p className="text-center mt-4 text-blue-600 font-semibold">
          Calculating valuation...
        </p>
      )}

      {valuationResult !== null && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-300 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700">
            Estimated Market Value
          </h3>
          <p className="text-3xl font-bold text-blue-900 mt-2">
            $ {valuationResult.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}
