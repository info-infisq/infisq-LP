import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { faqs } from "../../../data/homePageContant";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // FAQ items appear one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Re-animates on scroll up
      variants={containerVariants}
      className="relative py-20 px-4 bg-white overflow-hidden"
    >
      {/* Moving Background Glows */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-y-1/2 -left-20 sm:-left-32 lg:-left-40 w-40 sm:w-60 md:w-[320px] lg:w-100 h-40 sm:h-60 md:h-80 lg:h-100 rounded-r-full blur-3xl opacity-50"
        style={{ background: "linear-gradient(90deg, #00C2FF, #FF29C3)" }}
      />

      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -translate-y-1/2 -right-20 sm:-right-32 lg:-right-40 w-40 sm:w-60 md:w-[320px] lg:w-100 h-40 sm:h-60 md:h-80 lg:h-100 rounded-l-full blur-3xl opacity-50"
        style={{ background: "linear-gradient(90deg, #FF29C3, #00C2FF)" }}
      />

      <div className="max-w-450 mx-auto flex flex-col items-center relative z-10">
        {/* Heading Animation */}
        <motion.div 
          variants={itemVariants}
          className="mb-12 flex flex-col items-center gap-5"
        >
          <h2 className="text-4xl font-bold text-center">
            <span className="text-primary">FAQ</span> - Frequently Asked Questions
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-primary" 
          />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6 w-full md:w-[60%] lg:w-[50%]">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl overflow-hidden bg-white"
                style={{ border: "1.5px solid var(--color-primary)" }}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-base-custom font-semibold text-black">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-2xl font-light"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </button>

                {/* Answer with AnimatePresence for smooth height expansion */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;