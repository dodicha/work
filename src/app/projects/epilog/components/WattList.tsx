interface Props {
  watts: string[];
  isActive: boolean;
  activeWatt: string;
  setActiveWatt: (w: string) => void;
  resetOperation: () => void;
  resetMaterial: () => void;
}

export default function WattList({
  watts,
  isActive,
  activeWatt,
  setActiveWatt,
  resetOperation,
  resetMaterial,
}: Props) {
  return (
    <div className="flex flex-wrap">
      {watts.map((watt, idx) => (
        <div
          key={idx}
          className={`sm:rounded-md m-[5px] p-[15px] cursor-pointer ${
            isActive ? "block" : "hidden"
          } ${activeWatt === watt ? "bg-slate-400" : "bg-gray-300"}`}
          onClick={() => {
            resetOperation();
            resetMaterial();
            setActiveWatt(activeWatt === watt ? "" : watt);
          }}
        >
          {watt}
        </div>
      ))}
    </div>
  );
}
