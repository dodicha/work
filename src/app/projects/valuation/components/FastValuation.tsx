"use client";

import { useState, useEffect } from "react";
import Select from "react-select";

// import { MapPin, LineChart, Paintbrush, Maximize2 } from "lucide-react";
// import { ViberButton, WhatsappButton } from "./Contact";
// import dynamic from "next/dynamic";
// import { label } from "framer-motion/client";

// const ViberButton = dynamic(() => import("./buttons/ViberButton"), {
//   ssr: false,
// });

// const WhatsappButton = dynamic(() => import("./buttons/WhatsappButton"), {
//   ssr: false,
// });

// const RoomOptions = [1, 2, 3, 4, 5];
// const buildingOptions = ["Apartment"];
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

// const propertyDiscriptionOptions = [
//   "district",
//   "condition",
//   "Area Size",
//   "calculate",
// ];

const districtOptions = districtsList.map((d) => ({
  value: d,
  label: d,
}));

const conditionOptions = condition.map((c) => ({
  value: c,
  label: c,
}));

// const valuationBarIcons = [
//   <MapPin className="w-5 h-5 text-blue-500" />,
//   <Paintbrush className="w-5 h-5 text-blue-500" />,
//   <Maximize2 className="w-5 h-5 text-blue-500" />,
//   <LineChart className="w-5 h-5 text-blue-500" />,
// ];

export default function FastValuation() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/tbilisiDistrictsData.json");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

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
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex items-center bg-black    w-full max-w-4xl">
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
    </div>
  );
}
