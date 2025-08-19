"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "3D Warehouse Visualizer",
    description:
      "Built an interactive 3D warehouse model using Three.js and React.",
    date: "2025",
    link: "/projects/3d-warehouse",
  },
  {
    title: "Tago Glamping Platform",
    description:
      "Frontend for a glamping reservation system emphasizing smooth UX.",
    date: "2025",
    link: "/projects/tago-glamping",
  },
  {
    title: "Portfolio Website",
    description: "Personal website showcasing resume and creative works.",
    date: "2025",
    link: "/projects/portfolio-website",
  },
];
export default function Evidence() {
  return (
    <div className="w-full h-1/2 border-t-4 border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" text-stone-900 shadow-inner  overflow-hidden"
      >
        <div className=" px-6 py-4 ">
          <h2 className="font-serif text-2xl sm:text-3xl tracking-wide uppercase text-stone-900">
            Evdence
          </h2>
        </div>
        <ul className="px-6 py-6 space-y-6 font-serif text-base leading-relaxed text-stone-800">
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
              className=" pb-4"
            >
              <Link href={p.link} className="hover:underline">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="italic text-sm text-stone-700">{p.date}</p>
                <p className="mt-1">{p.description}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
