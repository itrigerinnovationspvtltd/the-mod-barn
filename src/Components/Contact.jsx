import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // 🔹 Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh & URL change
    alert("Form submitted!");
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="contact"
      className=" px-6 py-16 md:py-24 lg:px-32 w-full overflow-hidden bg-slate-50"
    >

      <div className="text-center mb-4 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#172128] mb-6">
          Contact With Us
        </h2>
        <p className="text-sm md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Ready to make a move? Let’s build your dream space together — we’d love to hear from you.
        </p>
      </div>


      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto text-gray-700 bg-white p-8 rounded-2xl shadow-xl"
      >
        <div className="flex flex-wrap gap-6">
          <div className="w-full md:w-[48%] text-left">
            <label className="block text-sm md:text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 text-sm md:text-lg rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="w-full md:w-[48%] text-left">
            <label className="block text-sm md:text-lg font-medium mb-2">Your Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 text-sm md:text-lg rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="text-left my-6">
          <label className="block text-sm md:text-lg font-medium mb-2">Message</label>
          <textarea
            name="Message"
            placeholder="Write your message..."
            required
            className="w-full border border-gray-300 text-sm md:text-lg rounded-lg py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <div className="text-center mt-4 md:mt-10">
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg font-semibold py-3 px-12 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
