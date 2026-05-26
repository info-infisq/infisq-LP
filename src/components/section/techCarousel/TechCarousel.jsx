import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Carousel from "./Carousel";

export default function TechCarousel() {
  return (
    <div className="w-full  my-5 md:py-12 relative flex flex-col md:gap-20">
      <Carousel reverse={false} />
      <Carousel reverse={true} />
    </div>
  );
}
