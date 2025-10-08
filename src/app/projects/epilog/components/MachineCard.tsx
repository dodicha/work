import WattList from "./WattList";
import OperationList from "./OperationList";
import MaterialList from "./MaterialList";
import OptionsList from "./OptionsList";

import {
  getWatt,
  getOPerationType,
  getMaterials,
  getOptions,
  getThickness,
  checkThickness,
} from "./getFunctions";

interface Props {
  machine: string;
  description: string;
  data: any;
  activeMachine: string;
  setActiveMachine: (v: string) => void;
  activeWatt: string;
  setActiveWatt: (v: string) => void;
  activeOperation: string;
  setActiveOperation: (v: string) => void;
  activeMaterial: string;
  setActiveMaterial: (v: string) => void;
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
}: Props) {
  const isActive = activeMachine === machine;

  return (
    <div className="m-[10px] flex flex-col justify-center items-center">
      <div
        className={`w-full text-center cursor-pointer ${
          isActive ? "bg-slate-400" : "bg-gray-300"
        }`}
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
