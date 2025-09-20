import Pill from "./Pill";
import React from "react";

export default function MaterialSelector({
  selectedOperation,
  materialMap,
  selectedMaterial,
  setSelectedMaterial,
  setSelectedThickness,
}: any) {
  if (!selectedOperation) return null;
  return (
    <section className="mt-6">
      <h3 className="text-sm font-semibold mb-2">ნაბიჯი 3 — მასალა</h3>
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
  );
}
