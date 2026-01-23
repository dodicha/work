import React from "react";
import { Clock, ShieldCheck, FileText, BadgeDollarSign } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "How long does a property valuation take?",
    answer:
      "In most cases, the valuation process takes 1-2 business days, depending on the property type and the avaliability of required documentation.",
    icons: Clock,
  },
  {
    id: 2,
    question: "Is the valuation legally valid and bank-accepted?",
    answer:
      "All valuations are conducted by licensed and certified experts and are accepted by banks, financial institutions, and government agencies, in accordance with national regulatory standards.",
    icons: ShieldCheck,
  },
  {
    id: 3,
    question: "What information do i need to provide?",
    answer:
      "You typically need to provide basic property details such as location, property type, size(m²), and some pictures. Our team will guide you if any additional information is required.",
    icons: FileText,
  },
  {
    id: 4,
    question: "How much does the valuation service cost?",
    answer:
      "the cost depends on the property type and complexity. We offer transparent pricing and a free initial consultation to determine the most suitable option for you",
    icons: BadgeDollarSign,
  },
];

export default function Questions() {
  const [activeQuestion, setActiveQuestion] = React.useState<number | null>(
    null,
  );

  const FrequentlyAskedQuestions = questions.map((item, index) => {
    const Icon = item.icons;
    return (
      <div
        key={index}
        className="self-start  cursor-pointer border rounded-xl p-2 w-[80%] lg:w-[40%] lg:mt-10 hover:bg-green-500"
        onClick={() => {
          setActiveQuestion(index + 1 === activeQuestion ? null : index + 1);
        }}
      >
        <Icon className="text-blue-500 w-6 h-6 mt-2 mx-auto" />
        <h2 className=" font-semibold text-center mt-2 mb-2">
          {item.question}
        </h2>
        <hr></hr>
        <h3
          className={`mt-4 ${activeQuestion === item.id ? "block" : "hidden"}`}
        >
          {item.answer}
        </h3>
      </div>
    );
  });

  return (
    <div className=" h-min w-11/12 rounded-2xl m-auto mt-4 justify-center  flex  flex-wrap gap-4 ">
      {FrequentlyAskedQuestions}
    </div>
  );
}
