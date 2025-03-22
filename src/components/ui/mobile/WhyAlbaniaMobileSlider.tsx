import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { SingleSlideType } from "../../../utils/types";

//prettier-ignore
import { NextButton, PrevButton, usePrevNextButtons} from "./EmblaCarouselArrowButtons";
import SingleSlideMobile from "./SingleSlideMobile";
import { AutoplayType } from "embla-carousel-autoplay";

type WhyAlbaniaMobileSliderPropsType = {
  slides: SingleSlideType[];
  options: EmblaOptionsType;
  plugins: AutoplayType[];
};

//prettier-ignore
function WhyAlbaniaMobileSlider({ slides, options, plugins}: WhyAlbaniaMobileSliderPropsType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  //prettier-ignore
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi);

  return (
    <section className="embla__mobile--wrapper">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <SingleSlideMobile
                  icon={slide.icon}
                  title={slide.title}
                  text={slide.text}
                  extraText={slide.extraText}
                />
              </div>
            ))}
          </div>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>



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
      </div>
    </section>
  );
}

export default WhyAlbaniaMobileSlider;
