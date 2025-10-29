import React, { useEffect, useState } from 'react'

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
    <div className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Main Navbar section */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-gray-900 opacity-90 backdrop-blur-sm rounded-full mt-2 md:h-20">
        {/* Logo or brand name */}
        <a href="#" className="text-white text-xl font-bold">DemoDomain</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-white text-xl font-bold">
          <a href="#home" className="cursor-pointer hover:text-gray-300 transition">Home</a>
          <a href="#about" className="cursor-pointer hover:text-gray-300 transition">About</a>
          <a href="#features" className="cursor-pointer hover:text-gray-300 transition">Features</a>
          <a href="#testimonials" className="cursor-pointer hover:text-gray-300 transition">Testimonials</a>
        </ul>

        {/* Contact us button (visible only on larger screens) */}
        <button className="hidden md:block bg-white text-black px-8 py-2 rounded-full font-bold hover:bg-gray-200 transition text-xl">
          <a href="#contact">Contact Us</a>
          
        </button>

        {/* Mobile Menu Icon */}
        <img
          src=""
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden w-7 cursor-pointer invert"
          alt="menu icon"
        />
      </div>

      {/* Mobile Menu Section */}
      <div
        className={`md:hidden ${showMobileMenu ? 'fixed w-full h-full' : 'h-0 w-0'}
                    right-0 top-0 bottom-0 overflow-hidden bg-black bg-opacity-90 transition-all duration-300`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src=""
            onClick={() => setShowMobileMenu(false)}
            className="w-6 invert"
            alt="close icon"
          />
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center gap-5 mt-10 px-5 text-lg font-medium text-white">
          <a onClick={() => setShowMobileMenu(false)} href="#header" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#about" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#projects" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#testimonials" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">Testimonials</a>
          <a onClick={() => setShowMobileMenu(false)} href="#contact" className="px-4 py-2 rounded-full inline-block hover:text-gray-300">Contact Us</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
