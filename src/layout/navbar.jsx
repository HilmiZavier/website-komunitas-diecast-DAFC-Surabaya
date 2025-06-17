import { Images,ArrowRightToLine } from 'lucide-react';
import { Link, Outlet } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#5fe1e5] shadow-2xl">
      <div className="flex justify-between items-center pr-10 pl-10 pb-1 pt-1">
        <div className="flex">
          <a href="/" className="text-xl font-bold btn btn-ghost rounded-selector p-8 transform transition duration-300 hover:scale-105 hover:opacity-80">
            <img
              src="src/assets/img/logo DAFC bg white-Photoroom.png"
              alt="Logo"
              className="w-full h-30 "
            />
          </a>
        </div>
        <div className="flex items-stretch space-x-1">
          <a href="/galeri" className="btn btn-ghost rounded-field hover:bg-[#1f1f1e] hover:text-[#FFD700] transition duration-300 text-black font-semibold text-lg"><Images size={20} className='mr-1'/>Galeri</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxcdkpw8_xweHPDe1juZJWAqCqiUEHW7xLQoHJvPcU4bT5zw/viewform?usp=sharing&ouid=102217062272345957417" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-ghost rounded-field hover:bg-[#1f1f1e] hover:text-[#FFD700] transition duration-300 text-black font-semibold text-lg"> <ArrowRightToLine size={20} className='mr-1'/>Join</a>
        </div>
      </div>
    </nav>

      <Outlet/>
    </>
  );
};
export default Navbar;
