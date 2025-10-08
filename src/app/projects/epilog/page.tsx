"use client";
import { useEffect, useState } from "react";
import MachineCard from "./components/MachineCard";

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

export default function Page() {
  const [data, setData] = useState<any>(null);

  const [activeMachine, setActiveMachine] = useState<string>("");
  const [activeWatt, setActiveWatt] = useState<string>("");
  const [activeOperation, setActiveOperation] = useState<string>("");
  const [activeMaterial, setActiveMaterial] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/epilogSetups.json");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      {machineNames.map((machine) => (
        <MachineCard
          key={machine}
          machine={machine}
          description={machineDescriptions[machine]}
          data={data}
          activeMachine={activeMachine}
          setActiveMachine={setActiveMachine}
          activeWatt={activeWatt}
          setActiveWatt={setActiveWatt}
          activeOperation={activeOperation}
          setActiveOperation={setActiveOperation}
          activeMaterial={activeMaterial}
          setActiveMaterial={setActiveMaterial}
        />
      ))}
    </div>
  );
}
