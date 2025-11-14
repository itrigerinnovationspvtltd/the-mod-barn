import React from 'react'
import { motion } from 'framer-motion'
// set 1 images
import img1 from '../assets/set1/CompactSpace-Saving-VeniceCanal.webp'
import img2 from '../assets/set1/El-Segundo-Murphy.webp'
import img3 from '../assets/set1/Modern-MurphyBed-Hollywood.webp'
import img4 from '../assets/set1/Modern-Murphy-Bed-Malibu-Wave.webp'
import img5 from '../assets/set1/Promotional-MurphyBed-Culver.webp'
import img6 from '../assets/set1/Promotional-MurphyBed-Jori.webp'

// set 2 images
import image1 from '../assets/set2/Berts-Window-View.webp'
import image2 from '../assets/set2/Conrad.webp'
import image3 from '../assets/set2/Malibu-Loft-Rowen.webp'
import image4 from '../assets/set2/Mediterranian-Groove.webp'
import image5 from '../assets/set2/Mod-Mix-Media.webp'
import image6 from '../assets/set2/Newport-murphy-beddesign.webp'
import image7 from '../assets/set2/Simplicity.webp'
import image8 from '../assets/set2/The-Mod.webp'
import image9 from '../assets/set2/Wilshire-Murphy-Bed2-1.webp'
const classics = [
  {
    title: "Compact Space Saving-Venice Canal",
    img: img1,
  },
  {
    title: "El Segundo Murphy",
    img: img2,
  },
  {
    title: "Modern Murphy Bed- Hollywood",
    img: img3,
  },
  {
    title: "Modern Murphy Bed-Malibu Wave",
    img: img4,
  },
  {
    title: "Promotional Murphy Bed- Culver",
    img: img5,
  },
  {
    title: "Promotional Murphy Bed- Jori",
    img: img6,
  },
]

const customDesigns = [
  {
    title: "Berts Window View ",
    img: image1,
  },
  {
    title: "Conrad",
    img: image2,
  },
  {
    title: "Malibu Loft - Rowen ",
    img: image3,
  },
  {
    title: "Mediterranian Groove",
    img: image4,
  },
  {
    title: "Mod-Mix Media",
    img: image5,
  },
  {
    title: "Newport murphy bed design",
    img: image6,
  },
  {
    title: "Simplicity",
    img: image7,
  },
  {
    title: "The Mod",
    img: image8,
  },
  {
    title: "Wilshire Murphy Bed 2-1",
    img: image9,
  },
]

const Gallery = () => {
  return (
    <motion.section id='gallery'
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="py-24 bg-linear-to-b from-gray-300 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-[#172128] mb-6">
            Our Premium Murphy & Wall Bed Collection
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover our expertly designed Murphy and wall beds that combine smart space-saving functionality with elegant style.
          </p>
        </div>

        {/* --- The Classics --- */}
        <div className="max-w-7xl mx-auto sm:px-6 rounded-md mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8">
            The Classics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {classics.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:scale-[1.03]"
              >
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Innovative Custom Designs --- */}
        <div className="max-w-7xl mx-auto sm:px-6 rounded-md">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8">
            Innovative custom designs offering space saving, versatility, and style.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {customDesigns.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:scale-[1.03]"
              >
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Gallery
