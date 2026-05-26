import { motion, useReducedMotion } from "framer-motion";
import WhyChooseUsLeft from "./WhyChooseUsLeft";
import WhyChooseUsRight from "./WhyChooseRight";

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="relative w-full py-20 overflow-hidden flex justify-center items-center"
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 30%, rgba(236, 72, 154, 0.5), transparent 40%),
            radial-gradient(circle at 90% 20%, rgba(138, 92, 246, 0.51), transparent 40%),
            radial-gradient(circle at 30% 90%, rgba(99, 101, 241, 0.49), transparent 40%),
            #fdd9fd6d
          `,
        }}
      />

      {/* ================= FLOATING RIGHT PARTICLE ================= */}
  {/* Top Right Floating Dot */}
{!shouldReduceMotion && (
  <motion.div
    animate={{ y: [0, -25, 0], scale: [1, 1.2, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="
      absolute top-20 right-16
      w-3 h-3
      rounded-full
      bg-gradient-to-r from-purple-500 to-pink-500
      blur-sm
      z-0
    "
  />
)}

{/* Bottom Left Floating Dot */}
{!shouldReduceMotion && (
  <motion.div
    animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="
      absolute bottom-24 left-20
      w-2.5 h-2.5
      rounded-full
      bg-gradient-to-r from-pink-500 to-purple-500
       blur-sm
      z-0 hidden sm:block
    "
  />
)}

{/* Right Glow Blob */}
{!shouldReduceMotion && (
  <motion.div
    animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    className="
      absolute top-32 right-10
      w-14 h-14
      rounded-full
      bg-gradient-to-r from-purple-500 to-pink-500
      blur-sm 
      z-0 hidden md:block
    "
  />
)}

{/* Left Glow Blob */}
{!shouldReduceMotion && (
  <motion.div
    animate={{ x: [-20, 20, -20], y: [0, 40, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="
      absolute top-1/2 -left-16
      w-36 h-36
      rounded-full
      bg-gradient-to-r from-pink-400 to-purple-500
      blur-sm
      z-0 hidden lg:block
    "
  />
)}


      {/* ================= CONTENT ================= */}
      <div className="relative w-[90%] max-w-7xl mx-auto z-10">
        <h2 className="text-sub-heading-custom text-center mb-16 font-bold">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative">
            {!shouldReduceMotion && (
              <motion.div
                animate={{ x: [-20, 20, -20], y: [0, 40, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-14 top-24 w-28 h-28 
                           rounded-full bg-pink-400/30 
                           blur-3xl z-0 hidden lg:block"
              />
            )}

            <WhyChooseUsLeft />
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-first lg:order-last flex justify-center"
          >
            <WhyChooseUsRight />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
