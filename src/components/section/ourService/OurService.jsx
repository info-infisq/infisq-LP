import ServiceCard from "./ServiceCard";
import { ourServiceCardInfo } from "../../../data/homePageContant";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const MotionLink = motion(Link);

export default function OurServices() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 10% 30%, #e940db46, transparent 40%),
          radial-gradient(circle at 90% 20%, #c471ed80, transparent 40%),
          radial-gradient(circle at 30% 90%, #f64f5a6c, transparent 40%),
          #ffffff
        `,
      }}
    >
      {/* ================= FLOATING ELEMENTS ================= */}
      {!shouldReduceMotion && (
        <>
          {/* Top Right Floating Dot */}
          <motion.div
            animate={{ y: [0, -25, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute top-20 right-16
              w-3 h-3
              rounded-full
              bg-gradient-to-r from-purple-500 to-pink-500
              blur-sm
              will-change-transform
              pointer-events-none
              z-0
            "
          />

          {/* Bottom Left Floating Dot */}
          <motion.div
            animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute bottom-20 left-5
              w-15 h-15
              rounded-full
              bg-gradient-to-r from-pink-500 to-purple-500
              blur-sm
              will-change-transform
              pointer-events-none
              z-0 hidden sm:block
            "
          />

          {/* Right Glow Blob */}
          <motion.div
            animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute top-32 right-10
              w-14 h-14
              rounded-full
              bg-gradient-to-r from-purple-500 to-pink-500
              blur-sm
              will-change-transform
              pointer-events-none
              z-0 hidden md:block
            "
          />

          {/* Left Ambient Glow Blob */}
          <motion.div
            animate={{ x: [-20, 20, -20], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute top-1 -left-16
              w-36 h-36
              rounded-full
              bg-gradient-to-r from-pink-400 to-purple-500
              blur-sm
              will-change-transform
              pointer-events-none
              z-0 hidden lg:block
            "
          />
        </>
      )}

      {/* ================= CONTENT ================= */}
      <div className="max-w-450 mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple-600 tracking-wider mb-2">
            --- Our services ---
          </p>
          <h2 className="text-sub-heading-custom font-bold text-gray-900">
            Always we offer the best <br />
            services for <span className="text-purple-600">success!</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="
            flex flex-col items-center gap-6
            lg:flex-row lg:justify-center lg:gap-6
            lg:overflow-x-auto
          "
        >
          {ourServiceCardInfo.map((service) => (
            <MotionLink
              key={service.id}
              to={service.path}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="
                group relative
                w-full sm:w-[85%]
                h-75 sm:h-80 lg:h-95
                rounded-3xl overflow-hidden
                border border-purple-400/40
                cursor-pointer

                transition-all duration-500 ease-out

                /* Desktop expand logic */
                lg:flex-shrink-0
                lg:basis-[220px]
                lg:hover:basis-[340px]
                transition-[flex-basis]

              lg:hover:border-purple-500
              lg:hover:shadow-[0_30px_70px_-20px_rgba(168,85,247,0.8)]
              "
            >
              <ServiceCard
                number={service.id}
                image={service.imgUrl}
                title={service.title}
                description={service.description}
              />
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
