import React from 'react'
import { motion } from 'framer-motion'
import profile_img_1 from '../assets/profile_img_1.png'
import profile_img_2 from '../assets/profile_img_2.png'
import profile_img_3 from '../assets/profile_img_3.png'
import star_icon from '../assets/star_icon.svg'

const testimonialsData = [
    {
        name: "Donald Jackman",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "I had an amazing experience with this company. They helped me choose the perfect wall bed for my apartment and explained every detail clearly. The installation was quick, and the quality is outstanding. My room now feels twice as spacious — I couldn’t be happier!"
    },
    {
        name: "Richard Nelson",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "Absolutely love my new Murphy bed! The team was so professional and transparent throughout the process. They listened to my needs, suggested the best design, and delivered exactly what they promised. Great craftsmanship and excellent customer service!"
    },
    {
        name: "James Washington",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "This company truly transformed my small space into something beautiful and functional. Their wall bed solutions are top-notch, and the team made sure everything was done perfectly. Highly recommend them to anyone looking to maximize space without compromising style."
    }
];

const Testimonals = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}}
    id='testimonials' className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Experiences From Those Who Found Smart Living With Our Wall Beds</p>

    <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index)=> (
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4'/>
                <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: testimonial.rating}, (item, index) =>(
                        <img key={index} src= {star_icon} alt="" />
                    ))}
                </div>
                <p className='text-gray-600'>{testimonial.text}</p>
            </div>
        ))}
    </div>

    </motion.div>
  )
}

export default Testimonals
