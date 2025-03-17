import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import SingleSlide from "../SingleSlide";
import { SingleSlideType } from "../../../utils/types";


//prettier-ignore
import { NextButton, PrevButton, usePrevNextButtons} from "./EmblaCarouselArrowButtons";

type WhyAlbaniaSliderProps = {
  slides: SingleSlideType[];
  options?: EmblaOptionsType;
};

function WhyAlbaniaSlider({ slides, options }: WhyAlbaniaSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  //prettier-ignore
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
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

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

      {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? "embla__dot--selected" : "",
              )}
            />
          ))}
        </div> */}
    </section>
  );
}

export default WhyAlbaniaSlider;
