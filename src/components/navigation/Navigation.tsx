"use client";

import Link from "next/link";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import React, { useState } from "react";
import router, { useRouter } from "next/router";

export default function Navigation() {
  const [cklicked, setClicked] = useState("");

  const cklickedNav = (href: string) => {
    setClicked(href);
  };

  return (
    <div>
      <div className="w-[220px] h-screen flex items-center justify-center  bg-gradient-to-b from-[#07071b] to-[#0d0d5e]">
        <div className=" w-[150px] text-white ">
          <h3 className="font-serif font-bold text-5xl cursor-pointer">G.G</h3>

          <ul className="flex flex-col mt-[210px] font-neue gap-[30px] font-bold text-xl">
            <Link
              href="/"
              className={`transition-all duration-300 hover:scale-110 ${
                cklicked === "/" ? "scale-110" : "hover:scale-110"
              }`}
              onClick={() => cklickedNav("/")}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`transition-all duration-300 hover:scale-110 ${
                cklicked === "/about" ? "scale-110" : "hover:scale-110"
              }`}
              onClick={() => cklickedNav("/about")}
            >
              ABOUT
            </Link>
            <Link
              href="/work"
              className={`transition-all duration-300 hover:scale-110 ${
                cklicked === "/work" ? "scale-110" : "hover:scale-110"
              }`}
              onClick={() => cklickedNav("/work")}
            >
              WORKS
            </Link>
            <Link
              href="/contact"
              className={`transition-all duration-300 hover:scale-110 ${
                cklicked === "/contact" ? "scale-110" : "hover:scale-110"
              }`}
              onClick={() => cklickedNav("/contact")}
            >
              CONTACT
            </Link>
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
