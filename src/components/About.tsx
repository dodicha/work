import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-1/3 h-screen border-r-4 border-l-4 border-black flex flex-col   pl-5 pr-5 ">
      <div className="text-center w-[280px] ">
        <h1 className="font-extrabold tracking-widest  drop-shadow-lg text-[2.5rem]">
          WANTED
        </h1>
        <h1 className="font-extrabold tracking-widest drop-shadow-lg text-[1.5rem] ">
          AT ANY COST
        </h1>
        <Image
          src="/images/wanted.jpg"
          alt={"wanted"}
          width={280}
          height={280}
        />
        <h1 className=" font-extrabold text-[1.5rem] font-serif pt-2">
          Giorgi Gogichaishvili
        </h1>
        <h1 className="font-serif font-extrabold text-[1.5rem]">
          Software Engineer
        </h1>
      </div>
    </div>
  );
}
