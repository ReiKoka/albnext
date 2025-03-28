import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

//prettier-ignore
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType} from "embla-carousel";
//prettier-ignore
import { NextButton, PrevButton, usePrevNextButtons} from "./EmblaCarouselArrowButtons";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { SingleSlideType } from "../../../utils/types";
import { AutoplayType } from "embla-carousel-autoplay";
import SingleSlideWeb from "./SingleSlideWeb";

const TWEEN_FACTOR_BASE = 0.5;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type WhyAlbaniaWebSliderPropsType = {
  slides: SingleSlideType[];
  options: EmblaOptionsType;
  plugins: AutoplayType[];
};

//prettier-ignore
function WhyAlbaniaWebSlider({ slides, options, plugins }: WhyAlbaniaWebSliderPropsType) {  
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi, tweenScale]);

  return (
    <section className="embla__web--wrapper">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <SingleSlideWeb
                    icon={slide.icon}
                    title={slide.title}
                    text={slide.text}
                    extraText={slide.extraText}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="left-rectangle"></div>
          <div className="right-rectangle"></div>
        </div>

        <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />

        


        <div className="embla__controls">
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
      </div>
    </section>
  );
}

export default WhyAlbaniaWebSlider;
