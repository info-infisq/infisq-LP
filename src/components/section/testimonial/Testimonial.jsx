import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../../../data/homePageContant";
import { cardVariants } from "./testimonialVariants";

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  // auto loop
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-2 ">
      <div className="max-w-350 mx-auto rounded-3xl px-16 py-8 relative overflow-hidden">

        {/* Heading */}
       <div className="text-center mb-2">
          <p className="text-purple-600 font-semibold tracking-wider mb-2">
            --- Testimonials ---
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What our customers say about us
          </h2>
        </div>
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 
                     w-12 h-12 bg-white rounded-full border shadow z-50"
        >
          <ChevronLeft className="mx-auto" />
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 
                     w-12 h-12 bg-white rounded-full border shadow z-50"
        >
          <ChevronRight className="mx-auto" />
        </button>

        {/* Cards */}
        <div className="relative h-65 flex items-center justify-center">
          {testimonials.map((t, i) => {
            let position = "right";
            if (i === index) position = "center";
            if (i === index - 1 || (index === 0 && i === testimonials.length - 1))
              position = "left";

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                animate={position}
                initial={false}
                className="absolute w-90 rounded-2xl bg-white p-6"
                style={{
                  boxShadow:
                    position === "center"
                      ? "0 30px 60px rgba(0,0,0,0.08)"
                      : "0 10px 25px rgba(0,0,0,0.04)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-purple-600">{t.role}</p>
                  </div>
                </div>

                {/* <p className="text-gray-600 leading-relaxed">
                  {t.text}
                </p> */}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-600 leading-relaxed"
                >
                          {t.text}
                          
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-gray-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
