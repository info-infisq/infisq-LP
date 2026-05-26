import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-16 flex justify-center">
      <div
        className="relative overflow-hidden rounded-3xl w-full max-w-6xl bg-cover bg-center shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
        style={{
          backgroundImage: "url('/imgs/contact_us_bgc.png')",
        }}
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Decorative Elements */}
        <span className="absolute top-6 left-8 w-8 h-6 border border-white/30 rounded-full" />
        <span className="absolute top-20 right-16 w-8 h-10 border border-white/20 rounded-full" />
        <span className="absolute bottom-16 right-24 w-8 h-5 border border-white/20 rounded-full" />

        <span className="absolute top-1/4 right-6 text-white/20 text-4xl">+</span>
        <span className="absolute bottom-1/4 left-10 text-white/20 text-4xl">+</span>

        <span className="absolute top-14 left-1/3 text-white/20 text-xl">✕</span>
        <span className="absolute bottom-14 right-1/3 text-white/20 text-2xl">✕</span>

        <span className="absolute top-1/2 left-6 w-12 h-px bg-white/20" />
        <span className="absolute top-1/3 right-10 w-16 h-px bg-white/15" />

        <span className="absolute bottom-6 right-12 text-white/20 text-3xl">
          ≈
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 lg:px-24 py-20 sm:py-24 lg:py-32 text-white">
          {/* Button */}
          <Link to="/contact">
            <button className="mb-10 flex items-center gap-3 rounded-full border border-white/60 px-10 py-5 text-sm sm:text-base font-medium 
              backdrop-blur-md
              hover:bg-white hover:text-purple-700
              hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.6)]
              transition-all duration-300">
              Contact Us
              <span className="text-xl">↗</span>
            </button>
          </Link>

          <p className="max-w-4xl text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-white/95">
            Whether you have an idea, need technical guidance, want to grow your
            business online, or are looking to start your tech career — we’re
            here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
