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
      className='relative mt-14 md:mt-20 h-[85vh]   bg-cover bg-center lg:flex items-center shadow-xl'
      style={{ backgroundImage: `url(${homeimg})` }}
    >
      {/* Lead Form Modal */}
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/*  Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center sm:mx-auto py-16 sm:px-10 md:px-26   lg:px-16 xl:px-32 text-white z-10'
      >
        <h2 className='text-3xl   md:max-w-140 lg:max-w-160 xl:max-w-200 
                       sm:text-3xl md:text-4xl lg:text-6xl font-extrabold pt-2 leading-tight'>
          Explore smart spaces that fit your lifestyle
        </h2>

        <div className='mt-10 md:mt-16 flex justify-center text-base sm:text-lg lg:text-2xl sm:flex-row gap-2 sm:gap-4 
                         md:pl-16  lg:pl-0 items-center lg:max-w-2xl xl:max-w-3xl'>
          <button
            onClick={() => setIsFormOpen(true)}
            className='border bg-gray-900 opacity-90 border-white py-2 px-3 sm:px-4 sm:py-2 
                       md:py-3 md:w-auto  rounded cursor-pointer'
          >
            Request Consultation
          </button>
          
        </div>
      </motion.div>

      {/* Promotional banner on right side */}
      <div
        className='absolute bottom-[8%] right-[28%] sm:right-[35%] sm:bottom-0  md:right-[30%]  lg:right-0 lg:bottom-[30%] xl:bottom-10  xl:right-0
                   flex  sm:justify-end items-center text-center z-20 w-[180px] sm:w-[35%] md:w-[30%] lg:w-[35%]'
      >
        <img
          src={promoBanner}
          alt="Promotion Banner"
          className='w-52 sm:w-52 md:w-72 lg:w-72 xl:w-full h-auto  object-contain rounded-full drop-shadow-xl'
        />
      </div>
    </div>
  );
};

export default Home
