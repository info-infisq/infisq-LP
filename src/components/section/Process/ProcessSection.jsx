import { motion } from "framer-motion";
import { processSteps } from "../../../data/homePageContant";
import ProcessItem from "./ProcessItem";
import { containerVariant } from "./animation";
import { Link } from "react-router-dom";

const ProcessSection = () => {
  return (
    <motion.section
      className="relative py-35 bg-white overflow-hidden"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-350 mx-auto px-4 relative">
        {/* LEFT Gradient */}
        <div
          className="
            absolute top-1/2 -translate-y-1/2
            -left-24 sm:-left-40 lg:-left-52
            w-40 sm:w-64 lg:w-50
            h-40 sm:h-64 lg:h-375
            rounded-r-full blur-3xl opacity-50
          "
          style={{
            background: "linear-gradient(90deg, #00C2FF, #FF29C3)",
          }}
        />

        {/* RIGHT Gradient */}
        <div
          className="
            absolute top-1/2 -translate-y-1/2
            -right-24 sm:-right-40 lg:-right-52
            w-40 sm:w-64 lg:w-50
            h-40 sm:h-64 lg:h-375
            rounded-l-full blur-3xl opacity-50
          "
          style={{
            background: "linear-gradient(90deg, #FF29C3, #00C2FF)",
          }}
        />

        {/* Heading */}
        <motion.div
          className="text-center mb-24 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-base-custom tracking-widest uppercase mb-5">
            --- Our Process ---
          </p>
          <h2 className="text-sub-heading-custom">
            How we plan, build, and <br /> deliver scalable solutions
          </h2>
        </motion.div>

        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 top-70 bottom-40 w-0.5 bg-purple-300 -translate-x-1/2" />

        {/* Steps */}
        <div className="space-y-32 relative z-10">
          {processSteps.map((step, index) => (
            <ProcessItem key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-24 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/contact">
            <button className="bg-purple-700 hover:bg-purple-800 transition text-white px-12 py-3 rounded-full shadow-lg cursor-pointer">
              Start
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
