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
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready To Make A Move? Let's Build YOur Future Together
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Name
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="text-left my-6">
          Message
          <textarea
            name="Message"
            placeholder="Message"
            required
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
        >
          {" "}
          Send Message{" "}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
