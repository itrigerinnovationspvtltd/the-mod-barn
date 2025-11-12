import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img_1 from "../assets/gallery1.webp";
import img_2 from "../assets/gallery2.webp";
import img_3 from "../assets/gallery3.webp";
import img_4 from "../assets/gallery4.webp";
import img_5 from "../assets/gallery5.webp";
import img_6 from "../assets/gallery6.webp";
import img_7 from "../assets/gallery7.webp";
import img_8 from "../assets/gallery8.webp";
import img_9 from "../assets/gallery9.webp";

const galleryItems = [
  { src: img_1, alt: "A Art Of Touch", title: "A Art Of Touch" },
  { src: img_2, alt: "Beach Vibe-Art", title: "Beach Vibe-Art" },
  { src: img_3, alt: "Hollywood loft", title: "Hollywood loft" },
  { src: img_4, alt: "Laguna Beach Design", title: "Laguna Beach Design" },
  { src: img_5, alt: "Look Book Simplicity", title: "Look Book Simplicity" },
  { src: img_6, alt: "Mediterranean Groove", title: "Mediterranean Groove" },
  { src: img_7, alt: "Mod Marlo", title: "Mod Marlo" },
  { src: img_8, alt: "Mod Wall Bed", title: "Mod Wall Bed" },
  { src: img_9, alt: "Topanga-Twins", title: "Topanga-Twins" },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-16 md:py-28 bg-linear-to-b from-gray-100 to-gray-50 overflow-hidden"
    >
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 relative inline-block">
          Our Premium Murphy & Wall Bed Collection
          
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Discover our expertly designed Murphy and wall beds that combine smart
          space-saving functionality with elegant style. Perfect for modern
          homes, our collection transforms any room into a multi-purpose living
          space with comfort and sophistication.
        </p>

        {/* Slider */}
        <div className="relative max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <AnimatePresence mode="wait">
            <motion.img
              key={galleryItems[current].src}
              src={galleryItems[current].src}
              alt={galleryItems[current].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-[350px] object-cover"
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent rounded-3xl"></div>

          {/* Frosted title */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/30 backdrop-blur-md rounded-full text-gray-100 font-semibold text-lg shadow-md">
            {galleryItems[current].title}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-gray-800 p-3 rounded-full shadow-lg transition"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-gray-800 p-3 rounded-full shadow-lg transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {galleryItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current
                  ? "bg-gray-900 w-6 h-3 rounded-full"
                  : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
