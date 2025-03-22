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

  const WEB_OPTIONS: EmblaOptionsType = { loop: true, align: "center" };
  const MOBILE_OPTIONS: EmblaOptionsType = { axis: "y", loop: true };

  const PLUGINS = [
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      playOnInit: true,
      // stopOnMouseEnter: true,
    }),
  ];

  return (
    <section
      style={{ height: `calc(100svh - ${navHeight}px)` }}
      className="text-foreground bg-muted flex flex-col items-center overflow-hidden p-4 lg:py-6"
    >
      <div className="flex h-full w-full flex-col gap-6 md:gap-2">
        <h1 className="font-primary text-center text-3xl font-light md:text-4xl lg:text-5xl">
          Why invest in Albania
        </h1>
        <div className="xs:gap-12 flex h-full max-h-full grow flex-col justify-between gap-6 overflow-hidden md:gap-0">
          <div className="xs:gap-8 flex flex-col gap-2">
            <h3 className="font-primary text-md px-10 text-center font-normal text-balance lg:text-lg">
              Where{" "}
              <span className="font-secondary animate-thrice animate-duration-[1000ms] animate-delay-0 animate-ease-out text-primary inline-block animate-bounce">
                opportunity
              </span>{" "}
              meets growth
            </h3>
            <p className="font-primary mx-auto w-[85dvw] px-4 text-justify text-sm leading-4 font-light text-wrap md:max-w-[600px] md:leading-5">
              Albania is becoming a high-potential destination for investors
              looking to tap into Southeast Europe’s emerging markets. With a
              rapidly modernizing infrastructure, competitive labor costs, and
              pro-business government initiatives, Albania offers a hospitable
              climate for ventures of all sizes.
            </p>
          </div>
          <div className="flex h-full max-h-full grow flex-col overflow-hidden">
            {matches ? (
              <WhyAlbaniaWebSlider
                slides={sliderData}
                options={WEB_OPTIONS}
                plugins={PLUGINS}
              />
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
