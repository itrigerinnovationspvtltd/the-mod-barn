import React from 'react'
import {motion} from 'framer-motion'

import img_1 from '../assets/gallery1.webp'
import img_2 from '../assets/gallery2.webp'
import img_3 from '../assets/gallery3.webp'
import img_4 from '../assets/gallery4.webp'
import img_5 from '../assets/gallery5.webp'
import img_6 from '../assets/gallery6.webp'
import img_7 from '../assets/gallery7.webp'
import img_8 from '../assets/gallery8.webp'
import img_9 from '../assets/gallery9.webp'

const galleryItems = [
  {
    src: img_1,
    alt: 'A Art Of Touch',
    title: 'A Art Of Touch',
  },
  {
    src: img_2,
    alt: 'Beach Vibe-Art',
    title: 'Beach Vibe-Art',
  },
  {
    src: img_3,
    alt: 'Hollywood loft',
    title: 'Hollywood loft',
  },
  {
    src: img_4,
    alt: 'Laguna Beach Design',
    title: 'Laguna Beach Design',
  },
  {
    src: img_5,
    alt: 'Look Book Simplicity',
    title: 'Look Book Simplicity',
  },
  {
    src: img_6,
    alt: 'Mediterranean Groove',
    title: 'Mediterranean Groove',
  },
  {
    src: img_7,
    alt: 'Mod Marlo',
    title: 'Mod Marlo',
  },
  {
    src: img_8,
    alt: 'Mod Wall Bed',
    title: 'Mod Wall Bed',
  },
  {
    src: img_9,
    alt: 'Topanga-Twins',
    title: 'Topanga-Twins',
  }
];

const  Gallery = ()=>  {
  return (
    <motion.section
    initial={{opacity: 0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}}
    className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#172128] mb-6">
            Our Premium Murphy & Wall Bed Collection
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover our expertly designed Murphy and wall beds that combine smart space-saving functionality with elegant style. Perfect for modern homes, our collection transforms any room into a multi-purpose living space with comfort and sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 from-slate-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Gallery