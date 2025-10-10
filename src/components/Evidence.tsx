"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Epilog Project",
    description:
      "An app that helps operators coordinate materials, laser machines, and properties for efficient production.",
    date: "2025",
    link: "/projects/epilog",
  },
  {
    title: "Property valuation",
    description:
      "A modern web platform that provides detailed information about property valuation services, methodology, and expertise.",
    date: "2025",
    link: "/projects/valuation",
  },
];
export default function Evidence() {
  return (
    <div className="w-full border-t-4 border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-stone-900 shadow-inner overflow-hidden"
      >
        <div className="px-4 md:px-6 py-4">
          <h2 className="font-serif text-[5vw] md:text-2xl tracking-wide uppercase text-stone-900">
            Evidence
          </h2>
        </div>
        <ul className="px-4 md:px-6 py-4 md:py-6 space-y-6 font-serif text-[4vw] md:text-base leading-relaxed text-stone-800">
          {projects.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05 * i,
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              className="pb-4"
            >
              <Link href={p.link} className="hover:underline">
                <h3 className="font-bold text-[4.5vw] md:text-lg">{p.title}</h3>
                <p className="italic text-[3.5vw] md:text-sm text-stone-700">
                  {p.date}
                </p>
                <p className="mt-1">{p.description}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
