"use client";

import React from "react";
import { useLanguage } from "../context/LanguageProvider";

export default function TrustSection() {
  const { selectedLanguageData } = useLanguage();
  return (
    <section className="w-11/12  flex flex-wrap mt-[30px] gap-4">
      <div className="w-full text-2xl text-center  font-semibold mb-[15px]">
        <h1>{selectedLanguageData?.["our team"] ?? ""}</h1>
      </div>
      <div className="rounded-2xl w-full text-xl h-[150px] font-semibold bg-slate-100 text-left p-6">
        <h2 className="text-3xl  sm:text-2x text-gray-800 font-fira">
          35 000+
        </h2>
        <p className="text-xl font-normal text-gray-700 mt-[25px]">
          {selectedLanguageData?.["evaluated properties"] ?? ""}
        </p>
      </div>
      <div className="rounded-2xl w-full text-xl h-[150px] font-semibold bg-slate-100 text-left p-6">
        <h2 className="text-3xl  sm:text-2x text-gray-800 font-fira">17+</h2>
        <p className="text-xl font-normal text-gray-700 mt-[25px]">
          {selectedLanguageData?.["experience"] ?? ""}
        </p>
      </div>
      <div className="w-full text-2xl text-center  font-semibold">
        <h1>{selectedLanguageData?.["offer"] ?? ""}</h1>
      </div>
      <div>
        <h1 className="text-xl text-gray-900 font-fira">
          პროფესიონალთა გუნდის მხარდაჭერა
        </h1>
      </div>
    </section>
  );
}

// რისი საშუალება გექნება ჩვენთან?

// პროფესიონალთა გუნდის მხარდაჭერა
// გამოცდილმა სპეციალისტებმა დაგეხმარებიან ყველა ეტაპზე — იურიდიული, ტექნიკური და საბაზრო საკითხებით.

// ნებისმიერი ტიპის უძრავი ქონების შეფასება
// სწრაფი, ობიექტური და დეტალური შეფასება — ბინები, სახლები, კომერციული ფართები და მიწა.

// ინსპექტორის მოსვლა მთელი საქართველოს მასშტაბით — სრულიად უფასოდ
// ადგილზე შემოწმება და სრული დაზუსტებული ანგარიში — ხარჯი თქვენთვის ნულოვანი.
