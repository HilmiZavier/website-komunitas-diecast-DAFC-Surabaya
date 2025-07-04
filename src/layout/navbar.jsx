import { Images, ArrowRightToLine, Menu, X, Lightbulb } from 'lucide-react';
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleJoinClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfxcdkpw8_xweHPDe1juZJWAqCqiUEHW7xLQoHJvPcU4bT5zw/viewform?usp=sharing&ouid=102217062272345957417", "_blank", "noopener noreferrer");
    closeMenu();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#5fe1e5] shadow-2xl">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-2 lg:py-1">
          {/* Logo */}
          <div className="flex max-w-[72px]">
            <button 
              onClick={() => Navigate("/")}
              className="text-xl font-bold btn btn-ghost rounded-selector p-2 sm:p-4 lg:p-8 transform transition duration-300 hover:scale-105 hover:opacity-80"
            >
              <img
                src="./images/logo-DAFC-bg-white-Photoroom copy.png"
                alt="Logo"
                className="w-full h-auto object-containn"
              />

            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-stretch space-x-1">
            <button 
              onClick={() => Navigate("/Edukasi")}
              className="btn btn-ghost rounded-field hover:bg-[#1f1f1e] hover:text-[#FFD700] transition duration-300 text-black font-semibold text-base lg:text-lg"
            >
              <Lightbulb size={20} className='mr-1'/>
              Edukasi
            </button>
            <button 
              onClick={() => Navigate("/galeri")}
              className="btn btn-ghost rounded-field hover:bg-[#1f1f1e] hover:text-[#FFD700] transition duration-300 text-black font-semibold text-base lg:text-lg"
            >
              <Images size={20} className='mr-1'/>
              Galeri
            </button>
            <button 
              onClick={handleJoinClick}
              className="btn btn-ghost rounded-field hover:bg-[#1f1f1e] hover:text-[#FFD700] transition duration-300 text-black font-semibold text-base lg:text-lg"
            >
              <ArrowRightToLine size={20} className='mr-1'/>
              Join
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <label className=" swap swap-rotate">
              {/* hidden checkbox to control toggle */}
              <input type="checkbox" onChange={toggleMenu} checked={isMenuOpen} />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-2 space-y-2 bg-[#5fe1e5] border-t border-[#4dd0d4]">
            <button 
              onClick={() => {
                Navigate("/Edukasi");
                closeMenu();
              }}
              className="flex items-center w-full px-4 py-3 text-black font-semibold hover:bg-[#1f1f1e] hover:text-[#FFD700] rounded-lg transition duration-300 text-left"
            >
              <Lightbulb size={20} className='mr-3'/>
              Tips & Tricks
            </button>
            <button 
              onClick={() => {
                Navigate("/galeri");
                closeMenu();
              }}
              className="flex items-center w-full px-4 py-3 text-black font-semibold hover:bg-[#1f1f1e] hover:text-[#FFD700] rounded-lg transition duration-300 text-left"
            >
              <Images size={20} className='mr-3'/>
              Galeri
            </button>
            <button 
              onClick={handleJoinClick}
              className="flex items-center w-full px-4 py-3 text-black font-semibold hover:bg-[#1f1f1e] hover:text-[#FFD700] rounded-lg transition duration-300 text-left"
            >
              <ArrowRightToLine size={20} className='mr-3'/>
              Join
            </button>
          </div>
        </div>
      </nav>

      <Outlet/>
    </>
  );
};

export default Navbar;