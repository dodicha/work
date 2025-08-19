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
    <div className="w-1/2 ">
      <div className="px-6 pt-6">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-wide uppercase font-extrabold text-stone-900">
          Record of Operations
        </h2>
        <p className="mt-1 text-sm text-stone-900 italic">
          No major gang activity detected; suspect operates alone
        </p>

        {/* Divider styled like a newspaper rule */}
        <div className="mt-4 h-[1px] w-full bg-stone-600" />
      </div>

      {/* Experience list */}
      <ul className="px-6 py-6 space-y-3 font-serif text-base leading-relaxed text-stone-800">
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
            className=" pb-2 text-2xl"
          >
            <span className="font-bold">{e.label}:</span> {e.note}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

// export default function WantedExperience() {
//   return (
//     <section className="relative w-full max-w-3xl mx-auto p-6 sm:p-8">
//       {/* Newspaper container */}
//       <div className="bg-stone-50 text-stone-900 shadow-inner ring-1 ring-stone-300 overflow-hidden">
//         {/* Title area */}

//         {/* Footer note */}
//         <div className="px-6 pb-6">
//           <p className="text-xs text-stone-600 italic">
//             * According to the Gazette, the developer has yet to join a crew but
//             is marked as highly capable in solo raids.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
