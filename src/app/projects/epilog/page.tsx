"use client";

import React, { useMemo, useState, useEffect } from "react";
import MachineDetails from "./components/MachineDetails";
import MachineList from "./components/MachineList";
import MaterialSelector from "./components/MaterialSelector";
import OperationSelector from "./components/OperationSelector";
import ParamsTable from "./components/ParamsTable";
import WattSelector from "./components/WattSelector";
import ThicknessSelector from "./components/Thickness.Selector";

const MACHINE_DESCRIPTIONS: Record<string, string> = {
  "Fusion Edge":
    "კომპაქტური და სწრაფი CO₂ სისტემა სამუშაოებისთვის, სადაც მნიშვნელოვანია სიმკვეთრე და საიმედოობა. იდეალურია ყოველდღიური გრივირებისა და სუფთა ჭრისთვის მცირე/საშუალო რაოდენობებზე.",
  "Fusion M2":
    "მრავალფუნქციური პლატფორმა ფართო საწარმოო ამოცანებისთვის. უზრუნველყოფს სტაბილურობას, გრძელვადიან სესიებს და მაღალი ხარისხის შედეგებს სხვადასხვა მასალაზე.",
  "Fiber mark":
    "ფაიბერული ლაზერი მეტალებისა და გარკვეული პლასტმასებისთვის—სწრაფი მარკირება, სერიალიზაცია და ინდუსტრიული ნიშნები მაქსიმალური სიზუსტით.",
  "Fusion Maker":
    "მარტივად სამართავი, ჰობი და მცირე ბიზნესი-დონეზე მორგებული მოწყობილობა. კომფორტული სწავლებისთვის და ყოველდღიური პროექტებისთვის მაღალი კონტროლით.",
  "Fusion Pro":
    "მაღალი წარმადობის პროფესიონალური სისტემა სწრაფი სამუშაო ნაკადებისთვის. განკუთვნილია დიდი ფორმატებისა და რთული დეტალების სწრაფად დასამუშავებლად.",
  "Fusion Galvo":
    "გალვო-სისტემის ლაზერი მაღალი სიჩქარისთვის. განკუთვნილია მეტალებზე და პლასტმასებზე მარკირებისა და ინდუსტრიული ნიშნების ძალიან სწრაფად დასადებად, დიდი სიზუსტით და გამძლეობით.",
  "Epilog Legend":
    "ლეგენდარული სერია, უნივერსალური დანადგარი მრავალფეროვანი ამოცანებისთვის. უზრუნველყოფს როგორც ჭრას, ისე გრავირებას სხვადასხვა მასალაზე, გამორჩეული საიმედოობითა და მაღალი ხარისხის შედეგით.",
  "Epilog Zing":
    "ზინგ სერია — კომპაქტური და ხელმისაწვდომი მოწყობილობა. იდეალურია დამწყები მომხმარებლებისთვის და მცირე სამუშაოებისთვის, სადაც მნიშვნელოვანია მარტივი მართვა და ეფექტური შედეგები.",
};

const capitalize = (s: string) =>
  s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

const get = (obj: any, key: string) =>
  obj?.[key] ?? obj?.[key.toLowerCase()] ?? obj?.[capitalize(key)];

function getMaterials(opNode: any) {
  return get(opNode, "Materials") || get(opNode, "materials") || {};
}

function nodeHasThicknessChoices(node: any) {
  if (!node || typeof node !== "object") return false;
  const keys = Object.keys(node);
  const paramKeys = [
    "DPI",
    "dpi",
    "Speed",
    "speed",
    "Power",
    "power",
    "Frequency",
    "frequency",
    "focus",
  ];
  const hasParam = keys.some((k) => paramKeys.includes(k));
  return !hasParam;
}

