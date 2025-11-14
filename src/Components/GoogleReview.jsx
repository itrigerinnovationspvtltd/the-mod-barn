import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import img_1 from '../assets/testimonial/Chen2.webp'
import img_2 from '../assets/testimonial/Shannon.webp'
import img_3 from '../assets/testimonial/Tim-CNC-combo-MurphyBed.webp'
import img_4 from '../assets/testimonial/Kelly.webp'
import img_5 from '../assets/testimonial/Morgan-MurphyBed.webp'
import img_6 from '../assets/testimonial/Kinzy-ADU.webp'
import img_7 from '../assets/testimonial/Priya-Murphy-Bed.webp'

const reviews = [
  {
    name: "Chen",
    profile: "https://i.pravatar.cc/100?img=33",
    productImage:img_1,
    rating: 5,
    date: "October 2025",
    review:
      "Absolutely love my new Murphy bed! It looks elegant and saves so much space. The team handled everything from design to installation perfectly.",
  },
  {
    name: "Shannon",
    profile: "https://i.pravatar.cc/100?img=5",
    productImage:
      img_2,
    rating: 4,
    date: "September 2025",
    review:
      "Got a wall bed with a sofa combo for my studio apartment. It’s comfortable, stylish, and super practical for everyday use!",
  },
  {
    name: "Tim",
    profile: "https://i.pravatar.cc/100?img=7",
    productImage:
      img_3,
    rating: 5,
    date: "August 2025",
    review:
      "Fantastic quality and excellent service! The installation was quick and the finish exceeded my expectations. Highly recommended!",
  },
  {
    name: "Kelly",
    profile: "https://i.pravatar.cc/100?img=9",
    productImage:
      img_4,
    rating: 5,
    date: "August 2025",
    review:
      "Beautiful craftsmanship! The Murphy bed perfectly matches my interiors and folds up so easily. Worth every penny!",
  },
  {
    name: "Morgan",
    profile: "https://i.pravatar.cc/100?img=12",
    productImage:
      img_5,
    rating: 4,
    date: "July 2025",
    review:
      "Got a wall bed installed in our guest room. It’s sturdy and looks amazing. Great option for saving space without compromising on comfort.",
  },
  {
    name: "Kinzy",
    profile: "https://i.pravatar.cc/100?img=11",
    productImage:
      img_6,
    rating: 5,
    date: "June 2025",
    review:
      "I love my wall bed with sofa combo. It’s elegant, functional, and the team was super professional throughout the installation.",
  },
  {
    name: "Priya",
    profile: "https://i.pravatar.cc/100?img=15",
    productImage:
      img_7,
    rating: 5,
    date: "August 2025",
    review:
      "I love my wall bed with sofa combo. It’s elegant, functional, and the team was super professional throughout the installation.",
  },
];

const GoogleReview = () => {
  return (
    <section className=" mx-auto py-16 sm:py-24 px-4 md:px-20 bg-linear-to-b from-gray-50 via-white to-gray-300 ">
      <h2 className="text-center text-3xl md:text-5xl font-bold  text-[#172128] mb-16">
        What Our Customers Say on Google ⭐
      </h2>
      {/* Scrollable review container */}
      <div className="flex gap-6 overflow-x-auto pb-4   ">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="shrink-0 w-[260px] md:w-[340px] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl"
          >
            {/* Profile Section */}
            <div className="flex items-center p-4 border-b border-gray-100">
              <img
                src={item.profile}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="font-semibold text-[#202124]">{item.name}</h3>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <FaCheckCircle className="text-blue-500 mr-1" />
                  <span>Verified Review • {item.date}</span>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <img
              src={item.productImage}
              alt="Installed Product"
              className="w-full h-40 object-cover px-2"
            />

            {/* Review Text */}
            <div className="p-4">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < item.rating ? "text-yellow-400" : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#202124] text-sm leading-relaxed line-clamp-4">
                {item.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleReview;
