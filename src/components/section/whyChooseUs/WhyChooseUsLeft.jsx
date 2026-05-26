import { motion } from "framer-motion";
import { whyChooseUsContant } from "../../../data/homePageContant";

export default function WhyChooseUsLeft() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8, // Waits for the image to finish
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="flex flex-col items-center gap-5 relative z-10" // z-10 to stay above the internal particle
    >
      {whyChooseUsContant.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          // Added backdrop-blur and slight transparency so particles show through
          className="w-full flex items-center bg-white/90 backdrop-blur-sm gap-5 p-4 rounded-xl shadow-lg border border-white/50"
        >
          <div className="w-16 h-16 shrink-0 flex items-center justify-center">
            <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain"/>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-purple-600 font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}