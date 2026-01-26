"use client";

import { useState } from "react";
import Select from "react-select";

import {
  MapPin,
  LineChart,
  Paintbrush,
  ChevronDown,
  Maximize2,
} from "lucide-react";
// import { ViberButton, WhatsappButton } from "./Contact";
import dynamic from "next/dynamic";

const ViberButton = dynamic(() => import("./buttons/ViberButton"), {
  ssr: false,
});

const WhatsappButton = dynamic(() => import("./buttons/WhatsappButton"), {
  ssr: false,
});

const RoomOptions = [1, 2, 3, 4, 5];
const buildingOptions = ["Apartment"];
const condition = [
  "Needs Renovation",
  "Fully Renovated",
  "In Average Condition",
];
const districtsList = [
  "მუხიანი",
  "გლდანი",
  "ავჭალა",
  "თემქა",
  "სანზონა",
  "ნაძალადევი",
  "დიდუბე",
  "ჩუღურეთი",
  "ავლაბარი",
  "ლოტკინი",
  "სამგორი",
  "ისანი",
  "ვაზისუბანი",
  "ვარკეთილი",
  "აფრიკა",
  "ლილო",
  "ორხევი",
  "დიღომი 7",
  "დიდი დიღომი",
  "დიღმის მასივი",
  "სოფელ დიღომი",
  "ვაშლიჯვარი",
  "ნუცუბიძის პლატო",
  "საბურთალო",
  "ვაკე",
  "ვერა",
  "მუხმთაწმინდაიანი",
  "სოლოლაკი",
  "ორთაჭალა",
  "ფონიჭალა",
];

const propertyDiscriptionOptions = [
  "district",
  "condition",
  "Area Size",
  "calculate",
];

const districtOptions = districtsList.map((d) => ({
  value: d,
  label: d,
}));

const conditionOptions = condition.map((c) => ({
  value: c,
  label: c,
}));

const valuationBarIcons = [
  <MapPin className="w-5 h-5 text-blue-500" />,
  <Paintbrush className="w-5 h-5 text-blue-500" />,
  <Maximize2 className="w-5 h-5 text-blue-500" />,
  <LineChart className="w-5 h-5 text-blue-500" />,
];

