import { EmblaOptionsType } from "embla-carousel";
import useNav from "../../../hooks/useNav";
import { sliderData } from "../../../utils/constants";
import WhyAlbaniaMobileSlider from "../../ui/mobile/WhyAlbaniaMobileSlider";
import { useMediaQuery } from "usehooks-ts";
import WhyAlbaniaWebSlider from "../../ui/web/WhyAlbaniaWebSlider";
import Autoplay from "embla-carousel-autoplay";

function WhyAlbaniaSection() {
  const { navHeight } = useNav();
  const matches = useMediaQuery("(min-width: 768px)");

  const WEB_OPTIONS: EmblaOptionsType = { loop: true };
  const MOBILE_OPTIONS: EmblaOptionsType = { axis: "y", loop: true };

  const PLUGINS = [Autoplay({ delay: 4000, stopOnInteraction: true, playOnInit: true, })];

  return (
    <section
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
      className="text-foreground bg-muted flex flex-col items-center gap-8 px-3 pt-8 pb-18 md:py-12 lg:py-16"
    >
      <div className="flex h-full flex-col gap-8">
        <h1 className="font-primary text-center text-3xl font-light md:text-4xl lg:text-5xl">
          Why invest in Albania
        </h1>
        <div className="flex grow flex-col justify-between gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-primary text-md px-10 text-center font-normal text-balance lg:text-lg">
              Where{" "}
              <span className="font-secondary animate-thrice animate-duration-[1000ms] animate-delay-0 animate-ease-out text-primary inline-block animate-bounce">
                opportunity
              </span>{" "}
              meets growth
            </h3>
            <p className="font-primary mx-auto w-[85dvw] px-4 text-justify text-sm leading-4 font-light text-wrap md:max-w-[600px] md:text-sm md:leading-5">
              Albania is becoming a high-potential destination for investors
              looking to tap into Southeast Europe’s emerging markets. With a
              rapidly modernizing infrastructure, competitive labor costs, and
              pro-business government initiatives, Albania offers a hospitable
              climate for ventures of all sizes.
            </p>
          </div>
          <div className="flex flex-col">
            {matches ? (
              <WhyAlbaniaWebSlider slides={sliderData} options={WEB_OPTIONS} plugins={PLUGINS} />
            ) : (
              <WhyAlbaniaMobileSlider
                slides={sliderData}
                options={MOBILE_OPTIONS}
                plugins={PLUGINS}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAlbaniaSection;
