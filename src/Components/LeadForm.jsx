import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 inset-0 mt-20 md:mt-0 flex justify-center items-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
               x
              </button>

              <h2 className="text-2xl md:text-3xl font-bold text-[#172128]  md:mb-4 text-center">
                Request a Design Consultation
              </h2>
              <p className="text-gray-600 text-center text-sm mb-4 md:mb-8">
                Fill out the form below and our design expert will reach out to you.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="Message"
                    required
                    placeholder="Tell us about your project..."
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 h-26 md:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadForm;
