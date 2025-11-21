"use client";

import React from "react";
import { useLanguage } from "../context/LanguageProvider";
import { Award, Building2 } from "lucide-react";

export default function TrustSection() {
  const { selectedLanguageData } = useLanguage();
  return (
    <section className=" w-4/5 ml-[70px]">
      {/* 1 */}
      <div className="flex flex-col items-center text-center ">
        <Building2 className="text-blue-500 w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">35,000+</h3>
        <p className="text-gray-500 text-sm">
          {selectedLanguageData?.["properties valuated"] ?? ""}
        </p>
      </div>
      {/* 2 */}
      <div className="flex flex-col items-center text-center ">
        <Award className="text-blue-500 w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">
          17+ <span>{selectedLanguageData?.["years"]}</span>{" "}
        </h3>
        <p className="text-gray-500 text-sm">
          {selectedLanguageData?.["of work experience"]}
        </p>
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
