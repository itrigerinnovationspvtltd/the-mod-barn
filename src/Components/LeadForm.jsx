import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import homeimg from '../assets/morphy/MurphyBeds.jpg'

const LeadForm = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    e.target.reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0  md:bg-black/80  z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Container*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 top-5 right-8 md:bottom-0 md:right-0 lg:top-16 p-4  md:p-7"
          >
             
            <div className=" rounded-2xl shadow-xl w-[90vw] max-w-sm p-6 relative">
              <div
              className="bg-white rounded-2xl shadow-xl w-[90vw] max-w-sm p-6 relative bg-cover bg-center"
              style={{ backgroundImage: `url(${homeimg})` }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white hover:text-gray-200 text-2xl font-bold"
              >
                x
              </button>

              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 text-center">
                Connect With Us
              </h2>
              <p className="text-white text-center text-sm mb-4">
                Let’s build your dream space together — we’d love to hear from you.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm text-white font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Enter your name"
                    className="w-full border border-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-black/50 text-white"
                  />
                </div>

                {/* Added Phone Number Field */}
                <div>
                  <label className="block text-sm text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel:"
                    name="Phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full border border-white text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-black/50"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-white text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-black/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    name="Message"
                    required
                    placeholder="Tell us about your project..."
                    className="w-full border border-white text-white rounded-lg py-2 px-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 bg-black/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadForm;
