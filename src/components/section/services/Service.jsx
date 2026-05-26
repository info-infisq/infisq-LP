import { Fragment } from "react";
import { motion } from "framer-motion";

/* ===============================
   ANIMATION VARIANTS
================================ */
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ===============================
   COMPONENT
================================ */
const Service = ({ serviceData, setActiveTab, activeTab }) => {
  return (
    <Fragment>
      {/* ===============================
          SERVICE CONTENT
      =============================== */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TEXT */}
        <motion.div variants={fadeIn}>
          <h3 className="text-sub-heading-custom text-primary mb-3">
            {serviceData.title}
          </h3>

          <p className="text-base-custom mb-3 text-justify">
            {serviceData.subtitle}
          </p>

          <p className="text-gray-700 text-base-custom mb-4 text-justify">
            {serviceData.description}
          </p>

          <h4 className="text-base-custom font-semibold mb-3">
            What we deliver
          </h4>

          <div className="flex flex-wrap gap-2">
            {serviceData.features.map((item, i) => (
              <motion.span
                key={i}
                variants={fadeIn}
                className="px-3 py-1.5 text-sm rounded-full border border-primary text-black"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeIn}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-pink-400 to-purple-500 rounded-3xl blur-3xl opacity-20" />

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-contain bg-no-repeat"
            style={{
              backgroundImage: "url('/imgs/service section/bdphoto.png')",
            }}
          />

          {/* Foreground Image */}
          <img
            src={serviceData.imgUrl}
            alt="Service illustration"
            className="relative z-10 w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* ===============================
          TECH STACK
      =============================== */}
      <motion.div
        className="text-center"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeIn}
          className="text-sub-heading-custom text-primary font-normal mb-8"
        >
          Our Tech Stack
        </motion.h2>

        {/* TABS */}
        <motion.div
          variants={fadeIn}
          className="w-full sm:w-[90%] lg:w-[50%] mx-auto mb-12"
        >
          <div
            className="
              flex gap-2
              p-2
              rounded-full
              border border-pink-500
              bg-white
              overflow-x-auto sm:overflow-visible
              justify-start sm:justify-center
              scrollbar-hide
            "
          >
            {Object.keys(serviceData.techData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeTab === tab
                      ? "bg-linear-to-r from-pink-600 to-purple-600 text-white shadow-md"
                      : "text-gray-700 hover:text-pink-600"
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* TECH CARDS */}
        <motion.div
          className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={stagger}
        >
          {serviceData.techData[activeTab]?.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-14 h-14 sm:w-10 sm:h-10 lg:w-16 lg:h-16 mx-auto object-contain"
              />
              <p className="mt-2 text-sm font-semibold text-gray-700">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Service;
