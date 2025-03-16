import Lottie from "lottie-react";

type SingleSlideProps = {
  icon: object;
  title: string;
  text: string;
};

function SingleSlide({ icon, title, text }: SingleSlideProps) {
  return (
    <div className="h-full min-w-0 flex-[0_0_100%] focus-within:outline-0">
      <div className="focus-visible:ring-primary shadow-slide-2 dark:shadow-toast flex h-full flex-col justify-between rounded-xl p-4 focus-visible:ring focus-visible:ring-offset-2 focus-visible:outline-0">
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

export default SingleSlide;
