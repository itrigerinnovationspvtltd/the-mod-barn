import React, { useState } from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion";
import LeadForm from "./LeadForm"

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className=' h-[650px] md:min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden opacity-90 shadow-xl' style={{backgroundImage: "url('/Homebg.webp')"}} id='home'>

      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      <motion.div
      initial={{opacity: 0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white '>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-5xl font-extrabold md:font-bold pt-20'>Explore smart spaces that fit your lifestyle</h2>
        <div className='space-x-6 mt-16 flex flex-col gap-3 md:block'>
            <button onClick={()=> setIsFormOpen(true)}
            className='border bg-gray-800 opacity-80  border-white px-8 py-3 w-full rounded'>Request Consultation</button>
            <a href="#contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home
