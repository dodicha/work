"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import RippleButton from "./buttons/RippleButton";
import {
  MapPinHouse,
  Hammer,
  Ruler,
  BadgeCheck,
  Receipt,
  ShieldAlert,
  Landmark,
} from "lucide-react";
import ViberButton from "./buttons/ViberButton";
import WhatsappButton from "./buttons/WhatsappButton";

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
  "მთაწმინდა",
  "სოლოლაკი",
  "ორთაჭალა",
  "ფონიჭალა",
];

const districtOptions = districtsList.map((d) => ({
  value: d,
  label: d,
}));

const conditionOptions = condition.map((c) => ({
  value: c,
  label: c,
}));

export default function FastValuation() {
  const [data, setData] = useState(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [fastValuationResult, setFastValuationResult] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/tbilisiDistrictsData.json");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  const calculatePrice = (
    district: string,
    condition: string,
    area: number,
  ) => {
    const minPrice =
      data?.[district][2025]?.["apartment"]?.[condition]?.["min"];
    const maxPrice =
      data?.[district][2025]?.["apartment"]?.[condition]?.["max"];
    let minimum: number | null = null;
    let maximum: number | null = null;
    if (minPrice && maxPrice) {
      minimum = minPrice * area;
      maximum = maxPrice * area;
    }
    setMinPrice(minimum);
    setMaxPrice(maximum);
  };

  // const [minValuationPrice, maxValuationPrice] = calculatePrice();

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
    console.log(data);
    if (district && condition && areaSize) {
      calculatePrice(district.value, condition.value, parseFloat(areaSize));
      setFastValuationResult(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 bg-slate-300 p-6">
      <div className="text-4xl text-left w-11/12">
        <p className="lg:font-semibold lg:text-3xl leading-normal text-sm">
          Find out the approximate market value <br></br> of your property
        </p>
      </div>
      <div className="flex lg:items-center  p-4 bg-slate-100 rounded-lg  flex-wrap  gap-2 lg:justify-between  lg:w-11/12 lg:px-16 mt-6">
        {/* District */}
        <div className="flex flex-row px-3 py-2 gap-4">
          <MapPinHouse className="text-gray-500 m-auto" size={30} />
          <div>
            <h6 className="text-gray-500 text-sm ml-2">DISTRICT</h6>
            <Select
              options={districtOptions}
              placeholder="Select District"
              value={district}
              onChange={setDistrict}
              className="text-sm "
              styles={{
                control: (base) => ({
                  ...base,
                  border: "none",
                  boxShadow: "none",
                  minHeight: "42px",
                  width: "150px",
                  backgroundColor: "",
                }),
              }}
            />
          </div>
        </div>

        {/* Condition */}
        <div className="flex flex-row  px-3 py-2 gap-4">
          <Hammer className="text-gray-500 m-auto" size={30} />
          <div>
            <h6 className="text-gray-500 text-sm ml-2">CONDITION</h6>
            <Select
              options={conditionOptions}
              placeholder="Select Condition"
              value={condition}
              onChange={setCondition}
              className="text-sm"
              styles={{
                control: (base) => ({
                  ...base,
                  border: "none",
                  boxShadow: "none",
                  minHeight: "42px",
                  width: "200px",
                  backgroundColor: "",
                }),
              }}
            />
          </div>
        </div>

        {/* Area Size */}
        <div className="flex flex-row  border-r px-3 py-2 gap-4">
          <Ruler className="text-gray-500 m-auto" size={30} />
          <div>
            <h6 className="text-gray-500 text-sm">AREA SIZE (m²)</h6>
            <input
              type="number"
              placeholder="e.g. 130"
              value={areaSize}
              onChange={(e) => setAreaSize(e.target.value)}
              className="w-full h-[42px] rounded  outline-none text-sm bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        <div>
          <RippleButton
            onClick={handleCalculate}
            className="bg-blue-500  hover:bg-blue-600 text-white py-4 px-4 rounded-xl font-semibold transition "
          >
            Calculate Valuation
          </RippleButton>
        </div>
        {/* Button */}
      </div>
      <div
        className={`text-center mt-6 w-11/12  bg-slate-100 rounded-xl p-6 ${fastValuationResult ? "block" : "hidden"}`}
      >
        <div className="flex flex-row items-center bg-blue-300 w-fit rounded-full p-2 gap-2 text-blue-800">
          <BadgeCheck />
          <p className="font-semibold text-md text-left">Estimated Value</p>
        </div>
        <div className="flex flex-row items-center gap-1 mt-4 font-semibold text-green-800">
          <Receipt size={38} />
          <p className="text-left text-4xl">
            {minPrice} - {maxPrice}
          </p>
        </div>
        <div className="flex flex-row lg:gap-4 gap-6 items-center text-left font-mediumt w-full lg:w-1/2 mt-4">
          <ShieldAlert size={90} className="text-red-600" />
          <p className="font-semibold lg:text-lg text-md">
            The calculation is based on data from 2025 and is indicative, as
            detailed information about the property is necessary to determine
            the exact value.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between mt-10  bg-blue-200 p-4 rounded-xl border-[1px] border-blue-400">
          <div className="flex flex-row gap-4 items-center">
            <Landmark
              className="bg-white rounded-2xl p-2 text-blue-600"
              size={55}
            />
            <p className="font-medium">
              Need an exact valuation? <br></br>
              <span className="font-normal text-gray-500">
                Connect with our expert for a detailed information
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <ViberButton />
            <WhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
}
