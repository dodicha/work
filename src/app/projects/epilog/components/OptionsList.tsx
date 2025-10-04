interface Props {
  options: string[];
  isActive: boolean;
}

export default function OptionsList({ options, isActive }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        isActive ? "block" : "hidden"
      }`}
    >
      {options.map((opt, idx) => (
        <p key={idx} className="m-[5px]">
          {opt}
        </p>
      ))}
    </div>
  );
}
