"use client";

import { useEffect, useState } from "react";

const machineDescriptions: Record<string, string> = {
  "Fusion Edge":
    "კომპაქტური და სწრაფი CO₂ სისტემა სამუშაოებისთვის, სადაც მნიშვნელოვანია სიმკვეთრე და საიმედოობა. იდეალურია ყოველდღიური გრივირებისა და სუფთა ჭრისთვის მცირე/საშუალო რაოდენობებზე.",
  "Fusion M2":
    "მრავალფუნქციური პლატფორმა ფართო საწარმოო ამოცანებისთვის. უზრუნველყოფს სტაბილურობას, გრძელვადიან სესიებს და მაღალი ხარისხის შედეგებს სხვადასხვა მასალაზე.",
  "Fiber Mark":
    "ფაიბერული ლაზერი მეტალებისა და გარკვეული პლასტმასებისთვის—სწრაფი მარკირება, სერიალიზაცია და ინდუსტრიული ნიშნები მაქსიმალური სიზუსტით.",
  "Fusion Maker":
    "მარტივად სამართავი, ჰობი და მცირე ბიზნესი-დონეზე მორგებული მოწყობილობა. კომფორტული სწავლებისთვის და ყოველდღიური პროექტებისთვის მაღალი კონტროლით.",
  "Fusion Pro":
    "მაღალი წარმადობის პროფესიონალური სისტემა სწრაფი სამუშაო ნაკადებისთვის. განკუთვნილია დიდი ფორმატებისა და რთული დეტალების სწრაფად დასამუშავებლად.",
  "Fusion Galvo":
    "გალვო-სისტემის ლაზერი მაღალი სიჩქარისთვის. განკუთვნილია მეტალებზე და პლასტმასებზე მარკირებისა და ინდუსტრიული ნიშნების ძალიან სწრაფად დასადებად, დიდი სიზუსტით და გამძლეობით.",
  "Epilog Legend":
    "ლეგენდარული სერია, უნივერსალური დანადგარი მრავალფეროვანი ამოცანებისთვის. უზრუნველყოფს როგორც ჭრას, ისე გრავირებას სხვადასხვა მასალაზე, გამორჩეული საიმედოობითა და მაღალი ხარისხის შედეგით.",
  "Epilog Zing":
    "ზინგ სერია — კომპაქტური და ხელმისაწვდომი მოწყობილობა. იდეალურია დამწყები მომხმარებლებისთვის და მცირე სამუშაოებისთვის, სადაც მნიშვნელოვანია მარტივი მართვა და ეფექტური შედეგები.",
};

const machineNames = [
  "Fusion Edge",
  "Fusion M2",
  "Fiber Mark",
  "Fusion Maker",
  "Fusion Pro",
  "Fusion Galvo",
  "Epilog Legend",
];

const getWatt = (machineName: string, data: any): string[] => {
  return Object.keys(data?.[machineName] || []);
};
const getOPerationType = (
  machineName: string,
  watt: string,
  data: any
): string[] => {
  return Object.keys(data?.[machineName]?.[watt] || []);
};

const getMaterials = (
  machineName: string,
  watt: string,
  operation: string,
  data: any
) => {
  return Object.keys(data?.[machineName]?.[watt]?.[operation] || []);
};

const getOptions = (
  machineName: string,
  watt: string,
  operation: string,
  material: string,
  data: any
) => {
  // const keys = Object.keys(
  //   data?.[machineName]?.[watt]?.[operation]?.[material] || []
  // );
  // const values = Object.values(
  //   data?.[machineName]?.[watt]?.[operation]?.[material] || []
  // );
  return data?.[machineName]?.[watt]?.[operation]?.[material];
};

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [activeWatt, setActiveWatt] = useState<string>("");
  const [activeDiv, setactiveDiv] = useState<string>("");
  const [activeOperationType, setactiveOperationType] = useState<string>("");
  const [activeMaterial, setactiveMaterial] = useState<string>("");

  // const [activeWatt, setActiveWatt] = useState<string[]>([]);
  // const [activeDiv, setActiveDiv] = useState<string[]>([]);

  // const toggleDiv = (name: string) => {
  //   if (activeDiv.includes(name)) {
  //     setActiveDiv(activeDiv.filter((item) => item !== name));
  //   } else {
  //     setActiveDiv([...activeDiv, name]);
  //   }
  // };
  // const toggleWatt = (name: string) => {
  //   if (activeWatt.includes(name)) {
  //     setActiveWatt(activeWatt.filter((item) => item !== name));
  //   } else {
  //     setActiveWatt([...activeWatt, name]);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/epilogSetups.json");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  const selectMachine = machineNames.map((machine, index) => {
    return (
      <div
        key={index}
        className="m-[10px] flex flex-col justify-center items-center "
      >
        <div
          className="sm:flex flex-col w-full h-max-content bg-gray-300 text-center cursor-pointer"
          onClick={() => {
            setactiveDiv(machine);
          }}
        >
          <h1>{machine}</h1>
          <p>{machineDescriptions[machine]}</p>
        </div>

        <div
          className={`sm:h-[100px]  text-center transition-all duration-300 flex flex-wrap `}
        >
          {getWatt(machine, data).map((watt, wIndex) => {
            return (
              <div
                key={wIndex}
                className={`sm:h-[30px] flex items-center justify-center 
                    bg-gray-300 rounded-md text-s m-[5px] p-[15px] ${
                      activeDiv === machine ? "block" : "hidden"
                    }`}
                onClick={() => {
                  setActiveWatt(watt);
                }}
              >
                {watt}
              </div>
            );
          })}
        </div>

        <div className="">
          {getOPerationType(machine, getWatt(machine, data)[0], data).map(
            (operation, opIndex) => {
              return (
                <div
                  key={opIndex}
                  className={`sm:h-[30px] flex items-center justify-center 
                    bg-gray-300 rounded-md text-s m-[5px] p-[15px] ${
                      activeDiv === machine && activeWatt === activeWatt
                        ? "block"
                        : "hidden"
                    }`}
                  onClick={() => {
                    setactiveOperationType(operation);
                  }}
                >
                  {operation}
                </div>
              );
            }
          )}
        </div>

        <div>
          {getMaterials(
            machine,
            getWatt(machine, data)[0],
            getOPerationType(machine, getWatt(machine, data)[0], data)[0],
            data
          ).map((material, mIndex) => {
            return (
              <div
                key={mIndex}
                className={`sm:h-[30px] flex items-center justify-center 
                    bg-gray-300 rounded-md text-s m-[5px] p-[15px] ${
                      activeDiv === machine &&
                      activeWatt === activeWatt &&
                      activeOperationType === activeOperationType
                        ? "block"
                        : "hidden"
                    }`}
              >
                {material}
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return <div className="w-full">{selectMachine}</div>;
}
