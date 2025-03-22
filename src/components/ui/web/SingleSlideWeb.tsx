import Lottie from "lottie-react";

type SingleSlideWebProps = {
  icon: object;
  title: string;
  text: string;
};

function SingleSlideWeb({ icon, title, text }: SingleSlideWebProps) {
  return (
    <div className="h-full focus-within:outline-0">
      <div className=" flex h-full justify-between gap-8 rounded-xl p-4 focus-visible:outline-0">
        <div className="my-auto flex aspect-square h-36 w-36 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center shadow-box">
          <Lottie animationData={icon} loop={true} />
        </div>

        <div className="flex flex-col my-auto gap-4">
          <h2 className="text-foreground font-primary text-right text-balance text-lg leading-5 font-bold">
            {title}
          </h2>
          <p className="font-primary text-right text-[10px] leading-3 font-light">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleSlideWeb;
