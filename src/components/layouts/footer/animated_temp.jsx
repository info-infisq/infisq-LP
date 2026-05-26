import { useEffect, useRef } from "react";

export default function AnimatedPhone() {
  const company = ["I", "N", "F", "I", "S", "Q"];
  const digits = ["9", "3", "8", "1", "4", "3"];
  const h = 1.2;

  const stripsRef = useRef([]);
  const boxesRef = useRef([]);

  useEffect(() => {
    const strips = stripsRef.current;
    const boxes = boxesRef.current;

    // Initial state
    strips.forEach((strip, i) => {
      strip.innerHTML = `<div class="h-[1.2em] leading-[1.2em] text-center tracking-tight">${company[i]}</div>`;
    });

    function scrollToChar(strip, box, char, directionDown = true) {
      box.classList.add("opacity-100");
      strip.style.transition = "none";
      strip.innerHTML = "";

      let html = "";

      if (directionDown) {
        for (let i = 0; i <= 9; i++) {
          html += `<div class="h-[1.2em] leading-[1.2em] text-center tracking-tight">${i}</div>`;
        }
        html += `<div class="h-[1.2em] leading-[1.2em] text-center tracking-tight">${char}</div>`;
        strip.innerHTML = html;

        strip.style.transform = "translateY(0)";
        strip.offsetHeight;

        strip.style.transition =
          "transform 1.4s cubic-bezier(0.22, 0.61, 0.36, 1)";
        strip.style.transform = `translateY(-${10.3 * h}em)`;

        setTimeout(() => {
          strip.style.transition = "transform 0.4s ease-out";
          strip.style.transform = `translateY(-${10 * h}em)`;
          setTimeout(() => box.classList.remove("opacity-100"), 400);
        }, 1400);
      } else {
        html += `<div class="h-[1.2em] leading-[1.2em] text-center tracking-tight">${char}</div>`;
        for (let i = 0; i <= 9; i++) {
          html += `<div class="h-[1.2em] leading-[1.2em] text-center tracking-tight">${i}</div>`;
        }
        strip.innerHTML = html;

        strip.style.transform = `translateY(-${10 * h}em)`;
        strip.offsetHeight;

        strip.style.transition =
          "transform 1.4s cubic-bezier(0.22, 0.61, 0.36, 1)";
        strip.style.transform = "translateY(0)";

        setTimeout(() => box.classList.remove("opacity-100"), 1600);
      }
    }

    function companyToNumber() {
      boxes.forEach((box, i) => {
        setTimeout(() => {
          scrollToChar(strips[i], box, digits[i], true);
        }, i * 1000);
      });
    }

    function numberToCompany() {
      boxes.forEach((box, i) => {
        setTimeout(() => {
          scrollToChar(strips[i], box, company[i], false);
        }, i * 1000);
      });
    }

    function loop() {
      companyToNumber();
      setTimeout(numberToCompany, 1000 * boxes.length + 3000);
    }

    loop();
    const interval = setInterval(loop, 1000 * boxes.length * 2 + 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="tel:+916379647441"
      className="flex text-[16px] font-semibold text-black"
    >
      <span className="flex items-center tracking-tight">
        {/* Static part */}
        <span className="mr-0.5">+91&nbsp;9363</span>

        {/* Animated digits */}
        {company.map((_, i) => (
          <div
            key={i}
            ref={(el) => (boxesRef.current[i] = el)}
            className="relative h-[1.2em] w-[0.7em] overflow-hidden opacity-100 transition-opacity duration-500"
          >
            <div
              ref={(el) => (stripsRef.current[i] = el)}
              className="absolute top-0 left-0 right-0"
            />
          </div>
        ))}
      </span>
    </a>
  );
}
