// icon
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { useState } from "react";
import FAQ from "../components/section/faq/FAQ";

export default function Contact() {
  const URI =
    "https://script.google.com/macros/s/AKfycbzFqgWYRAveyxxHMZ-DgJ1KBSMunDEoattuRIrzvbSY8XhmjsI6xqr5aMEL1nU9q9F-/exec";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phno: "",
    occupation: "",
    subject: "",
    message: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setForm((prv) => {
      return { ...prv, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phno", form.phno);
      formData.append("occupation", form.occupation);
      formData.append("subject", form.subject);
      formData.append("message", form.message);

      const res = await fetch(URI, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* ================= HERO SECTION (TOP) ================= */}
      <div
        className="relative h-80 md:h-95 w-full flex items-center justify-center"
        style={{
          backgroundImage: "url('/imgs/contact_us_bgc.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r opacity-90"></div>

        {/* Text */}
        <div className="relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Contact Us
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Have A Project Idea? Let’s Talk
          </p>
        </div>
      </div>

      <section className="min-h-screen bg-linear-to-br from-blue-50 via-purple-100 to-pink-100 p-10">
      {/* ================= CONTACT SECTION ================= */}

      {/* Cards Wrapper */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-4 mb-10
          snap-x snap-mandatory

          md:grid md:grid-cols-3
          md:gap-6
          md:overflow-visible

          max-w-6xl mx-auto
        "
      >
        {/* ================= CARD 1 ================= */}
        <div
          className="
            snap-start shrink-0
            w-72 md:w-auto
            bg-white rounded-xl shadow p-6
            text-center group
          "
          tabIndex={0}
        >
          <div
            className="
              text-black text-3xl mb-3 flex justify-center
              group-hover:text-purple-600
              group-active:text-purple-600
              group-focus-within:text-purple-600
              transition-colors duration-300
            "
          >
            <HiLocationMarker />
          </div>

          <h3 className="font-semibold">Office location</h3>
          <p className="text-sm text-gray-500 mt-1">
            B-205, Golden Valley Apartments, Nagaramalai Adivaram, New Fairlands, SALEM-636004.
          </p>
        </div>

        {/* ================= CARD 2 ================= */}
        <div
          className="
            snap-start shrink-0
            w-72 md:w-auto
            bg-white rounded-xl shadow p-6
            text-center group cursor-pointer
          "
          tabIndex={0}
        >
          <div
            className="
              text-black text-3xl mb-3 flex justify-center
              group-hover:text-purple-600
              group-active:text-purple-600
              group-focus:text-purple-600
              transition-colors duration-300
            "
          >
            <FaPhoneAlt />
          </div>

          <h3 className="font-semibold">Call us</h3>
          <p className="text-sm text-gray-500 mt-1">
            +91 9363938143
          </p>
        </div>

        {/* ================= CARD 3 ================= */}
        <div
          className="
            snap-start shrink-0
            w-72 md:w-auto
            bg-white rounded-xl shadow p-6
            text-center group cursor-pointer
          "
          tabIndex={0}
        >
          <div
            className="
              text-black text-3xl mb-3 flex justify-center
              group-hover:text-purple-600
              group-active:text-purple-600
              group-focus:text-purple-600
              transition-colors duration-300
            "
          >
            <MdEmail />
          </div>

          <h3 className="font-semibold">Mail Here</h3>
          <p className="text-sm text-gray-500 mt-1">
            info@infisq.com
          </p>
        </div>
      </div>
    

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
<div className="rounded-xl overflow-hidden shadow order-2 md:order-1">
            <iframe
              title="map"
              className="w-full h-full"
              src="https://maps.google.com/maps?q=Salem,Tamil Nadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>

         {/* Form */}
<div className="relative order-1 md:order-2 rounded-2xl p-0.5 bg-linear-to-br from-purple-500 via-pink-500 to-indigo-500">
  <div className="bg-white rounded-2xl p-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-1">
      Send A Message
    </h2>

    <div className="w-12 h-1 bg-purple-500 rounded-full mb-4"></div>

    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
      Whether you have an idea, need technical guidance, want to grow
      your business online, or are looking to start your tech career —
      we’re here to help.
    </p>

    <form className="space-y-4">
      {/* Name + Who You Are */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full h-10 border border-gray-300 rounded-lg px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Who You Are
          </label>
          <select className="w-full h-10 border border-gray-300 rounded-lg px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition">
            <option>Student</option>
            <option>Teacher</option>
            <option>Working Professional</option>
          </select>
        </div>
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Phone No
          </label>
          <input
            type="text"
            placeholder="+91 XXXXX XXXXX"
            className="w-full h-10 border border-gray-300 rounded-lg px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full h-10 border border-gray-300 rounded-lg px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          placeholder="How can we help?"
          className="w-full h-10 border border-gray-300 rounded-lg px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          placeholder="Write your message here..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
      </div>

      {/* Button */}
      <div className="text-center pt-4">
        <button
          type="submit"
          className="relative inline-flex items-center justify-center px-10 py-2 text-sm font-medium text-white rounded-full bg-linear-to-r from-purple-600 to-indigo-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          submit
        </button>
      </div>
    </form>
  </div>
</div>
</div>

      </section>

      {/* FSQ */}

      <FAQ />
    </>
  );
}