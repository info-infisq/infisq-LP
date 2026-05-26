import { techs } from "../../../data/homePageContant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ reverse }) {
  return (
    <div className="w-[90%] max-w-350 mx-auto relative flex-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        loop
        speed={4000}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 3 },
          768: { slidesPerView:4 },
          1024: { slidesPerView: 12 },
        }}
      >
        {techs.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-around">
              <img
                src={src}
                alt="tech"
                className="h-20 w-20 md:w-20 md:h-20 transition duration-300 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
