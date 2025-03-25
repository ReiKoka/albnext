import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SinglePhotoProps = {
  title: string;
  text: string;
  imageUrl: string;
  divClassName?: string;
  h1ClassName?: string;
  pClassName?: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  dataId: number;
};

//prettier-ignore
function SinglePhoto({ title, text, imageUrl, divClassName, h1ClassName, pClassName, onClick, dataId }: SinglePhotoProps) {

  const pBaseStyles = "font-primary text-background dark:text-foreground text-[10px] font-light absolute z-20 w-[80%] hidden md:block md:px-4 md:leading-4 md:top-10 md:left-4 "
  const pStyles = twMerge(clsx(pBaseStyles, pClassName))


  const h1BaseStyles =
    "font-primary text-background dark:text-foreground text-2xl md:text-3xl px-4 font-bold capitalize absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20 w-fit md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:right-0 md:bottom-12 portrait:lg:text-5xl lg:right-4 lg:bottom-14 portrait:lg:leading-14";
  const h1Styles = twMerge(clsx(h1BaseStyles, h1ClassName));


  const divBaseStyles = "relative rounded-4xl max-w-full portrait:md:h-[80%] portrait:md:my-auto aspect-square mx-auto md:mx-0 md:ml-auto bg-bottom lg:aspect-[3/4] bg-cover ";
  const divStyles = twMerge(clsx(divBaseStyles, divClassName))

  return (
    <div className="flex-1 flex h-full w-full overflow-hidden hover:scale-95 transition-all duration-500 cursor-pointer" onClick={onClick} data-id={dataId}>
      <div
        className={divStyles}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-0 left-0 h-full z-10 w-full  rounded-4xl bg-black opacity-35 pointer-events-none"></div>
        <p className={pStyles}>{text}</p>
        <h1 className={h1Styles}>{title}</h1>
      </div>
    </div>
  );
}

export default SinglePhoto;
