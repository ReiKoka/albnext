import Slider from "react-slick";
import WhyAlbaniaImg1 from "../../assets/images/why-albania-icon-1.svg?react";

function WhyAlbaniaSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "60px",
  };

  return (
    <div className="mx-auto h-full max-w-[85dvw]">
      <Slider {...settings}>
        <div className="p-3">
          <div className="h-full w-full">
            <div className="border-border shadow-toast flex flex-col rounded-xl border border-t-0 p-4">
              <div className="mx-auto flex aspect-square h-24 w-24 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center">
                <WhyAlbaniaImg1 className="h-16 w-16" />
              </div>
              <div className="flex flex-col gap-2 rounded-b-xl">
                <h2 className="text-foreground font-primary p-2 text-center text-base leading-6 font-bold">
                  Least tax burden country in Europe
                </h2>
                <p className="font-primary px-2 pb-2 text-center text-xs">
                  Whether you’re an high-growth scaling company, or an
                  established multi-national, Albania is the ideal location for
                  your business to grow. Our diverse talent-pool, world-class
                  infrastructure and
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="h-full w-full">
            <div className="border-border shadow-toast flex flex-col rounded-xl border border-t-0 p-4">
              <div className="mx-auto flex aspect-square h-20 w-20 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center">
                <WhyAlbaniaImg1 className="h-10 w-10" />
              </div>
              <div className="flex flex-col gap-2 rounded-b-xl">
                <h2 className="text-foreground font-primary p-2 text-center text-base leading-6 font-bold">
                  Least tax burden country in Europe
                </h2>
                <p className="font-primary px-2 pb-2 text-center text-xs">
                  Whether you’re an high-growth scaling company, or an
                  established multi-national, Albania is the ideal location for
                  your business to grow. Our diverse talent-pool, world-class
                  infrastructure and
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="h-full w-full">
            <div className="border-border shadow-toast flex flex-col rounded-xl border border-t-0 p-4">
              <div className="mx-auto flex aspect-square h-20 w-20 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center">
                <WhyAlbaniaImg1 className="h-10 w-10" />
              </div>
              <div className="flex flex-col gap-2 rounded-b-xl">
                <h2 className="text-foreground font-primary p-2 text-center text-base leading-6 font-bold">
                  Least tax burden country in Europe
                </h2>
                <p className="font-primary px-2 pb-2 text-center text-xs">
                  Whether you’re an high-growth scaling company, or an
                  established multi-national, Albania is the ideal location for
                  your business to grow. Our diverse talent-pool, world-class
                  infrastructure and
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="h-full w-full">
            <div className="border-border shadow-toast flex flex-col rounded-xl border border-t-0 p-4">
              <div className="mx-auto flex aspect-square h-20 w-20 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center">
                <WhyAlbaniaImg1 className="h-10 w-10" />
              </div>
              <div className="flex flex-col gap-2 rounded-b-xl">
                <h2 className="text-foreground font-primary p-2 text-center text-base leading-6 font-bold">
                  Least tax burden country in Europe
                </h2>
                <p className="font-primary px-2 pb-2 text-center text-xs">
                  Whether you’re an high-growth scaling company, or an
                  established multi-national, Albania is the ideal location for
                  your business to grow. Our diverse talent-pool, world-class
                  infrastructure and
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default WhyAlbaniaSlider;
