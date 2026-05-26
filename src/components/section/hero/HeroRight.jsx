import { CloudSnow } from "lucide-react";
import { motion } from "framer-motion";
export default function HeroRight() {
  return (
    <motion.div
      className="flex items-center justify-center flex-1"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.6,
      }}
    >

     
      <img
        src="imgs/hero-banner.png"
        alt="banner.png"
        className="object-contain w-[80%] h-full"
      />
   </motion.div>
  );
}
CloudSnow