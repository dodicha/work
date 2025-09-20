import React from "react";
import Image from "next/image";

const aboutMe = [
  "A digital criminal with a reputation for solving unsolved problems.",
  "Known to refactor without warning and build experiences users actually enjoy.",
  "Works silently, delivers loudly.",
  "You can always count on him for something special.",
];

export default function About() {
  const description = aboutMe.map((disc: string, _index: number) => {
    return (
      <div key={_index} className="flex items-start">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mr-3">
          •
        </span>
        <span className="font-serif">{disc}</span>
      </div>
    );
  });

  return (
    <div
      className="
        w-full min-h-screen 
        border-x-4 border-black 
        flex flex-col 
        px-4 sm:px-6 lg:flex-col lg:px-10
      "
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row border-b-2 border-dashed border-black">
        {/* Left Side */}
        <div className="text-center lg:w-1/2 flex flex-col items-center justify-center py-6">
          <h1 className="font-extrabold tracking-widest drop-shadow-lg text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
            WANTED
          </h1>
          <h1 className="font-extrabold tracking-widest drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-2xl">
            AT ANY COST
          </h1>
          <Image
            src="/images/wanted.jpg"
            alt="wanted"
            width={280}
            height={280}
            className="my-4 w-40 sm:w-56 md:w-64 lg:w-72 h-auto"
          />
          <h1 className="font-extrabold font-serif text-xl sm:text-2xl md:text-3xl lg:text-2xl pt-2">
            Giorgi Gogichaishvili
          </h1>
          <h1 className="font-extrabold font-serif text-lg sm:text-xl md:text-2xl lg:text-xl">
            Software Engineer
          </h1>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex items-center justify-center m-4 text-center">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Teams around the world look to it to complete projects faster,
            cleaner, and remarkably error-free.
          </h1>
        </div>
      </div>

      {/* Bullet Points */}

      <div className="space-y-4 pt-6 px-2 sm:px-4 text-base sm:text-lg md:text-xl lg:text-2xl">
        {description}
      </div>
    </div>
  );
}
