// testimonialVariants.js
export const cardVariants = {
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    zIndex: 10,
    transition: {
      duration: 1.2, // 🔥 slow
      ease: [0.16, 1, 0.3, 1], // 🔥 ultra-smooth (easeOutExpo-like)
    },
  },
  left: {
    x: -420,
    scale: 0.92,
    opacity: 0.45,
    filter: "blur(2px)",
    zIndex: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  right: {
    x: 420,
    scale: 0.92,
    opacity: 0.45,
    filter: "blur(2px)",
    zIndex: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
