import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SinglePhotoProps = {
  text: string;
  imageUrl: string;
  divClassName?: string;
  pClassName?: string;
  flex: number;
};

//prettier-ignore
function SinglePhoto({ text, imageUrl, divClassName, pClassName, flex}: SinglePhotoProps) {
  const pBaseStyles =
    "font-primary text-background dark:text-foreground text-4xl font-bold capitalize absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full text-center";
  const pStyles = twMerge(clsx(pBaseStyles, pClassName));

  const divBaseStyles = "relative w-full rounded-4xl";
  const divStyles = twMerge(clsx(divBaseStyles, divClassName))

  return (
    <div
      className={divStyles}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        flex: flex,
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full rounded-4xl bg-black opacity-35"></div>

      <h1 className={pStyles}>{text}</h1>
    </div>
  );
}

export default SinglePhoto;
