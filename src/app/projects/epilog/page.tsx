"use client";

//   useEffect(() => {
//     async function fetchSetup() {
//       const data = await fetch("/setups.json");
//       const json = await data.json();
//       console.log(json);
//     }
//     fetchSetup();
//   }, []);

// export default function Home() {
//   const machines = [
//     { name: "Fiber Mark", image: "/images/machines/fiber-mark.jpeg" },
//     { name: "Fusion Edge", image: "/images/machines/fusion-edge.png" },
//     { name: "Fusion M2", image: "/images/machines/fusion-m2.jpg" },
//     { name: "Fusion Maker", image: "/images/machines/fusion-maker.webp" },
//     { name: "Fusion Pro", image: "/images/machines/fusion-pro.jpg" },
//     { name: "Galvo", image: "/images/machines/galvo.png" },
//     { name: "Legend", image: "/images/machines/legend.jpg" },
//     { name: "Zing", image: "/images/machines/zing.jpg" },
//   ];

//   return (
//     <main className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10">
//       <h1 className="text-3xl font-bold mb-8">Choose a Machine</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
//         {machines.map((machine) => (
//           <div
//             key={machine.name}
//             className="bg-white border rounded-2xl shadow hover:shadow-lg transition cursor-pointer p-4 flex flex-col items-center"
//           >
//             <img
//               src={machine.image}
//               alt={machine.name}
//               className="w-40 h-28 object-contain mb-4"
//             />
//             <h2 className="text-lg font-semibold text-center mb-2">
//               {machine.name}
//             </h2>
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//               Select
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

/////////////////////////////////

// "use client";
// import { useState, useEffect } from "react";

// export default function EpilogPage() {
//   const [data, setData] = useState<any>(null);
//   const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
//   const [selectedWatt, setSelectedWatt] = useState<string | null>(null);
//   const [selectedOperation, setSelectedOperation] = useState<string | null>(
//     null
//   );

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("/setups.json");
//       const json = await res.json();
//       setData(json.machines);
//     }
//     fetchData();
//   }, []);

//   if (!data) return <p className="p-4">Loading...</p>;

