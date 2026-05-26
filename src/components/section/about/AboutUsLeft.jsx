import { motion } from "framer-motion";

export default function AboutUsLeft() {
  return (
    <motion.div
      className="relative"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }} // Re-triggers on scroll
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <img 
        src="imgs/About_us.png" 
        className="w-[80%] h-[90%] object-contain" 
        loading="lazy"
        alt="About Us"
      />

      {/* Floating Cards */}
      <div className="absolute top-10 left-0 bg-white rounded-xl shadow-lg p-4 w-44 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <p className="text-xs font-semibold">Check our team</p>
        <p className="text-xs text-gray-500">Hi hello everyone</p>
      </div>

      <div className="absolute bottom-6 right-0 bg-white rounded-xl shadow-lg p-4 w-44 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
          <p className="text-xs font-semibold">Verified Account</p>
        </div>
        <p className="text-xs text-gray-500 mt-1">Hi hello everyone</p>
      </div>
    </motion.div>
  );
}