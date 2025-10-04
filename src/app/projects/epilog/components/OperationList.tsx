interface Props {
  operations: string[];
  isActive: boolean;
  activeOperation: string;
  setActiveOperation: (o: string) => void;
  resetMaterial: () => void;
}

export default function OperationList({
  operations,
  isActive,
  activeOperation,
  setActiveOperation,
  resetMaterial,
}: Props) {
  return (
    <div className="flex flex-wrap">
      {operations.map((operation, idx) => (
        <div
          key={idx}
          className={`rounded-md m-[5px] p-[15px] cursor-pointer ${
            isActive ? "block" : "hidden"
          } ${activeOperation === operation ? "bg-slate-400" : "bg-gray-300"}`}
          onClick={() => {
            resetMaterial();
            setActiveOperation(activeOperation === operation ? "" : operation);
          }}
        >
          {operation}
        </div>
      ))}
    </div>
  );
}
