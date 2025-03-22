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
      <div className="shadow-slide-2 dark:shadow-toast flex h-full flex-col justify-between rounded-xl p-4 ss:p-8 focus-visible:outline-0">
        <div className="mx-auto flex aspect-square h-24 w-24 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center ss:h-30 ss:w-30">
          <Lottie animationData={icon} loop={true} />
        </div>

        <h2 className="text-foreground font-primary px-2 text-center text-base leading-6 font-bold ss:text-xl ss:leading-8">
          {title}
        </h2>
        <p className="font-primary px-2 text-center text-xs ss:text-sm">
          <span>{text}</span>
          <span className="extraText">{extraText}</span>
        </p>
      </div>
    </div>
  );
}

export default SingleSlideMobile;
