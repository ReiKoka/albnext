import { ElementType } from "react";

type SingleSlideProps = {
  icon: ElementType;
  title: string;
  text: string;
};

function SingleSlide({ icon: Icon, title, text }: SingleSlideProps) {
  return (
    <div className="h-full min-w-0 flex-[0_0_100%] focus-within:outline-0">
      <div className="focus-visible:ring-primary flex h-full flex-col rounded-xl p-4 shadow-toast focus-visible:ring focus-visible:ring-offset-2 focus-visible:outline-0">
        <div className="mx-auto flex aspect-square h-24 w-24 items-center justify-center rounded-xl bg-[url('/gradient-background.png')] bg-cover bg-center">
          <Icon className="h-16 w-16" />
        </div>
        <div className="flex flex-col gap-2 rounded-b-xl">
          <h2 className="text-foreground font-primary p-2 text-center text-base leading-6 font-bold">
            {title}
          </h2>
          <p className="font-primary t px-2 pb-2 text-center text-xs">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleSlide;
