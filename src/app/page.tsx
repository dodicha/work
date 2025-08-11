import About from "@/components/About";
import Biography from "@/components/Biography";
import Experiance from "@/components/Experiance";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function ResumePage() {
  return (
    <main
      className="min-h-screen w-full flex  font-serif"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(0.3)",
      }}
    >
      <About />
      <div className="w-2/3 ">
        <div className="flex w-full h-1/2">
          <Biography />
          <Experiance />
        </div>

        <Projects />
      </div>
    </main>
  );
}
