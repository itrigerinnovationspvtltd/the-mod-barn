import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import morphy1 from '../assets/morphy/Morphy1.webp'
import morphy2 from '../assets/morphy/Morphy2.jpg'
import morphy3 from '../assets/morphy/Morphy3.avif'
import morphy4 from '../assets/morphy/Morphy4.webp'
import morphy5 from '../assets/morphy/Morphy5.jpg'
import morphy6 from '../assets/morphy/Morphy6.webp'
import off1 from '../assets/morphy/office1.jpg'
import off2 from '../assets/morphy/office2.jpg'
import off3 from '../assets/morphy/office3.jpg'
import off4 from '../assets/morphy/office4.jpg'
import off5 from '../assets/morphy/office5.jpg'
import off6 from '../assets/morphy/office6.jpg'
import sofa1 from '../assets/morphy/sofa1.webp'
import sofa2 from '../assets/morphy/safa2.jpg'
import sofa3 from '../assets/morphy/sofa3.jpg'
import sofa4 from '../assets/morphy/sofa4.webp'
import sofa5 from '../assets/morphy/sofa5.jpeg'
import sofa6 from '../assets/morphy/sofa6.webp'


const Category = () => {
  const [activeCategory, setActiveCategory] = useState("wallBeds");

  const categories = [
    { id: "wallBeds", name: "Wall Beds" },
    { id: "office", name: "Office" },
    { id: "sofaCombos", name: "Sofa Combos" },
  ];

  const products = {
    wallBeds: [
      {
        image:morphy1,
        title: "Classic Murphy Bed",
      },
      {
        image:morphy2,
        title: "Modern Wall Bed with Storage",
      },
      {
        image:morphy3   ,
        title: "Compact Space-Saving Bed",
      },
      {
        image:morphy4   ,
        title: "Compact Space-Saving Bed",
      },
      {
        image:morphy5   ,
        title: "Compact Space-Saving Bed",
      },
      {
        image:morphy6   ,
        title: "Compact Space-Saving Bed",
      },
    ],
    office: [
      {
        image: off1,
        title: "Custom Office Workspace",
      },
      {
        image:off2,
        title: "Foldable Desk System",
      },
      {
        image:off3,
        title: "Home Office with Wall Storage",
      },
      {
        image:off4,
        title: "Home Office with Wall Storage",
      },
      {
        image:off5,
        title: "Home Office with Wall Storage",
      },
      {
        image:off6,
        title: "Home Office with Wall Storage",
      },
    ],
    sofaCombos: [
      {
        image:sofa1,
        title: "Murphy Bed with Sofa Combo",
      },
      {
        image:sofa2,
        title: "Pull-down Bed with Sofa",
      },
      {
        image:sofa3,
        title: "Convertible Sofa Wall Bed",
      },
      {
        image:sofa4,
        title: "Convertible Sofa Wall Bed",
      },
      {
        image:sofa5,
        title: "Convertible Sofa Wall Bed",
      },
      {
        image:sofa6,
        title: "Convertible Sofa Wall Bed",
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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
