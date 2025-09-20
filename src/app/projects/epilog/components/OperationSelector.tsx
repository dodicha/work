import Pill from "./Pill";
import React from "react";

export default function OperationSelector({
  selectedWatt,
  operationMap,
  selectedOperation,
  setSelectedOperation,
  setSelectedMaterial,
  setSelectedThickness,
}: any) {
  if (!selectedWatt) return null;
  return (
    <section className="mt-6">
      <h3 className="text-sm font-semibold mb-2">ნაბიჯი 2 — ოპერაცია</h3>
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
  );
}
