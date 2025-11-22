"use client";

import React from "react";
import { useLanguage } from "../context/LanguageProvider";
import { Award, Building2, BadgeCheck, Star, Handshake } from "lucide-react";

export default function TrustSection() {
  const { selectedLanguageData } = useLanguage();
  return (
    <section className=" w-4/5 ml-[50px]  mr-4 flex flex-wrap gap-8 p-24">
      {/* 1 */}
      <div className="flex flex-col items-center text-center w-1/4 ">
        <Building2 className="text-blue-500 w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">35,000+</h3>
        <p className="text-gray-500 text-sm">
          {selectedLanguageData?.["properties valuated"] ?? ""}
        </p>
      </div>
      {/* 2 */}
      <div className="flex flex-col items-center text-center w-1/4">
        <Award className="text-blue-500 w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">
          17+ <span>{selectedLanguageData?.["years"]}</span>{" "}
        </h3>
        <p className="text-gray-500 text-sm">
          {selectedLanguageData?.["of work experience"]}
        </p>
      </div>
      <div className="flex flex-col items-center text-center w-1/4">
        <Building2 className="text-blue-500 w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">Any kind</h3>
        <p className="text-gray-500 text-sm">Of vauation services</p>
      </div>
      <div className="flex flex-col items-center text-center w-1/4">
        <BadgeCheck className="text-blue-500 w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">Licensed Experts</h3>
        <p className="text-gray-500 text-sm">
          Certified by national regulatory standards
        </p>
      </div>
      <div className="flex flex-col items-center text-center w-1/4">
        <Star className="text-blue-500 w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">4.9/5 Client Satisfaction</h3>
        <p className="text-gray-500 text-sm">Based on 12,500+ reviews</p>
      </div>
      <div className="flex flex-col items-center text-center w-1/4">
        <Handshake className="text-blue-500 w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">Trusted by 50+ agencies</h3>
        <p className="text-gray-500 text-sm">Based on 12,500+ reviews</p>
      </div>
    </section>
  );
}

<Building2 />;
// რისი საშუალება გექნება ჩვენთან?

// პროფესიონალთა გუნდის მხარდაჭერა
// გამოცდილმა სპეციალისტებმა დაგეხმარებიან ყველა ეტაპზე — იურიდიული, ტექნიკური და საბაზრო საკითხებით.

// ნებისმიერი ტიპის უძრავი ქონების შეფასება
// სწრაფი, ობიექტური და დეტალური შეფასება — ბინები, სახლები, კომერციული ფართები და მიწა.

// ინსპექტორის მოსვლა მთელი საქართველოს მასშტაბით — სრულიად უფასოდ
// ადგილზე შემოწმება და სრული დაზუსტებული ანგარიში — ხარჯი თქვენთვის ნულოვანი.
