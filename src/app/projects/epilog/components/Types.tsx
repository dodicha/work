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
