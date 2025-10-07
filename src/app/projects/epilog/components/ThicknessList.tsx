interface Props {
  thickness: string[];
  isActive: boolean;
  activeThickness: string;
  setactiveThickness: (m: string) => void;
}

export default function ThicknessList({
  thickness,
  isActive,
  activeThickness,
  setactiveThickness,
}: Props) {
  return (
    <div className="flex flex-wrap">
      {thickness.map((thickness, idx) => (
        <div
          key={idx}
          className={`rounded-md m-[5px] p-[15px] cursor-pointer ${
            isActive ? "block" : "hidden"
          } ${activeThickness === thickness ? "bg-slate-400" : "bg-gray-300"}`}
          onClick={() => {
            setactiveThickness(activeThickness === thickness ? "" : thickness);
          }}
        >
          {thickness}
        </div>
      ))}
    </div>
  );
}
