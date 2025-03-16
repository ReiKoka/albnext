// import WhyAlbaniaImg1 from "../../assets/images/why-albania-icon-1.svg?react";
import { useMediaQuery } from "usehooks-ts";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import SingleSlide from "./SingleSlide";
import { SingleSlideType } from "../../utils/types";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

//prettier-ignore
import { NextButton, PrevButton, usePrevNextButtons} from "./EmblaCarouselArrowButtons";

import "../../embla.css";

type WhyAlbaniaSliderProps = {
  slides: SingleSlideType[];
  options?: EmblaOptionsType;
};

function WhyAlbaniaSlider({ slides, options }: WhyAlbaniaSliderProps) {
  const matchesMd = useMediaQuery("(min-width: 768px)");

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  //prettier-ignore
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  //prettier-ignore
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <SingleSlide
                icon={slide.icon}
                title={slide.title}
                text={slide.text}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? "embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyAlbaniaSlider;
