import WattList from "./WattList";
import OperationList from "./OperationList";
import MaterialList from "./MaterialList";
import OptionsList from "./OptionsList";
import { MachineData } from "./Types";

import {
  getWatt,
  getOPerationType,
  getMaterials,
  getOptions,
} from "./getFunctions";

interface MachineCardProps {
  machine: string;
  description: string;
  data: MachineData | null;
  activeMachine: string;
  setActiveMachine: (machine: string) => void;
  activeWatt: string;
  setActiveWatt: (watt: string) => void;
  activeOperation: string;
  setActiveOperation: (operation: string) => void;
  activeMaterial: string;
  setActiveMaterial: (material: string) => void;
}

export default function MachineCard({
  machine,
  description,
  data,
  activeMachine,
  setActiveMachine,
  activeWatt,
  setActiveWatt,
  activeOperation,
  setActiveOperation,
  activeMaterial,
  setActiveMaterial,
}: MachineCardProps) {
  const isActive: boolean = activeMachine === machine;

  return (
    <div
      className={`m-[10px] sm:flex flex-col justify-center items-center  lg:w-[45%] xl:w-[30%]`}
    >
      <div
        className={`sm:m-[10px] text-center cursor-pointer transition-all duration-300 
      ${isActive ? "bg-slate-400 scale-105" : "bg-gray-300"}`}
        onClick={() => {
          setActiveWatt("");
          setActiveOperation("");
          setActiveMaterial("");
          setActiveMachine(isActive ? "" : machine);
        }}
      >
        <h1>{machine}</h1>
        <p>{description}</p>
      </div>

      <WattList
        watts={getWatt(machine, data)}
        isActive={isActive}
        activeWatt={activeWatt}
        setActiveWatt={setActiveWatt}
        resetOperation={() => setActiveOperation("")}
        resetMaterial={() => setActiveMaterial("")}
      />

      <OperationList
        operations={getOPerationType(machine, activeWatt, data)}
        isActive={isActive}
        activeOperation={activeOperation}
        setActiveOperation={setActiveOperation}
        resetMaterial={() => setActiveMaterial("")}
      />

      <MaterialList
        materials={getMaterials(machine, activeWatt, activeOperation, data)}
        isActive={isActive}
        activeMaterial={activeMaterial}
        setActiveMaterial={setActiveMaterial}
      />

      <OptionsList
        options={getOptions(
          machine,
          activeWatt,
          activeOperation,
          activeMaterial,
          data
        )}
        isActive={isActive}
      />
    </div>
  );
}
