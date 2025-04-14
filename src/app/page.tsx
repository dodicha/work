"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen w-full bg-gradient-to-b from-[#07071b] to-[#0d0d5e] -z-10">
      {/* Background Figures */}
      <div className="absolute inset-0 -z-10">
        <div
          className=" w-[70px] h-[50px] border-2 border-red-400 top-10 right-10 mt-[50px]"
          style={{
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.05
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-[100px] h-[60px] border-green-400 border-2 rounded-full top-60 left-1/2"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${
              mousePosition.y * 0.03
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-[50px] h-[50px] bg-purple-400 rounded-full bottom-20 left-10"
          style={{
            transform: `translate(${mousePosition.x * 0.04}px, ${
              mousePosition.y * 0.04
            }px)`,
          }}
        ></div>
      </div>

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
            <b> FRONTEND DEVELOPER </b> <br></br> FROM GEORGIA
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
