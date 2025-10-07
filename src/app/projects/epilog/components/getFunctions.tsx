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

  if (typeof values === "object") {
    const optKeys = Object.keys(values);
    const optValues = Object.values(values);

    const option = optKeys.reduce((acc, curr, index) => {
      acc.push(`${curr} : ${optValues[index]}`);
      return acc;
    }, [] as string[]);

    const result = keys.reduce((acc, curr, index) => {
      acc.push(`${curr} : ${option[index]}`);
      return acc;
    }, [] as string[]);

    return result;
  } else {
    return opt;
  }
};

export const getThickness = (
  machineName: string,
  watt: string,
  operation: string,
  material: string,
  data: any
) => {
  const target = data?.[machineName]?.[watt]?.[operation]?.[material];

  if (!target || typeof target !== "object") return [];

  // თუ პირველ key-ის value არის ობიექტი (ანუ thickness-ს შეიცავს)
  const firstValue = target[Object.keys(target)[0]];

  // თუ პირველი value ობიექტია, მაშინ ეს thickness-ებია
  const hasThickness =
    firstValue && typeof firstValue === "object" && !Array.isArray(firstValue);

  return hasThickness ? Object.keys(target) : [];
};
