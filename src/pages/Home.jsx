import Hero from "../components/section/hero/Hero";
import WhyChooseUs from "../components/section/whyChooseUs/WhyChooseUs";
import AboutUs from "../components/section/about/AboutUs";
import TechCarousel from "../components/section/techCarousel/TechCarousel";
import FAQ from "../components/section/faq/FAQ";
import OurServices from "../components/section/ourService/OurService";
import Testimonial from "../components/section/testimonial/Testimonial";
import ContactSection from "../components/section/contact/ContactSection";
import ProcessSection from "../components/section/Process/ProcessSection";

export default function Home() {
  return (
    <section>
      <Hero />
      <TechCarousel />
      <AboutUs />
      <OurServices />
      <ProcessSection />
      <WhyChooseUs />
      <Testimonial />
      <FAQ />
      <ContactSection />
    </section>
  );
}
