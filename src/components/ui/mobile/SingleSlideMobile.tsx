import Lottie from "lottie-react";

type SingleSlideMobileProps = {
  icon: object;
  title: string;
  text: string;
  extraText: string;
};

function SingleSlideMobile({
  icon,
  title,
  text,
  extraText,
}: SingleSlideMobileProps) {
  return (
    <div className="h-full focus-within:outline-0">
      <div className="shadow-slide-2 dark:shadow-toast flex h-full flex-col justify-between rounded-xl p-4 focus-visible:outline-0">
        <div className="ss:h-28 ss:w-28 mx-auto flex aspect-square h-24 w-24 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center">
          <Lottie animationData={icon} loop={true} />
        </div>

        <h2 className="text-foreground font-primary ss:text-lg ss:leading-7 px-2 text-center text-base leading-6 font-bold">
          {title}
        </h2>
        <p className="font-primary ss:text-xs px-2 text-center text-xs">
          <span>{text}</span>
          <span className="extraText">{extraText}</span>
        </p>
      </div>
    </div>
  );
}

export default SingleSlideMobile;
