interface Props {
  materials: string[];
  isActive: boolean;
  activeMaterial: string;
  setActiveMaterial: (m: string) => void;
}

export default function MaterialList({
  materials,
  isActive,
  activeMaterial,
  setActiveMaterial,
}: Props) {
  return (
    <div className="flex flex-wrap">
      {materials.map((material, idx) => (
        <div
          key={idx}
          className={`rounded-md m-[5px] p-[15px] cursor-pointer ${
            isActive ? "block" : "hidden"
          } ${activeMaterial === material ? "bg-slate-400" : "bg-gray-300"}`}
          onClick={() => {
            setActiveMaterial(activeMaterial === material ? "" : material);
          }}
        >
          {material}
        </div>
      ))}
    </div>
  );
}
