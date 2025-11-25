"use client";

import React from "react";
// import { useLanguage } from "../context/LanguageProvider";
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
  // const { selectedLanguageData } = useLanguage();

  const trustSectionComponents = icons.map((item, index) => {
    const Icon = item.component;
    return (
      <div
        key={index}
        className="flex flex-col items-center  text-center   w-1/4 md:w-1/3"
      >
        <Icon className="text-blue-500    w-8 h-8 mb-3 md:w-12 md:h-12" />
        <h3 className=" font-semibold">{item.title}</h3>
        <p className="text-gray-500 text-xs">{item.description}</p>
      </div>
    );
  });

  return (
    <section className=" w-11/13    justify-center h-min flex  flex-wrap gap-4 md:w-1/2 md:mt-16 md:h-min md:gap-10">
      {trustSectionComponents}
    </section>
  );
}
