import AboutUsLeft from "./AboutUsLeft";
import AboutUsRight from "./AboutUsRight";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="w-full flex flex-col gap-10 py-10 overflow-hidden">
      
      {/* Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }} // Animates on scroll up and down
      >
        <p className="text-purple-600 text-base-custom tracking-wider mb-2">
          --- About us ---
        </p>
      </motion.div>

      <div className="max-w-350 w-[90%] mx-auto h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AboutUsLeft />
          <AboutUsRight />
        </div>
      </div>
      
    </section>
  );
}