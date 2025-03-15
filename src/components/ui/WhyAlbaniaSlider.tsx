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
    <div className="mx-auto h-full max-w-[80dvw]">
      <Slider {...settings}>
        <div className="p-3">
          <div className="h-full w-full">
            <div className="flex flex-col">
              <div className="flex h-14 w-full items-center justify-center rounded-t-xl bg-[url('/gradient-background.png')] bg-cover bg-center">
                <WhyAlbaniaImg1 className="h-10 w-10" />
              </div>
              <div className="border-border flex flex-col gap-2 rounded-b-xl border border-t-0 shadow-toast">
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

        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
}

export default WhyAlbaniaSlider;