export default function FastValuation() {
  const [activeDistrict, setActiveDistrict] = useState(false);
  const [activeCondition, setActiveCondition] = useState(false);

  const [district, setDistrict] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [condition, setCondition] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [areaSize, setAreaSize] = useState("");

  const handleCalculate = () => {
    console.log({
      district,
      condition,
      areaSize,
    });
  };
  // const valuationBar = propertyDiscriptionOptions.map((item, index) => {
  //   return (
  //     <div
  //       key={index}
  //       className={`flex cursor-pointer w-[25%] m-auto gap-4 border-r p-2 ${index === 3 ? "bg-blue-500 text-white border-2xl rounded-2xl" : ""}`}
  //       onClick={() => {
  //         index === 0
  //           ? setActiveDistrict(!activeDistrict)
  //           : index === 1 && setActiveCondition(!activeCondition);
  //       }}
  //     >
  //       <div>{valuationBarIcons[index]}</div>
  //       <div>{item}</div>
  //       <div>
  //         <ChevronDown
  //           className={index === 2 || index === 3 ? "hidden" : "block"}
  //         />
  //       </div>
  //     </div>
  //   );
  // });

  return (
    // <div className="lg:w-5/6  lg:bg-slate-300 lg:rounded-3xl text-center m-auto flex flex-col  my-4 py-4">
    //   <h1 className="text-2xl  m-auto">Quickly evaluate your apartment</h1>

    //   <div className="flex flex-wrap m-auto mt-8 w-11/12 bg-white rounded-md p-2">
    //     {valuationBar}
    //     <div
    //       className={`w-[25%] h-[150px] bg-black mt-4 ${activeDistrict ? "block" : "hidden"}`}
    //     ></div>
    //     <div
    //       className={`w-[25%] h-[150px] bg-red-300 ml-[25%] mt-4 ${activeCondition ? "block" : "hidden"}`}
    //     ></div>
    //   </div>
    // </div>
    <div className="w-full flex justify-center mt-10">
      <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-4xl">
        {/* District */}
        <div className="flex-1 border-r px-3 py-2">
          <Select
            options={districtOptions}
            placeholder="District"
            value={district}
            onChange={setDistrict}
            className="text-sm"
            styles={{
              control: (base) => ({
                ...base,
                border: "none",
                boxShadow: "none",
                minHeight: "40px",
              }),
            }}
          />
        </div>

        {/* Condition */}
        <div className="flex-1 border-r px-3 py-2">
          <Select
            options={conditionOptions}
            placeholder="Condition"
            value={condition}
            onChange={setCondition}
            className="text-sm"
            styles={{
              control: (base) => ({
                ...base,
                border: "none",
                boxShadow: "none",
                minHeight: "40px",
              }),
            }}
          />
        </div>

        {/* Area Size */}
        <div className="flex-1 border-r px-3 py-2">
          <input
            type="number"
            placeholder="Area Size (m²)"
            value={areaSize}
            onChange={(e) => setAreaSize(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleCalculate}
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-3 h-full"
        >
          Calculate
        </button>
      </div>
    </div>
  );

  // const [bedrooms, setBedrooms] = useState(1);
  // const [buildingType, setBuildingType] = useState("");
  // const [activeHouse, setActiveHouse] = useState(false);
  // const [activeApartment, setActiveApartment] = useState(false);
  // const [acticeOffice, setActiveOffice] = useState(false);
  // const [activeLand, setActiveLand] = useState(false);
  // const [activeCondition, setActiveCondition] = useState("");
  // const [formCadastral, setFormCadastral] = useState("");
  // const [livingAreaEntered, setLivingAreaEntered] = useState("");
  // const [areaSizeEntered, setAreaSizeEntered] = useState("");
  // const [valuationResult, setValuationResult] = useState<{
  //   min: number;
  //   max: number;
  // } | null>(null);
  // const [loading, setLoading] = useState(false);
  // const activeBuildingType = [
  //   setActiveApartment,
  //   setActiveHouse,
  //   setActiveOffice,
  //   setActiveLand,
  // ];
  // async function getValuation() {
  //   setLoading(true);
  //   setValuationResult(null);
  //   // 🔹 ინგლისური UI → ქართული DB მნიშვნელობები
  //   const mappedCondition =
  //     activeCondition === "Needs Renovation"
  //       ? "სარემონტო"
  //       : activeCondition === "Fully Renovated"
  //         ? "გარემონტებული"
  //         : activeCondition === "In Average Condition"
  //           ? "საშუალო დონის რემონტი"
  //           : "";
  //   const mappedBuildingType =
  //     buildingType === "Apartment"
  //       ? "ბინა"
  //       : buildingType === "House"
  //         ? "სახლი"
  //         : buildingType === "Office"
  //           ? "ოფისი"
  //           : buildingType === "Land"
  //             ? "მიწა"
  //             : "";
  //   try {
  //     const res = await fetch("/api/valuation", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         cadastral: formCadastral,
  //         condition: mappedCondition,
  //         propertyType: mappedBuildingType,
  //         area: livingAreaEntered ? Number(livingAreaEntered) : null,
  //       }),
  //     });
  //     const data = await res.json();
  //     console.log("RESULT:", data);
  //     // ✅ ახალი ლოგიკა — დიაპაზონი
  //     if (data?.price_range?.min !== null && data?.price_range?.max !== null) {
  //       setValuationResult({
  //         min: data.price_range.min,
  //         max: data.price_range.max,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("UI ERROR:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // return (
  //   <div className="mt-10  text-center md:w-1/2 md:mt-0 lg:w-1/2 lg:m-auto ">
  //     <h2 className="font-semibold text-2xl mb-2">
  //       Instant Property Valuation
  //     </h2>
  //     <div className="w-full rounded-xl py-4 px-4 text-left bg-slate-300">
  //       <h1 className="mb-[15px] font-semibold">Enter Property Details</h1>
  //       {/* PROPERTY TYPE */}
  //       <div className="mb-4">
  //         <label className="block mb-1 font-sm">Property Type</label>
  //         <div className="flex flex-wrap gap-2">
  //           {buildingOptions.map((n, index) => (
  //             <button
  //               key={n}
  //               onClick={() => {
  //                 setActiveCondition("");
  //                 setBuildingType(n);
  //                 activeBuildingType[index](true);
  //                 activeBuildingType.forEach((fn, i) => {
  //                   if (i !== index) fn(false);
  //                 });
  //               }}
  //               className={`w-[45%] py-2 rounded-lg border
  //                 ${
  //                   buildingType === n
  //                     ? "bg-blue-600 text-white"
  //                     : "bg-gray-100"
  //                 }`}
  //             >
  //               {n}
  //             </button>
  //           ))}
  //         </div>
  //       </div>
  //       {/* ADDRESS */}
  //       <div className="mb-4">
  //         <label className="block mb-1 font-sm">Address</label>
  //         <input
  //           type="text"
  //           placeholder="Your Property Address or Cadastral Code"
  //           value={formCadastral}
  //           onChange={(e) => setFormCadastral(e.target.value)}
  //           className="w-full h-[45px] rounded-lg px-2 py-3 placeholder:text-xs"
  //         />
  //       </div>
  //       {/* CONDITION */}
  //       <div
  //         className={`mb-4 ${
  //           activeApartment || activeHouse || acticeOffice ? "block" : "hidden"
  //         }`}
  //       >
  //         <label className="block mb-2 font-sm">Condition</label>
  //         <div className="flex flex-wrap gap-2">
  //           {mdgomareoba.map((n) => (
  //             <button
  //               key={n}
  //               onClick={() => setActiveCondition(n)}
  //               className={`w-[45%] py-2 rounded-lg border
  //                 ${
  //                   activeCondition === n
  //                     ? "bg-blue-600 text-white"
  //                     : "bg-gray-100"
  //                 }`}
  //             >
  //               {n}
  //             </button>
  //           ))}
  //         </div>
  //       </div>
  //       {/* ROOMS */}
  //       <div
  //         className={`mb-4 ${
  //           activeApartment || activeHouse ? "block" : "hidden"
  //         }`}
  //       >
  //         <label className="block mb-2 font-sm">Rooms</label>
  //         <div className="flex gap-2">
  //           {RoomOptions.map((n) => (
  //             <button
  //               key={n}
  //               onClick={() => setBedrooms(n)}
  //               className={`flex-1 py-2 rounded-lg border
  //                 ${bedrooms === n ? "bg-blue-600 text-white" : "bg-gray-100"}`}
  //             >
  //               {n}
  //             </button>
  //           ))}
  //         </div>
  //       </div>
  //       {/* LIVING AREA */}
  //       <div
  //         className={`mb-4 ${
  //           activeApartment || activeHouse || acticeOffice ? "block" : "hidden"
  //         }`}
  //       >
  //         <label className="block mb-1 font-sm">Living Area (sq ft)</label>
  //         <input
  //           type="number"
  //           min="0"
  //           placeholder="e.g. 1500"
  //           value={livingAreaEntered}
  //           onChange={(e) => setLivingAreaEntered(e.target.value)}
  //           className="rounded-lg h-[44px] px-3 py-3 placeholder:text-xs"
  //         />
  //       </div>
  //       <div
  //         className={`mb-4 ${activeHouse || activeLand ? "block" : "hidden"}`}
  //       >
  //         <label className="block mb-1 font-sm">Area Size (sq ft)</label>
  //         <input
  //           type="number"
  //           min="0"
  //           placeholder="e.g. 1500"
  //           value={areaSizeEntered}
  //           onChange={(e) => setAreaSizeEntered(e.target.value)}
  //           className="rounded-lg h-[44px] px-3 py-3 placeholder:text-xs"
  //         />
  //       </div>
  //       <button
  //         onClick={getValuation}
  //         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
  //       >
  //         Get Valuation
  //       </button>
  //       <p className="text-xs text-gray-500 mt-4 text-center">
  //         This is an estimated value for informational purposes only.
  //       </p>
  //     </div>
  //     {loading && (
  //       <p className="text-center mt-4 text-blue-600 font-semibold">
  //         Calculating valuation...
  //       </p>
  //     )}
  //     {valuationResult && (
  //       <div className="mt-6 p-4 bg-blue-50 border border-blue-300 rounded-lg">
  //         <h3 className="text-xl font-semibold text-blue-700">
  //           Estimated Market Value
  //         </h3>
  //         <p className="text-3xl font-bold text-blue-900 mt-2">
  //           $ {Number(valuationResult.min).toLocaleString()} –{" "}
  //           {Number(valuationResult.max).toLocaleString()}
  //         </p>
  //         <div className="mt-6">
  //           <AlertTriangle className="inline-block ml-2 text-red-700" />
  //           <p className="mt-4 text-sm text-gray-700 leading-relaxed">
  //             აღნიშნული ღირებულება არის
  //             <span className="font-semibold"> სავარაუდო და არაოფიციალური</span>
  //             . ქონების რეალური საბაზრო ღირებულების დასადგენად მნიშვნელოვანია
  //             მრავალი დამატებითი ფაქტორი.
  //             <br />
  //             <span className="font-medium text-gray-800">
  //               ოფიციალური შეფასების დასკვნის მისაღებად გთხოვთ, დაუკავშირდეთ
  //               ჩვენს ექსპერტებს.
  //             </span>
  //           </p>
  //           <div className="flex mt-6 justify-center gap-10">
  //             <ViberButton />
  //             <WhatsappButton />
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}
