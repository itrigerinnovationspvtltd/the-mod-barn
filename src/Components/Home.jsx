import React, { useState } from 'react'
import { motion } from "framer-motion";
import LeadForm from "./LeadForm"

import homeimg from '../assets/morphy/MurphyBeds.jpg'
import promoBanner from '../assets/promtion.png' 

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      id='home'
      className='relative h-[150px] sm:h-[250px] md:h-[60vh] xl:h-[80vh] 
                 md:mb-4 bg-cover bg-center flex items-center justify-center 
                 w-full overflow-hidden shadow-xl mt-15 md:mt-0'
      style={{ backgroundImage: `url(${homeimg})` }}
    >
      {/* Lead Form Modal */}
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* 🌟 Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center sm:mx-auto py-4 px-6 lg:px-16 xl:px-32 text-white z-10'
      >
        <h2 className='text-lg max-w-60 sm:max-w-100 md:max-w-140 lg:max-w-160 xl:max-w-200 
                       sm:text-3xl md:text-4xl lg:text-6xl font-extrabold pt-2 leading-tight'>
          Explore smart spaces that fit your lifestyle
        </h2>

        <div className='mt-5 md:mt-16 flex text-[10px] sm:text-lg sm:flex-row gap-2 sm:gap-4 
                        pl-5 md:pl-20 lg:pl-32 xl:pl-52 items-center xl:max-w-5xl'>
          <button
            onClick={() => setIsFormOpen(true)}
            className='border bg-gray-900 opacity-90 border-white py-1 px-2 sm:px-4 sm:py-2 
                       md:py-3 md:w-auto rounded cursor-pointer'
          >
            Request Consultation
          </button>
          <a
            href="#contact"
            className='border border-white bg-gray-900 opacity-90 py-1 px-2 sm:px-4 sm:py-2 
                       md:px-8 md:py-3 rounded'
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      {/* 🎯 Promotional banner on right side */}
      <div
        className='absolute right-0 bottom-5 md:bottom-12   
                   flex justify-end items-end z-20 w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%]'
      >
        <img
          src={promoBanner}
          alt="Promotion Banner"
          className='w-24 sm:w-52 lg:w-full h-auto object-contain drop-shadow-xl'
        />
      </div>
    </div>
  );
};

export default Home
