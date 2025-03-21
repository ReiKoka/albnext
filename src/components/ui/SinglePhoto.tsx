import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SinglePhotoProps = {
  text: string;
  imageUrl: string;
  className?: string;
  flex: string;
};

function SinglePhoto({ text, imageUrl, className, flex }: SinglePhotoProps) {
  const baseStyles =
    "font-primary text-background dark:text-foreground text-4xl font-bold capitalize absolute top-[50%] left-[50%] -translate-[50%] w-full text-center";
  const styles = twMerge(clsx(baseStyles, className));

  return (
    <div
      className="relative w-full flex-1 rounded-4xl"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        flex: flex,
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full rounded-4xl bg-black opacity-35"></div>

      <h1 className={styles}>{text}</h1>
    </div>
  );
}

export default SinglePhoto;