export default function Page() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/epilogSetups.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const machines = get(data, "machines") || {};
  const machineList = useMemo(() => {
    return Object.entries(machines).map(([name, node]: any) => ({
      name,
      node: {
        description: node.description || MACHINE_DESCRIPTIONS[name] || "",
        ...node,
      },
    }));
  }, [machines]);

  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
  const [selectedWatt, setSelectedWatt] = useState<string | null>(null);
  const [selectedOperation, setSelectedOperation] = useState<string | null>(
    null
  );
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedThickness, setSelectedThickness] = useState<string | null>(
    null
  );

  const machineNode = useMemo(() => {
    return machineList.find((m) => m.name === selectedMachine)?.node;
  }, [machineList, selectedMachine]);

  const wattMap: Record<string, any> = machineNode
    ? get(machineNode, "Watt") || {}
    : {};
  const operationMap: Record<string, any> = useMemo(() => {
    if (!selectedWatt) return {};
    const w = wattMap[selectedWatt];
    return w ? get(w, "operations") || {} : {};
  }, [wattMap, selectedWatt]);

  const materialMap: Record<string, any> = useMemo(() => {
    if (!selectedOperation) return {};
    const opNode = operationMap[selectedOperation];
    return getMaterials(opNode);
  }, [operationMap, selectedOperation]);

  const paramsNode: any = useMemo(() => {
    if (!selectedMaterial) return null;
    const matNode = materialMap[selectedMaterial];
    if (!matNode) return null;
    if (nodeHasThicknessChoices(matNode)) {
      if (!selectedThickness) return null;
      return matNode[selectedThickness];
    }
    return matNode;
  }, [materialMap, selectedMaterial, selectedThickness]);

  if (!data) return <div className="p-6">Loading…</div>;

  return (
    <div className="w-screen h-screen bg-neutral-50 text-neutral-900 overflow-hidden">
      <div className="w-full h-full grid grid-cols-[320px_1fr]">
        <MachineList
          machineList={machineList}
          selectedMachine={selectedMachine}
          setSelectedMachine={setSelectedMachine}
          setSelectedWatt={setSelectedWatt}
          setSelectedOperation={setSelectedOperation}
          setSelectedMaterial={setSelectedMaterial}
          setSelectedThickness={setSelectedThickness}
        />
        <main className="relative h-full overflow-y-auto">
          <div className="p-6">
            <MachineDetails
              machineNode={machineNode}
              selectedMachine={selectedMachine}
            />
            <WattSelector
              machineNode={machineNode}
              wattMap={wattMap}
              selectedWatt={selectedWatt}
              setSelectedWatt={setSelectedWatt}
              setSelectedOperation={setSelectedOperation}
              setSelectedMaterial={setSelectedMaterial}
              setSelectedThickness={setSelectedThickness}
            />
            <OperationSelector
              selectedWatt={selectedWatt}
              operationMap={operationMap}
              selectedOperation={selectedOperation}
              setSelectedOperation={setSelectedOperation}
              setSelectedMaterial={setSelectedMaterial}
              setSelectedThickness={setSelectedThickness}
            />
            <MaterialSelector
              selectedOperation={selectedOperation}
              materialMap={materialMap}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={setSelectedMaterial}
              setSelectedThickness={setSelectedThickness}
            />
            <ThicknessSelector
              selectedMaterial={selectedMaterial}
              materialMap={materialMap}
              selectedThickness={selectedThickness}
              setSelectedThickness={setSelectedThickness}
              nodeHasThicknessChoices={nodeHasThicknessChoices}
            />
            <ParamsTable paramsNode={paramsNode} />
          </div>
        </main>
      </div>
    </div>
  );
}

// const selectMachine = machines.map((machine, index) => {
//   return (
//     <div key={index} className="m-[10px]">
//       <div
//         className="sm:flex flex-col w-[280px] h-[100px] bg-gray-600 text-center cursor-pointer"
//         onClick={() => toggleIndex(machine)}
//       >
//         {machine}
//       </div>

//       <div
//         className={`sm:w-[280px] h-[100px] bg-slate-200 text-center transition-all duration-300 ${
//           activeIndexes.includes(machine) ? "block" : "hidden"
//         }`}
//       ></div>
//     </div>
//   );
// });
