import React from 'react'
import Link from 'next/link'
import FacebookIcon from '../icons/Facebook'
import InstagramIcon from '../icons/Instagram'

export default function Navigation() {
  return (
    <div>
      <div className="w-[220px] h-screen flex items-center justify-center  bg-gradient-to-b from-[#07071b] to-[#0d0d5e]">
          <div className=" w-[150px] text-white ">
            
            <h3 className="font-serif font-bold text-5xl">G.G</h3>

            <ul className="flex flex-col mt-[210px] font-neue gap-[20px] font-bold text-xl">
              <Link href="/" className="transition-all duration-300 hover:scale-110">HOME</Link>
              <Link href="/about" className="transition-all duration-300 hover:scale-110">ABOUT</Link>
              <Link href="/work" className="transition-all duration-300 hover:scale-110">WORKS</Link>
              <Link href="/contact" className="transition-all duration-300 hover:scale-110">CONTACT</Link>
            </ul>

            <div className="flex flex-col mt-[200px] gap-4">
              <InstagramIcon />
              <FacebookIcon />
            </div>

              
          </div>
      </div>
    </div>
  )
}
