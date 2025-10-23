import React from "react";
import HomeSlider from "./components/HomeSlider";
import NavBar from "./components/NavBar";

export default function page() {
  return (
    <div className="w-full h-screen flex  justify-center ">
      <NavBar />
      <HomeSlider />
    </div>
  );
}
