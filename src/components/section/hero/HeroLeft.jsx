import Btn from "../../ui/Btn";
import { heroSection } from "../../../data/homePageContant";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypingText from "../../ui/TypingText";
export default function HeroLeft() {
  return (
    <div className="h-full flex flex-col gap-8  items-start flex-1">
      {/*Typing animation */}
      <h1 className="text-heading-custom leading-10 lg:leading-18 ">
        <TypingText text={`${heroSection.headline.start + " "}`} />
        <span className="text-primary">
          <TypingText text={heroSection.headline.highlight} delay={0.8}/>
          </span>
          <TypingText text={`${" "+heroSection.headline.end}`} delay={1.6}/>
      </h1>
      {/* Paragraph- fade in */}
      <motion.p
        className="text-base-custom leading-6 md:leading-8 lg:leading-10 text-justify"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
      >
        {heroSection.subHeadline}
      </motion.p>
      {/* Button - fade in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.8 }}
      >
        <Link to="/contact">
          <Btn label="Join Us" />
        </Link>
      </motion.div>
    </div>
  );
}
