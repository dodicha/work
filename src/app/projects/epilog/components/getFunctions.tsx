export const getWatt = (machineName: string, data: any): string[] => {
  return Object.keys(data?.[machineName] || []);
};

export const getOPerationType = (
  machineName: string,
  watt: string,
  data: any
): string[] => {
  return Object.keys(data?.[machineName]?.[watt] || []);
};

export const getMaterials = (
  machineName: string,
  watt: string,
  operation: string,
  data: any
) => {
  return Object.keys(data?.[machineName]?.[watt]?.[operation] || []);
};

export const getOptions = (
  machineName: string,
  watt: string,
  operation: string,
  material: string,
  data: any
) => {
  const keys = Object.keys(
    data?.[machineName]?.[watt]?.[operation]?.[material] || []
  );
  const values = Object.values(
    data?.[machineName]?.[watt]?.[operation]?.[material] || []
  );

  const opt = keys.reduce((acc, curr, index) => {
    acc.push(`${curr} : ${values[index]}`);
    return acc;
  }, [] as string[]);

  return opt;
};

export const getThickness = (
  machineName: string,
  watt: string,
  operation: string,
  material: string,
  data: any
) => {
  return Object.keys(
    data?.[machineName]?.[watt]?.[operation]?.[material] || []
  );
};

export const checkThickness = (
  machineName: string,
  watt: string,
  operation: string,
  material: string,
  data: any
) => {
  const values = Object.values(
    data?.[machineName]?.[watt]?.[operation]?.[material] || []
  );
  if (typeof values[0] !== "object") {
    return false;
  } else {
    return true;
  }
};
