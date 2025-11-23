"use client";

import React from "react";
import { useLanguage } from "../context/LanguageProvider";
import {
  Award,
  Building2,
  BadgeCheck,
  Star,
  Handshake,
  House,
} from "lucide-react";

const icons = [
  {
    component: Building2,
    title: "35,000+",
    description: "properties valuated",
  },
  { component: Award, title: "17+ years", description: "of work experience" },
  {
    component: House,
    title: "Any kind",
    description: "Of vauation services",
  },
  {
    component: BadgeCheck,
    title: "Licensed Experts",
    description: "Certified by national regulatory standards",
  },
  {
    component: Star,
    title: "4.9/5 Client Satisfaction",
    description: "Based on 12,500+ reviews",
  },
  {
    component: Handshake,
    title: "Trusted by 50+ agencies",
    description: "Based on 12,500+ reviews",
  },
];

export default function TrustSection() {
  const { selectedLanguageData } = useLanguage();

  const trustSectionComponents = icons.map((item, index) => {
    const Icon = item.component;
    return (
      <div className="flex flex-col items-center   text-center w-2/5 bg-red-500 ">
        <Icon className="text-blue-500  w-10 h-10 mb-3" />
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.description}</p>
      </div>
    );
  });

  return (
    <section className=" w-4/5 bg-black ml-[30px] mt-12 justify-center h-min mr-4 flex flex-wrap gap-6 ">
      {trustSectionComponents}
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
