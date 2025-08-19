"use client";

import About from "../components/About";
import Experiance from "../components/Experiance";
import Skills from "../components/Skills";
import Image from "next/image";
import Evidence from "../components/Evidence";
import { useEffect, useState } from "react";

export default function ResumePage() {
  const [showExperiance, setShowExperiance] = useState(false);

  return (
    <main
      className="min-h-screen w-full font-serif"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(0.3)",
      }}
    >
      <h1 className="text-[5vw] font-extrabold text-center uppercase tracking-widest drop-shadow-lg">
        Tech Time News
      </h1>
      <div className="flex pt-12 pr-12 pl-12">
        <About />
        <div className="w-2/3">
          <div className="flex w-full h-1/2">
            <Skills />
            <Experiance />
          </div>
          <Evidence />
        </div>
      </div>
    </main>
  );
}
