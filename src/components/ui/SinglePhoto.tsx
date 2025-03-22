import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SinglePhotoProps = {
  title: string;
  text: string;
  imageUrl: string;
  divClassName?: string;
  h1ClassName?: string;
  pClassName?: string;
  flex: number;
};

//prettier-ignore
function SinglePhoto({ title, text, imageUrl, divClassName, h1ClassName, pClassName, flex}: SinglePhotoProps) {
  // Paragraph Styles
  const pBaseStyles = "font-primary text-background dark:text-foreground text-[6px] font-light absolute hidden"
  const pStyles = twMerge(clsx(pBaseStyles, pClassName))

  // H1 Styles
  const h1BaseStyles =
    "font-primary text-background dark:text-foreground text-4xl font-bold capitalize absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full text-center";
  const h1Styles = twMerge(clsx(h1BaseStyles, h1ClassName));

  // Div Styles
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
      <p className={pStyles}>{text}</p>
      <h1 className={h1Styles}>{title}</h1>
    </div>
  );
}

export default SinglePhoto;
