"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden h-screen w-full bg-gradient-to-b from-[#07071b] to-[#0d0d5e] -z-10">
      {/* Content */}
      <div className="flex items-center justify-center h-full mx-auto text-[#a9a9e2]">
        <div className="text-center w-[597px]">
          <h1 className="font-serif text-6xl">
            MY NAME IS <br></br>
            <b>
              GIORGI<br></br> GOGICHAISHVILI
            </b>
          </h1>
          <h2 className="font-serif text-4xl mt-[40px]">
            <b> WEB DEVELOPER </b> <br></br> FROM GEORGIA
          </h2>

          <div className="flex items-center justify-center mt-[30px] gap-8">
            <div className="flex">
              <FaMobileAlt size={25} />
              <p className="ml-[10px] font-bold text-xl ">
                {" "}
                +995 551 33 33 58{" "}
              </p>
            </div>

            <div className="flex">
              <FaEnvelope size={25} />
              <p className="ml-[10px] font-bold text-xl ">
                g.dodicha@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={"/images/developer.png"}
            alt={"developer"}
            width={700}
            height={650}
          />
        </div>
      </div>
    </div>
  );
}
