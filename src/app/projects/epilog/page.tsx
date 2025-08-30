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
"use client";
import { useState, useEffect } from "react";

export default function EpilogPage() {
  const [data, setData] = useState<any>(null);
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
  const [selectedWatt, setSelectedWatt] = useState<string | null>(null);
  const [selectedOperation, setSelectedOperation] = useState<string | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/setups.json");
      const json = await res.json();
      setData(json.machines);
    }
    fetchData();
  }, []);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      {/* Machine Selection */}
      {!selectedMachine && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(data).map((machine) => (
            <div
              key={machine}
              onClick={() => setSelectedMachine(machine)}
              className="cursor-pointer border rounded-2xl shadow-md p-4 hover:scale-105 transition bg-white"
            >
              <img
                src={data[machine].image}
                alt={machine}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h2 className="text-lg font-bold text-center">{machine}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Watt Selection */}
      {selectedMachine && !selectedWatt && (
        <div>
          <h2 className="text-xl font-bold mb-4">Choose Watt</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.keys(data[selectedMachine].Watt).map((watt) => (
              <div
                key={watt}
                onClick={() => setSelectedWatt(watt)}
                className="cursor-pointer border rounded-2xl shadow-md p-4 hover:scale-105 transition bg-white"
              >
                <h3 className="text-center font-semibold">{watt}</h3>
                <p className="text-sm text-gray-600">
                  {data[selectedMachine].Watt[watt].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Operation Selection */}
      {selectedWatt && !selectedOperation && (
        <div>
          <h2 className="text-xl font-bold mb-4">Choose Operation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {selectedMachine &&
              selectedWatt &&
              Object.keys(
                data[selectedMachine].Watt[selectedWatt].operations
              ).map((operation) => (
                <div
                  key={operation}
                  onClick={() => setSelectedOperation(operation)}
                  className="cursor-pointer border rounded-2xl shadow-md p-4 hover:scale-105 transition bg-white"
                >
                  <h3 className="text-center font-semibold">{operation}</h3>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Material Parameters */}
      {selectedOperation && selectedMachine && selectedWatt && (
        <div>
          <h2 className="text-xl font-bold mb-4">Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(
              data[selectedMachine].Watt[selectedWatt].operations[
                selectedOperation
              ].Materials
            ).map(([material, params]: any) => (
              <div
                key={material}
                className="border rounded-2xl shadow-md p-4 bg-white"
              >
                <h3 className="text-lg font-semibold mb-2">{material}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>DPI: {params.DPI}</li>
                  <li>Speed: {params.Speed}</li>
                  <li>Power: {params.Power}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
