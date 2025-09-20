import Pill from "./Pill";
import React from "react";

export default function ThicknessSelector({
  selectedMaterial,
  materialMap,
  selectedThickness,
  setSelectedThickness,
  nodeHasThicknessChoices,
}: any) {
  if (
    !selectedMaterial ||
    !nodeHasThicknessChoices(materialMap[selectedMaterial])
  )
    return null;
  return (
    <section className="mt-6">
      <h3 className="text-sm font-semibold mb-2">ნაბიჯი 4 — სისქე</h3>
      <div className="flex flex-wrap gap-2">
        {Object.keys(materialMap[selectedMaterial] || {}).map((th) => (
          <Pill
            key={th}
            active={selectedThickness === th}
            onClick={() => setSelectedThickness(th)}
          >
            {th}
          </Pill>
        ))}
      </div>
    </section>
  );
}
