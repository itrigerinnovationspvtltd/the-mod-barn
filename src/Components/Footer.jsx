import { Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className=" pt-10 px-4 bg-gray-900 md:px-20 lg:px-32 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col justify-around md:flex-row items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
        
          <h2 className="text-gray-200 text-2xl font-bold">The Mod Barn</h2>
          <p className="text-gray-400 mt-4">
            Providing innovative wall bed solutions with quality, functionality,
            and style. We help you maximize your space without compromising on
            comfort or design.
          </p>
        </div>
        <div>
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#testimonials" className="hover:text-white">Testimonials</a>
            </ul>
          </div>
          
        </div>
        <div>
          <div className="w-full md:w-32 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <a href="tel:9876543210" className="hover:text-white flex gap-2"><Phone/>9876543210</a>
              <a href="" className="hover:text-white">demoEmail@email.com</a>
             
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-4 border-gray-700 mt-10 text-center text-gray-400">
        Copyright 2025 &copy; The Mod Barn. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
