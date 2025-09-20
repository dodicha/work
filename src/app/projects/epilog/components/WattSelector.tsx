import Pill from "./Pill";
import React from "react";

export default function WattSelector({
  machineNode,
  wattMap,
  selectedWatt,
  setSelectedWatt,
  setSelectedOperation,
  setSelectedMaterial,
  setSelectedThickness,
}: any) {
  if (!machineNode) return null;
  return (
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
  );
}
