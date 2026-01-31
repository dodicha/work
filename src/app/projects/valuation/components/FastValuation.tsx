"use client";

import { useState, useEffect } from "react";
import Select from "react-select";

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
  const [valuationResult, setValuationResult] = useState<string>("");

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
    let priceRange: string = "";
    if (minPrice && maxPrice) {
      priceRange = `${minPrice * area} - ${maxPrice * area}`;
    }
    return priceRange;
  };

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
    let prise = "";
    if (district && condition && areaSize) {
      prise = calculatePrice(
        district.value,
        condition.value,
        parseFloat(areaSize),
      );
      setValuationResult(prise);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center mt-10 h-[80px]">
      <div className="flex items-center     w-full max-w-4xl">
        {/* District */}
        <div className="flex-1  px-3 py-2 ">
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
      <div className="text-center mt-6">{valuationResult}</div>
    </div>
  );
}
