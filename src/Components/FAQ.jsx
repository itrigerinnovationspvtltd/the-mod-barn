import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is a Murphy bed or wall bed?",
    answer:
      "A Murphy bed (also known as a wall bed) is a space-saving bed that folds up vertically into a cabinet or wall when not in use — perfect for maximizing floor space in compact rooms or studios.",
  },
  {
    question: "Are your Murphy beds easy to use?",
    answer:
      "Yes! Our Murphy beds are designed with smooth lift mechanisms and counterbalanced systems, allowing you to fold them up or down effortlessly and safely with minimal effort.",
  },
  {
    question: "Can I customize the design and finish of my wall bed?",
    answer:
      "Absolutely! We offer a variety of materials, colors, finishes, and cabinet styles so your wall bed matches your room’s decor perfectly.",
  },
  {
    question: "Do you offer Murphy bed and sofa combo options?",
    answer:
      "Yes, we specialize in Murphy bed + sofa combinations that let you use the same space for both seating and sleeping — ideal for guest rooms, studios, or small apartments.",
  },
  {
    question: "Can the sofa stay in place when the bed is opened?",
    answer:
      "Yes. Our sofa-combo designs allow the bed to open smoothly over the sofa without moving it, thanks to a smart, fold-forward mechanism.",
  },  
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, we provide full professional installation to ensure your Murphy bed or sofa combo is securely fitted and functions smoothly.",
  },
  {
    question: "Are Murphy beds durable and long-lasting?",
    answer:
      "Definitely. Our beds are built using high-quality materials and hardware, ensuring durability, smooth operation, and comfort for years of daily use.",
  },
];


function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      <h2 className="text-2xl sm:text-5xl font-bold text-center mb-8 text-[#172128]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-2 sm:p-4 bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg sm:text-xl font-semibold text-[#172128]">
                {faq.question}
              </span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`mt-2 text-[#172128] overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
