import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import homeimg from "../assets/morphy/Morphy1.webp";

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
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // clicking overlay closes form
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 inset-0 flex items-end md:items-end justify-center md:justify-end p-4 md:p-6 pointer-events-none"
          >
            {/* Form wrapper with pointer-events to allow clicks inside */}
            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md md:max-w-lg flex flex-col md:flex-row relative pointer-events-auto"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Left Side Image - Hidden on Mobile */}
              <div className="md:w-1/2 hidden md:block relative">
                <img
                  src={homeimg}
                  alt="Murphy Beds"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent"></div>
              </div>

              {/* Right Side Form */}
              <div className="md:w-1/2 w-full p-6 relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10"
                >
                  ×
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center md:text-left">
                  Connect With Us
                </h2>
                <p className="text-gray-600 text-sm mb-4 text-center md:text-left">
                  Let’s build your dream space together — we’d love to hear from you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      required
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="Phone"
                      required
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="Message"
                      required
                      placeholder="Tell us about your project..."
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-600 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition duration-300"
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
