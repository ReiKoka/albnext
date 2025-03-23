import Lottie from "lottie-react";

type SingleSlideWebProps = {
  icon: object;
  title: string;
  text: string;
  extraText: string;
};

function SingleSlideWeb({ icon, title, text, extraText }: SingleSlideWebProps) {
  return (
    <div className="h-full focus-within:outline-0">
      <div className="flex h-full justify-between gap-8 rounded-xl p-4 focus-visible:outline-0 md:p-0">
        <div className="shadow-box my-auto flex aspect-square h-36 w-36 items-center justify-center rounded-3xl bg-[url('/gradient-background.png')] bg-cover bg-center lg:h-44 lg:w-44 xl:h-56 xl:w-56">
          <Lottie animationData={icon} loop={true} className="xl:w-36" />
        </div>

        <div className="my-auto flex flex-col gap-4">
          <h2 className="text-foreground font-primary text-right text-lg leading-5 font-bold text-balance lg:text-xl xl:text-3xl xl:leading-10">
            {title}
          </h2>
          <p className="font-primary text-right text-[10px] leading-3 font-light lg:leading-3.5 text-balance">
            <span>{text}</span>
            <span className="hidden md:inline">{extraText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleSlideWeb;