//   return (
//     <div className="p-6">
//       {/* Machine Selection */}
//       {!selectedMachine && (
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {Object.keys(data).map((machine) => (
//             <div
//               key={machine}
//               onClick={() => setSelectedMachine(machine)}
//               className="cursor-pointer border rounded-2xl shadow-md p-4 hover:scale-105 transition bg-white"
//             >
//               <img
//                 src={data[machine].image}
//                 alt={machine}
//                 className="w-full h-32 object-cover rounded-lg mb-2"
//               />
//               <h2 className="text-lg font-bold text-center">{machine}</h2>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Watt Selection */}
//       {selectedMachine && !selectedWatt && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Choose Watt</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {Object.keys(data[selectedMachine].Watt).map((watt) => (
//               <div
//                 key={watt}
//                 onClick={() => setSelectedWatt(watt)}
//                 className="cursor-pointer border rounded-2xl shadow-md p-4 hover:scale-105 transition bg-white"
//               >
//                 <h3 className="text-center font-semibold">{watt}</h3>
//                 <p className="text-sm text-gray-600">
//                   {data[selectedMachine].Watt[watt].description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Operation Selection */}
//       {selectedWatt && !selectedOperation && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Choose Operation</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {selectedMachine &&
//               selectedWatt &&
//               Object.keys(
//                 data[selectedMachine].Watt[selectedWatt].operations
//               ).map((operation) => (
//                 <div
//                   key={operation}
//                   onClick={() => setSelectedOperation(operation)}
//                   className="cursor-pointer border rounded-2xl shadow-md p-4 hover:scale-105 transition bg-white"
//                 >
//                   <h3 className="text-center font-semibold">{operation}</h3>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}

//       {/* Material Parameters */}
//       {selectedOperation && selectedMachine && selectedWatt && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">
//             {selectedOperation} Parameters
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {Object.entries(
//               data[selectedMachine].Watt[selectedWatt].operations[
//                 selectedOperation
//               ].Materials
//             ).map(([material, params]: any) => (
//               <div
//                 key={material}
//                 className="border rounded-2xl shadow-md p-4 bg-white"
//               >
//                 <h3 className="text-lg font-semibold mb-2">{material}</h3>
//                 <ul className="text-sm text-gray-700 space-y-1">
//                   <li>DPI: {params.DPI}</li>
//                   <li>Speed: {params.Speed}</li>
//                   <li>Power: {params.Power}</li>
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

/////////////////////////////////

"use client";

import React, { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Machine descriptions
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

// Helpers
const get = (obj: any, key: string) =>
  obj?.[key] ?? obj?.[key.toLowerCase()] ?? obj?.[capitalize(key)];
const capitalize = (s: string) =>
  s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

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

function Pill({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 border text-sm transition-all whitespace-nowrap 
        ${
          active
            ? "bg-neutral-900 text-white border-neutral-900"
            : "bg-white hover:bg-neutral-100 border-neutral-300"
        }`}
    >
      {children}
    </button>
  );
}

export default function Page() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/setups.json")
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

  const finalResult = useMemo(() => {
    if (!paramsNode) return null;
    return {
      machine: selectedMachine,
      watt: selectedWatt,
      operation: selectedOperation,
      material: selectedMaterial,
      thickness: selectedThickness,
      params: paramsNode,
    };
  }, [
    paramsNode,
    selectedMachine,
    selectedWatt,
    selectedOperation,
    selectedMaterial,
    selectedThickness,
  ]);

  if (!data) return <div className="p-6">Loading…</div>;

  return (
    <div className="w-screen h-screen bg-neutral-50 text-neutral-900 overflow-hidden">
      <div className="w-full h-full grid grid-cols-[320px_1fr]">
        {/* Left rail */}
        <aside className="h-full border-r bg-white overflow-y-auto">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">დანადგარები</h2>
            <p className="text-xs text-neutral-500 mt-1">
              აირჩიეთ მოდელი სიიდან
            </p>
          </div>
          <ul className="p-2 space-y-2">
            {machineList.map(({ name, node }) => (
              <li key={name}>
                <button
                  onClick={() => {
                    setSelectedMachine(name);
                    setSelectedWatt(null);
                    setSelectedOperation(null);
                    setSelectedMaterial(null);
                    setSelectedThickness(null);
                  }}
                  className={`w-full text-left p-3 rounded-xl transition border flex items-center gap-3 
                    ${
                      selectedMachine === name
                        ? "bg-neutral-900 text-white border-neutral-900"
                        : "bg-white hover:bg-neutral-100 border-neutral-300"
                    }`}
                >
                  <div>
                    <div className="font-medium">{name}</div>
                    <div
                      className={`text-xs ${
                        selectedMachine === name
                          ? "text-neutral-200"
                          : "text-neutral-500"
                      }`}
                    >
                      {node.description}
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="relative h-full overflow-y-auto">
          <div className="p-6">
            {/* Selected machine */}
            <AnimatePresence>
              {machineNode && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-4 max-w-xl"
                >
                  <h1 className="text-xl font-semibold">{selectedMachine}</h1>
                  <p className="text-sm text-neutral-600 mt-1">
                    {machineNode.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Watt selection */}
            {machineNode && (
              <section className="mt-6">
                <h3 className="text-sm font-semibold mb-2">
                  ნაბიჯი 1 — აირჩიეთ სიმძლავრე (Watt)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(wattMap).map((w) => (
                    <Pill
                      key={w}
                      active={selectedWatt === w}
                      onClick={() => {
                        setSelectedWatt(w);
                        setSelectedOperation(null);
                        setSelectedMaterial(null);
                        setSelectedThickness(null);
                      }}
                    >
                      {w}
                    </Pill>
                  ))}
                </div>
              </section>
            )}

            {/* Operation selection */}
            {selectedWatt && (
              <section className="mt-6">
                <h3 className="text-sm font-semibold mb-2">
                  ნაბიჯი 2 — ოპერაცია
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(operationMap).map((op) => (
                    <Pill
                      key={op}
                      active={selectedOperation === op}
                      onClick={() => {
                        setSelectedOperation(op);
                        setSelectedMaterial(null);
                        setSelectedThickness(null);
                      }}
                    >
                      {op}
                    </Pill>
                  ))}
                </div>
              </section>
            )}

            {/* Material selection */}
            {selectedOperation && (
              <section className="mt-6">
                <h3 className="text-sm font-semibold mb-2">
                  ნაბიჯი 3 — მასალა
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(materialMap).map((mat) => (
                    <Pill
                      key={mat}
                      active={selectedMaterial === mat}
                      onClick={() => {
                        setSelectedMaterial(mat);
                        setSelectedThickness(null);
                      }}
                    >
                      {mat}
                    </Pill>
                  ))}
                </div>
              </section>
            )}

            {/* Thickness */}
            {selectedMaterial &&
              nodeHasThicknessChoices(materialMap[selectedMaterial]) && (
                <section className="mt-6">
                  <h3 className="text-sm font-semibold mb-2">
                    ნაბიჯი 4 — სისქე
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(materialMap[selectedMaterial] || {}).map(
                      (th) => (
                        <Pill
                          key={th}
                          active={selectedThickness === th}
                          onClick={() => setSelectedThickness(th)}
                        >
                          {th}
                        </Pill>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* Final parameters */}
            {paramsNode && (
              <section className="mt-6">
                <h3 className="text-sm font-semibold mb-2">
                  ბოლო ნაბიჯი — პარამეტრები
                </h3>
                <table className="min-w-[480px] bg-white border border-neutral-200 rounded-xl overflow-hidden">
                  <tbody>
                    {Object.entries(paramsNode).map(([k, v]) => (
                      <tr key={k} className="border-t">
                        <td className="px-4 py-2 text-sm text-neutral-600">
                          {k}
                        </td>
                        <td className="px-4 py-2 text-sm font-medium">
                          {String(v)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
