import React, { useEffect, useState } from 'react'
import menu_icon from '../assets/menu-icon.svg'
import cross_icon from '../assets/cross-icon.svg'
import { Phone } from 'lucide-react';

const Navbar = () => {
  // State to control mobile menu visibility
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    // Navbar container fixed at top with z-index for layering
    <div className="absolute md:fixed top-0 left-0 w-full z-50">
      {/* Main Navbar section */}
      <div className="flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-gray-900  backdrop-blur-sm  shadow-2xl md:h-20">
        {/* Logo or brand name */}
        <a href="#" className="text-white text-xl font-bold">DemoDomain</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-white text-xl font-bold">
          <a href="#home" className="cursor-pointer hover:text-gray-300 transition">Home</a>
          <a href="#gallery" className="cursor-pointer hover:text-gray-300 transition">Gallery</a>
          <a href="#testimonials" className="cursor-pointer hover:text-gray-300 transition">Testimonials</a>
          <a href="#contact" className="cursor-pointer hover:text-gray-300 transition">Contact Us</a>
        </ul>
        
        
          <a href="tel:9876543210" className="hidden lg:flex text-white gap-2 items-center font-bold hover:text-gray-300  text-xl"><Phone/>Call Us</a>
          

        {/* Mobile Menu Icon */}
        <img
          src={menu_icon}
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden w-7 cursor-pointer invert text-white"
          alt="menu icon"
        />
      </div>

      {/* Mobile Menu Section */}
      <div
        className={`md:hidden ${showMobileMenu ? 'fixed w-full h-full' : 'h-0 w-0'}
                    right-0 top-0 bottom-0 overflow-hidden bg-black opacity-90 transition`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={cross_icon}
            onClick={() => setShowMobileMenu(false)}
            className="w-6 invert"
            alt="close icon"
          />
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center gap-5 mt-10 px-5 text-lg font-medium text-white">
          <a onClick={() => setShowMobileMenu(false)} href="#header" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#gallery" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">Gallery</a>
          <a onClick={() => setShowMobileMenu(false)} href="#testimonials" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">Testimonials</a>
          <a onClick={() => setShowMobileMenu(false)} href="#contact" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">Contact Us</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
