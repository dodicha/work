"use client";
import React from "react";
import { motion } from "framer-motion";
console.log(motion);

const exp = [
  {
    label: "Solo Operations",
    note: "Has carried out all missions independently, without any crew involvement.",
  },
  {
    label: "Team Projects",
    note: "No official records found. Subject has not yet been spotted in group assignments.",
  },
  {
    label: "Independent Study",
    note: "Continuously sharpening tools and mastering new techniques outside of organized raids.",
  },
];
export default function Experiance() {
  return (
    <div className="w-full md:w-1/2">
      <div className="px-4 pt-4 md:px-6 md:pt-6">
        <h2 className="font-serif text-[5vw] md:text-2xl tracking-wide uppercase font-extrabold text-stone-900">
          Record of Operations
        </h2>
        <p className="mt-1 text-[3.5vw] md:text-sm text-stone-900 italic">
          No major gang activity detected; suspect operates alone
        </p>
        <div className="mt-4 h-[1px] w-full bg-stone-600" />
      </div>

      <ul className="px-4 md:px-6 py-4 md:py-6 space-y-3 font-serif text-[4vw] md:text-xl leading-relaxed text-stone-800">
        {exp.map((e, i) => (
          <motion.li
            key={e.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05 * i,
              type: "spring",
              stiffness: 120,
              damping: 16,
            }}
            className="pb-2"
          >
            <span className="font-bold">{e.label}:</span> {e.note}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
