import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    name: "Rohit Sharma",
    profile: "https://i.pravatar.cc/100?img=33",
    productImage:
      "https://images.unsplash.com/photo-1663337049364-5c6ba8ba1e78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    rating: 5,
    date: "October 2025",
    review:
      "Absolutely love my new Murphy bed! It looks elegant and saves so much space. The team handled everything from design to installation perfectly.",
  },
  {
    name: "Priya Mehta",
    profile: "https://i.pravatar.cc/100?img=5",
    productImage:
      "https://images.unsplash.com/photo-1742319096912-7bb94fdfeb03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    rating: 4,
    date: "September 2025",
    review:
      "Got a wall bed with a sofa combo for my studio apartment. It’s comfortable, stylish, and super practical for everyday use!",
  },
  {
    name: "Amit Verma",
    profile: "https://i.pravatar.cc/100?img=7",
    productImage:
      "https://images.unsplash.com/photo-1709720402728-27420c02f50b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    rating: 5,
    date: "August 2025",
    review:
      "Fantastic quality and excellent service! The installation was quick and the finish exceeded my expectations. Highly recommended!",
  },
  {
    name: "Simran Kaur",
    profile: "https://i.pravatar.cc/100?img=8",
    productImage:
      "https://images.unsplash.com/photo-1610677420570-366cba5fbdbc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbCUyMGJlZHMlMjBmcmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    rating: 5,
    date: "August 2025",
    review:
      "Beautiful craftsmanship! The Murphy bed perfectly matches my interiors and folds up so easily. Worth every penny!",
  },
  {
    name: "Manish Gupta",
    profile: "https://i.pravatar.cc/100?img=9",
    productImage:
      "https://media.istockphoto.com/id/178971709/photo/hotel-room-in-historic-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=t_GUma-R23enqYiCne0ToUjGvAh3P6OAuYVBCIsEZRo=",
    rating: 4,
    date: "July 2025",
    review:
      "Got a wall bed installed in our guest room. It’s sturdy and looks amazing. Great option for saving space without compromising on comfort.",
  },
  {
    name: "Neha Joshi",
    profile: "https://i.pravatar.cc/100?img=11",
    productImage:
      "https://plus.unsplash.com/premium_photo-1683121698995-fd487f02df4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mYSUyMGZyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 5,
    date: "June 2025",
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
