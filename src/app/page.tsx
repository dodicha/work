"use client"

import InstagramIcon from "./components/icons/Instagram";
import { Numans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";



export default function Home() {

  
  return (
    <div className="flex">
      <div className="w-[320px] h-screen flex items-center justify-center  bg-gradient-to-b from-[#07071b] to-[#0d0d5e]">
        <div className="bg-red-500 w-[220px] text-white ">
          <h3 className="font-serif font-bold text-2xl">Giorgi Gogichaisvhili</h3>
          <ul className="flex flex-col mt-[150px]">
            <Link href="/Home">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/service">SERVICES</Link>
            <Link href="/work">WORKS</Link>
            <Link href="/blog">BLOGS</Link>
            <Link href="/contact">CONTACT</Link>
          </ul>
          <div className="flex flex-col mt-[150px]">
            <InstagramIcon />
          </div>

            
        </div>
      </div>
      <div>

      </div>
      
      
    </div>
  );
}
