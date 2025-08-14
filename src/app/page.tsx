import About from "@/components/About";
import Biography from "@/components/Biography";
import Experiance from "@/components/Experiance";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function ResumePage() {
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
            <Biography />
            <Experiance />
          </div>
          <Projects />
        </div>
      </div>
    </main>
  );
}
