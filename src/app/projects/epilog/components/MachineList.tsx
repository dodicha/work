import React from "react";

export default function MachineList({
  machineList,
  selectedMachine,
  setSelectedMachine,
  setSelectedWatt,
  setSelectedOperation,
  setSelectedMaterial,
  setSelectedThickness,
}: any) {
  return (
    <aside className="h-full border-r bg-white overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">დანადგარები</h2>
        <p className="text-xs text-neutral-500 mt-1">აირჩიეთ მოდელი სიიდან</p>
      </div>
      <ul className="p-2 space-y-2">
        {machineList.map(({ name, node }: any) => (
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
  );
}
