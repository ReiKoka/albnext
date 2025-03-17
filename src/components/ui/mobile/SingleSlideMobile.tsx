import Lottie from "lottie-react";

type SingleSlideMobileProps = {
  icon: object;
  title: string;
  text: string;
};

function SingleSlideMobile({ icon, title, text }: SingleSlideMobileProps) {
  return (
    <div className="h-full focus-within:outline-0">
      <div className="shadow-slide-2 dark:shadow-toast flex h-full flex-col justify-between rounded-xl p-4 focus-visible:outline-0">
        <div className="mx-auto flex aspect-square h-24 w-24 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center">
          <Lottie animationData={icon} loop={true} />
        </div>

        <h2 className="text-foreground font-primary px-2 text-center text-base leading-6 font-bold">
          {title}
        </h2>
        <p className="font-primary t px-2 text-center text-xs">{text}</p>
      </div>
    </div>
  );
}

export default SingleSlideMobile;
