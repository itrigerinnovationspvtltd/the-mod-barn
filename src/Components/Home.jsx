import React, { useState } from 'react'
import { motion } from "framer-motion";
import LeadForm from "./LeadForm"

import homeimg from '../assets/morphy/sofa1.webp'
import promoBanner from '../assets/promotion.png' 

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className='relative h-[150px] sm:h-[250px] md:h-[60vh] xl:h-[80vh] md:mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden shadow-xl mt-15 md:mt-0' style={{backgroundImage: `url(${homeimg})`}} id='home'>

      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      <motion.div
      initial={{opacity: 0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      className='container text-center sm:mx-auto py-4 px-6 lg:px-16 xl:px-32 text-white z-10 '>
        <h2 className='text-lg max-w-60 sm:max-w-100 md:max-w-140 lg:max-w-160 xl:max-w-200 sm:text-3xl md:text-4xl lg:text-6xl font-extrabold pt-2   leading-tight'>Explore smart spaces that fit your lifestyle</h2>
        <div className='mt-5 md:mt-16 flex text-[10px] sm:text-lg sm:flex-row gap-2 sm:gap-4 pl-5 md:pl-20 lg:pl-32 xl:pl-52  items-center xl:max-w-5xl'> 
          <button onClick={()=> setIsFormOpen(true)}
            className='border bg-gray-900 opacity-90 border-white py-1 px-2 sm:px-4 sm:py-2 md:py-3 md:w-auto rounded cursor-pointer'
          >Request Consultation</button>
            <a 
            href="#contact" 
            className=' border border-white bg-gray-900 opacity-90 py-1 px-2 sm:px-4 sm:py-2 md:px-8 md:py-3  rounded'
          >Contact Us</a>
        </div>
      </motion.div>
      {/* 🎯 Promotional banner overlay */}
      <div 
        // Adjusted widths to look consistent across all screens
        className='absolute top-0 right-0 h-full sm:w-[110vw]  md:w-screen lg:w-[90vw] xl:w-screen flex items-center justify-center z-20 pointer-events-none'
      >
        <img 
          src={promoBanner} 
          alt="Promotion Banner" 
          //  Keeps aspect ratio, fills container properly on all screens
          className='h-full w-full object-contain sm:object-cover md:object-fill'
        />
      </div>
    </div>
  );
};

export default Home
