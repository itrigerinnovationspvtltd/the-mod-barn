import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import adu1 from '../assets/adu/ADU-Hollywood.webp'
import adu2 from '../assets/adu/ADU-Malibu.webp'

import off1 from '../assets/office/Flex-Murphy-Office.webp'
import off2 from '../assets/office/Jax-Murphy-Office.webp'
import off3 from '../assets/office/Kai-Murphy-Office.webp'
import off4 from '../assets/office/Newport-Murphy-Office.webp'
import off5 from '../assets/office/Winter-Murphy-Office.webp'
import sofa1 from '../assets/sofa/Big-Blue-Murphy-Sofa.webp'
import sofa2 from '../assets/sofa/Coastal-Nook.webp'
import sofa3 from '../assets/sofa/El-Segundo-MurphySofa.webp'
import sofa4 from '../assets/sofa/Malibu-Loft-Rowen2-1.webp'
import sofa5 from '../assets/sofa/Malibu-MurphyBed-Sofa.webp'
import sofa6 from '../assets/sofa/Malibu-MurphyTV-Sofa.webp'
import sofa7 from '../assets/sofa/Mod-Mason-Murphy-Sofa.webp'
import sofa8 from '../assets/sofa/Mod-Stacy-Sofa.webp'
import sofa9 from '../assets/sofa/River-Murphy-Sofa.webp'
import sofa10 from '../assets/sofa/SantaMaria.webp'
import sofa11 from '../assets/sofa/Somoya-MurphyBed.webp'


const Category = () => {
  const [activeCategory, setActiveCategory] = useState("office");

  const categories = [
    { id: "office", name: "Office Combo" },
    { id: "sofaCombos", name: "Sofa Combo" },
    { id: "adu", name: "ADU Space" },
  ];

  const products = {
    adu: [
      {
        image:adu1,
        title: "ADU Hollywood",
      },
      {
        image:adu2,
        title: "ADU Malibu",
      },
    ],
    office: [
      {
        image: off1,
        title: "Flex Murphy Office",
      },
      {
        image:off2,
        title: "Jax Murphy Office",
      },
      {
        image:off3,
        title: "Kai-Murphy Office",
      },
      {
        image:off4,
        title: "Newport Murphy Office",
      },
      {
        image:off5,
        title: "Winter Murphy Office",
      },
    ],
    sofaCombos: [
      {
        image:sofa1,
        title: "Big Blue Murphy Sofa",
      },
      {
        image:sofa2,
        title: "Coastal Nook",
      },
      {
        image:sofa3,
        title: "El Segundo Murphy Sofa",
      },
      {
        image:sofa4,
        title: "Malibu Loft Rowen 2-1",
      },
      {
        image:sofa5,
        title: "Malibu Murphy Bed Sofa",
      },
      {
        image:sofa6,
        title: "Malibu Murphy TV Sofa",
      },
      {
        image:sofa7,
        title: "Mod Mason Murphy Sofa",
      },
      {
        image:sofa8,
        title: "Mod Stacy Sofa",
      },
      {
        image:sofa9,
        title: "River Murphy Sofa",
      },
      {
        image:sofa10,
        title: "Santa Maria",
      },
      {
        image:sofa11,
        title: "Somoya Murphy Bed",
      },
    ],
  };

  return (
    <section className=" mx-auto px-4 py-16  bg-linear-to-b from-gray-200 via-white to-gray-300">
      {/* Heading */}
      <h2 className="text-2xl md:text-5xl font-bold text-center text-[#172128] mb-6">
        Explore the Details and Finishes Behind Our{" "}
        <span className="text-gray-800">Murphy Bed Solutions</span>
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
              activeCategory === cat.id
                ? "bg-black text-white border-black"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Animated Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory} // re-renders when category changes
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          id="category"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/*ADDED HEADING FOR ADU CATEGORY*/}
    {activeCategory === "adu" && (
      <div className="col-span-full text-center mb-2">
        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
         Accessory Dwelling Unit
        </h3>
      </div>
    )}

          {products[activeCategory].map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Category;
