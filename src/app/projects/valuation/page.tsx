"use client";

import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";
import LanguageProvider from "./context/LanguageProvider";
import TrustSection from "./components/TrustSection";
import FastValuation from "./components/FastValuation";
import Questions from "./components/Questions";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Select from "react-select";
import type { FeatureCollection, Geometry } from "geojson";

const TbilisiMap = dynamic(() => import("./components/TbilisiMap"), {
  ssr: false,
});

type DistrictData = {
  name: string;
  priceLevel: "high" | "medium" | "low";
  avgPrice: number;
};

type DistrictProps = {
  name: string;
  priceLevel: "high" | "medium" | "low";
  avgPrice: number;
};

export default function Page() {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection<
    Geometry,
    DistrictProps
  > | null>(null);

  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const districtData: DistrictData[] = [
    { name: "ვაკე", priceLevel: "high", avgPrice: 3000 },
    { name: "საბურთალო", priceLevel: "medium", avgPrice: 2000 },
    { name: "გლდანი", priceLevel: "low", avgPrice: 1200 },
  ];

  useEffect(() => {
    fetch("/data/tbilisi_districts.geojson")
      .then((res) => res.json())
      .then((data: FeatureCollection<Geometry, DistrictProps>) => {
        setGeoJsonData(data);
      });
  }, []);

  const options = districtData.map((d) => ({
    value: d.name,
    label: d.name,
  }));

  if (!geoJsonData) return <p>იტვირთება რუკა...</p>;

  return (
    <LanguageProvider>
      <div className="w-full  ">
        <NavBar />
        <HomeSlider />
        <div className="flex justify-center">
          <FastValuation />
        </div>
        <div className="flex flex-col p-4  mt-[15px] md:flex-row md:p-8 lg:m-auto lg:ml-[80px]  lg:gap-10">
          <TrustSection />
          <Questions />
        </div>

        <div className="p-6 grid grid-cols-2 gap-6">
          {/* მარცხენა მხარე */}
          <div>
            <Select
              options={options}
              placeholder="აირჩიე უბანი"
              onChange={(opt) => setSelectedDistrict(opt?.value ?? null)}
            />

            {selectedDistrict && (
              <div className="mt-4 p-4 border rounded-lg">
                <h2 className="font-bold text-lg">{selectedDistrict}</h2>
                <p>
                  საშუალო ფასი:{" "}
                  {
                    districtData.find((d) => d.name === selectedDistrict)
                      ?.avgPrice
                  }{" "}
                  $
                </p>
              </div>
            )}
          </div>

          {/* მარჯვენა მხარე */}
          <TbilisiMap
            selectedDistrict={selectedDistrict}
            onSelectDistrict={setSelectedDistrict}
            data={districtData}
            geoJsonData={geoJsonData}
          />
        </div>
      </div>
      {/* Define geoJsonData before using it */}
    </LanguageProvider>
  );
}
