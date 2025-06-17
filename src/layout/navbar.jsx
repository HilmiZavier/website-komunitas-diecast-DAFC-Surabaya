import { Images, ArrowRightToLine, Menu, X } from 'lucide-react';
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#5fe1e5] shadow-2xl">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-2 lg:py-1">
          {/* Logo */}
          <div className="flex">
            <a 
              href="/" 
              className="text-xl font-bold btn btn-ghost rounded-selector p-2 sm:p-4 lg:p-8 transform transition duration-300 hover:scale-105 hover:opacity-80"
            >
              <img
                src="./images/logo-DAFC-bg-white-Photoroom copy.png"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-full lg:h-30"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-stretch space-x-1">
            <a 
              href="/galeri" 
              className="btn btn-ghost rounded-field hover:bg-[#1f1f1e] hover:text-[#FFD700] transition duration-300 text-black font-semibold text-base lg:text-lg"
            >
              <Images size={20} className='mr-1'/>
              Galeri
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxcdkpw8_xweHPDe1juZJWAqCqiUEHW7xLQoHJvPcU4bT5zw/viewform?usp=sharing&ouid=102217062272345957417" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-ghost rounded-field hover:bg-[#1f1f1e] hover:text-[#FFD700] transition duration-300 text-black font-semibold text-base lg:text-lg"
            >
              <ArrowRightToLine size={20} className='mr-1'/>
              Join
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-black hover:bg-[#1f1f1e] hover:text-[#FFD700] rounded-lg transition duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-2 space-y-2 bg-[#5fe1e5] border-t border-[#4dd0d4] ">
            <a 
              href="/galeri" 
              className="flex items-center w-full px-4 py-3 text-black font-semibold hover:bg-[#1f1f1e] hover:text-[#FFD700] rounded-lg transition duration-300"
              onClick={closeMenu}
            >
              <Images size={20} className='mr-3'/>
              Galeri
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxcdkpw8_xweHPDe1juZJWAqCqiUEHW7xLQoHJvPcU4bT5zw/viewform?usp=sharing&ouid=102217062272345957417" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center w-full px-4 py-3 text-black font-semibold hover:bg-[#1f1f1e] hover:text-[#FFD700] rounded-lg transition duration-300"
              onClick={closeMenu}
            >
              <ArrowRightToLine size={20} className='mr-3'/>
              Join
            </a>
          </div>
        </div>
      </nav>

      <Outlet/>
    </>
  );
};

export default Navbar;