import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SinglePhotoProps = {
  title: string;
  text: string;
  imageUrl: string;
  divClassName?: string;
  h1ClassName?: string;
  pClassName?: string;
};

//prettier-ignore
function SinglePhoto({ title, text, imageUrl, divClassName, h1ClassName, pClassName, }: SinglePhotoProps) {

  const pBaseStyles = "font-primary text-background dark:text-foreground text-[6px] font-light absolute z-20 hidden"
  const pStyles = twMerge(clsx(pBaseStyles, pClassName))


  const h1BaseStyles =
    "font-primary text-background dark:text-foreground text-2xl md:text-3xl px-4 font-bold capitalize absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full text-center z-20 md:top-[90%] md:left-0 md:translate-x-0";
  const h1Styles = twMerge(clsx(h1BaseStyles, h1ClassName));


  const divBaseStyles = "relative rounded-4xl max-w-full portrait:md:h-[80%] portrait:md:my-auto aspect-square mx-auto md:mx-0 md:ml-auto bg-bottom lg:aspect-[3/4] bg-cover ";
  const divStyles = twMerge(clsx(divBaseStyles, divClassName))

  return (
    <div className="flex-1 flex h-full w-full overflow-hidden">
      <div
        className={divStyles}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-0 left-0 h-full z-10 w-full rounded-4xl bg-black opacity-35"></div>
        <p className={pStyles}>{text}</p>
        <h1 className={h1Styles}>{title}</h1>
      </div>
    </div>
  );
}

export default SinglePhoto;
