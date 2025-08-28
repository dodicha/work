"use client";

//   useEffect(() => {
//     async function fetchSetup() {
//       const data = await fetch("/setups.json");
//       const json = await data.json();
//       console.log(json);
//     }
//     fetchSetup();
//   }, []);

export default function Home() {
  const machines = [
    { name: "Fiber Mark", image: "/machines/fiber-mark.png" },
    { name: "Fusion Edge", image: "/machines/fusion-edge.png" },
    { name: "Fusion M2", image: "/machines/fusion-m2.png" },
    { name: "Fusion Maker", image: "/machines/fusion-maker.png" },
    { name: "Fusion Pro", image: "/machines/fusion-pro.png" },
    { name: "Galvo", image: "/machines/galvo.png" },
    { name: "Legend", image: "/machines/legend.png" },
    { name: "Zing", image: "/machines/zing.png" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">Choose a Machine</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {machines.map((machine) => (
          <div
            key={machine.name}
            className="bg-white border rounded-2xl shadow hover:shadow-lg transition cursor-pointer p-4 flex flex-col items-center"
          >
            <img
              src={machine.image}
              alt={machine.name}
              className="w-40 h-28 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-center mb-2">
              {machine.name}
            </h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Select
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
