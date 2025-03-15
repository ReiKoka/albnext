import useNav from "../../../hooks/useNav";
import WhyAlbaniaSlider from "../../ui/WhyAlbaniaSlider";

function WhyAlbaniaSection() {
  const { navHeight } = useNav();

  return (
    <section
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
      className="text-foreground bg-muted flex flex-col items-center gap-8 px-3 py-8 md:py-12 lg:py-16"
    >
      <div className="flex h-full flex-col gap-4 lg:gap-8">
        <h1 className="font-primary text-center text-3xl font-light md:text-4xl lg:text-5xl">
          Why invest in Albania
        </h1>
        <div>
          <h3 className="font-primary text-md text-center font-light lg:text-lg">
            Where{" "}
            <span className="font-secondary animate-thrice animate-duration-[1000ms] animate-delay-0 animate-ease-out text-primary inline-block animate-bounce">
              opportunity
            </span>{" "}
            meets growth
          </h3>
          <p className="font-primary mt-1 text-justify w-[85dvw] px-4 text-xs leading-4 font-light text-wrap md:max-w-[600px] md:text-sm md:leading-5">
            Albania is becoming a high-potential destination for investors
            looking to tap into Southeast Europe’s emerging markets. With a
            rapidly modernizing infrastructure, competitive labor costs, and
            pro-business government initiatives, Albania offers a hospitable
            climate for ventures of all sizes.
          </p>
        </div>
        <div className="grow flex flex-col pb-4">
          <WhyAlbaniaSlider />
        </div>
      </div>
    </section>
  );
}

export default WhyAlbaniaSection;
