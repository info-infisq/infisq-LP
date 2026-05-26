import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="h-auto lg:h-200 bg-[url(imgs/hero-bg.png)] w-full bg-no-repeat bg-center bg-cover">
      <div className="pb-5 pt-30 md:pt-35">
        <div className="max-w-350  w-[90%] mx-auto  flex-center flex-col md:flex-row  h-full">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </div>
  );
}
