"use client";
import React from "react";
import { motion } from "framer-motion";

const tech = [
  { label: "C", note: "low-level ops" },
  { label: "JavaScript", note: "browser mischief" },
  { label: "TypeScript", note: "strict alibi" },
  { label: "Tailwind CSS", note: "rapid disguise" },
  { label: "React", note: "component heists" },
  { label: "Next.js", note: "server-side escape" },
];

export default function Skills() {
  return (
    <div className="w-1/2 h-full border-r-4 border-black">
      <div className="px-4 pt-4">
        <h2 className="font-serif text-2xl sm:text-2xl tracking-wide font-extrabold uppercase text-stone-900">
          Modus Operandi
        </h2>
        <p className="mt-1 text-m text-stone-900 italic">
          Languages & Programs reported in the dossier
        </p>
        <div className="mt-2 h-[1px] w-full bg-stone-600" />
      </div>
      <ul className="px-4 py-4 space-y-2 font-serif text-base leading-relaxed text-stone-800 flex-1">
        {tech.map((t, i) => (
          <motion.li
            key={t.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05 * i,
              type: "spring",
              stiffness: 120,
              damping: 16,
            }}
            className=" pb-2 text-2xl"
          >
            <span className="font-bold">{t.label}:</span> {t.note}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
