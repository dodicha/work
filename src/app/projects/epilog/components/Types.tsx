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
