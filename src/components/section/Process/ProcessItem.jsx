import { motion } from "framer-motion"
import { stepVariant } from "./animation"

const ProcessItem = ({ step }) => {
  const isOdd = step.id % 2 !== 0

  return (
    <motion.div
      variants={stepVariant}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount:0.35 }}
    >
      {/* DESKTOP / TABLET */}
      <div className="hidden lg:grid grid-cols-[1fr_80px_1fr] items-center">

        {/* LEFT */}
        <div className="flex justify-end pr-8">
          {isOdd ? (
            <img src={step.image} alt={step.title} className="w-60" />
          ) : (
            <div className="text-right max-w-md">
              <div className="bg-linear-to-r from-purple-700 to-pink-500 text-white px-5 py-2 rounded-lg inline-block font-semibold mb-3">
                {step.title}
              </div>
              <p className="text-gray-700">
                {step.description}
              </p>
            </div>
          )}
        </div>

        {/* CENTER NUMBER */}
        {/* <div className="relative hidden lg:flex flex-col items-center"> */}
        <div className="flex justify-center items-center relative">

        {/* LINE MASK */}
        <span className="absolute w-16 h-16 bg-white rounded-full z-0" />

        {/* TOP LINE
        <div className="w-[2px] h-16 bg-purple-300" /> */}

          <motion.span
            className="relative w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-semibold shadow-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            {step.id}
          </motion.span>

        </div>

        {/* RIGHT */}
        <div className="flex justify-start pl-8">
          {isOdd ? (
            <div className="text-left max-w-md">
              <div className="bg-linear-to-r from-purple-700 to-pink-500 text-white px-5 py-2 rounded-lg inline-block font-semibold mb-3">
                {step.title}
              </div>
              <p className="text-gray-700">
                {step.description}
              </p>
            </div>
          ) : (
            <img src={step.image} alt={step.title} className="w-60" />
          )}
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden flex flex-col items-center text-center gap-6">
        <img src={step.image} alt={step.title} className="w-52" />

        <div className="bg-linear-to-r from-purple-700 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold">
          {step.id}. {step.title}
        </div>

        <p className="text-gray-700 max-w-sm">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default ProcessItem

