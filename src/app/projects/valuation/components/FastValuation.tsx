"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import RippleButton from "./buttons/RippleButton";
import { MapPin, Hammer, Ruler } from "lucide-react";

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
    <div className="w-full flex flex-col items-center justify-center mt-10 ">
      <div className="flex items-center justify-center bg-slate-100 rounded-lg  flex-row gap-10  w-11/12 ">
        {/* District */}
        <div className="flex flex-row px-3 py-2 gap-4">
          <MapPin className="text-gray-500 m-auto" size={30} />
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

        <div className="">
          <RippleButton
            onClick={handleCalculate}
            className="bg-blue-500  hover:bg-blue-600 text-white py-4 px-4 rounded-xl font-semibold transition "
          >
            Calculate Valuation
          </RippleButton>
        </div>
        {/* Button */}
      </div>
      <div className="text-center mt-6">{valuationResult}</div>
    </div>
  );
}
