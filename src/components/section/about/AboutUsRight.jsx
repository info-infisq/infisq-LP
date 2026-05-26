import { motion } from "framer-motion";

export default function AboutUsRight() {
  return (
    <motion.div
      className="my-5"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="text-sub-heading-custom text-purple-600 leading-snug">
        Who We Are ?
      </p>
      <h2 className="text-sub-heading-custom text-gray-900 leading-snug my-4">
        We don’t just deliver projects. We build systems people can trust and grow with.
      </h2>
      <p className="text-gray-600 mb-6 text-base-custom text-justify">
        We are a technology-focused team founded by senior engineers who believe
        great software starts with clear thinking, clean architecture, and
        honest execution. With over 8+ years of hands-on industry experience...
      </p>
    </motion.div>
  );
}