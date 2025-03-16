import { EmblaOptionsType } from "embla-carousel";
import useNav from "../../../hooks/useNav";
import WhyAlbaniaSlider from "../../ui/WhyAlbaniaSlider";
import { sliderData } from "../../../utils/constants";

function WhyAlbaniaSection() {
  const { navHeight } = useNav();
  const OPTIONS: EmblaOptionsType = { axis: "y" };

  return (
    <section
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
      className="text-foreground bg-muted flex flex-col items-center gap-8 px-3 pt-8 pb-24 md:py-12 lg:py-16"
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
          <div className="flex flex-col ">
            <WhyAlbaniaSlider slides={sliderData} options={OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAlbaniaSection;
