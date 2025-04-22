"use client";

import Link from "next/link";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import React, { useState } from "react";

const navBarItems = ["/", "about", "works", "contact"];

export default function Navigation() {
  const [cklicked, setClicked] = useState("");

  const cklickedNav = (href: string) => {
    setClicked(href);
  };

  const navigationItems = function () {
    return navBarItems.map((item, index) => {
      return (
        <Link
          key={index}
          href={item}
          className={`transition-all duration-300 hover:scale-110 ${
            cklicked === `${item}`
              ? "scale-110 color-red-500"
              : "hover:scale-110"
          }`}
          onClick={() => cklickedNav(item)}
        >
          {item === "/" ? "HOME" : item.toUpperCase()}
        </Link>
      );
    });
  };

  return (
    <div>
      <div className="w-[220px] h-screen flex items-center justify-center  bg-gradient-to-b from-[#07071b] to-[#0d0d5e]">
        <div className=" w-[150px] text-white ">
          <h3 className="font-serif font-bold text-5xl cursor-pointer">G.G</h3>

          <ul className="flex flex-col mt-[210px] font-neue gap-[30px] font-bold text-xl">
            {navigationItems()}
          </ul>

          <div className="flex flex-col mt-[200px] gap-4">
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
