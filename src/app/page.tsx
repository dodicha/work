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
      className="w-full lg:min-h-screen font-serif overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(0.3)",
      }}
    >
      <h1 className="text-[6vw] md:text-[5vw] font-extrabold text-center">
        TECH TIME NEWS
      </h1>

      {/* მობილურზე სვეტები გადადის column-ში */}
      <div className="flex flex-col lg:flex-row pt-6 lg:pt-12 px-4 lg:px-12">
        <About />

        <div className="w-full lg:w-2/3">
          <div className="flex flex-col md:flex-row w-full">
            <Skills />
            <Experiance />
          </div>
          <Evidence />
        </div>
      </div>
    </main>
  );
}
