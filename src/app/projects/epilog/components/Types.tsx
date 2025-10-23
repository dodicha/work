export interface MachineData {
  machines: {
    [key: string]: MachineNode;
  };
}

export interface MachineNode {
  description?: string;
  Watt?: {
    [key: string]: WattNode;
  };
}

export interface WattNode {
  operations?: {
    [key: string]: OperationNode;
  };
}

export interface OperationNode {
  Materials?: {
    [key: string]: MaterialNode;
  };
  materials?: {
    [key: string]: MaterialNode;
  };
}

export interface MaterialNode {
  [key: string]: number | string | MaterialParams;
}

export interface MaterialParams {
  DPI?: number;
  dpi?: number;
  Speed?: number;
  speed?: number;
  Power?: number;
  power?: number;
  Frequency?: number;
  frequency?: number;
  focus?: number;
}
export interface EpilogSetups {
  [machineName: string]: {
    // e.g. "Fusion Edge"
    [wattage: string]: {
      // e.g. "30 Watt"
      [operation: string]: {
        // e.g. "Photo Engraving"
        [material: string]: {
          // e.g. "Acrylic"
          DPI: string;
          Speed: string;
          Power: string;
          [key: string]: string; // For other possible parameters
        };
      };
    };
  };
}
