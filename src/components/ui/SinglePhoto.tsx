type SinglePhotoProps = {
  flex: string;
  text: string;
  imageUrl: string;
};

function SinglePhoto({ flex, text, imageUrl }: SinglePhotoProps) {
  return (
    <div
      className={`animate-fade-up animate-once animate-duration-1000 animation-delay-500 ${flex} animate-ease-out relative w-full flex-1 rounded-4xl`}
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
    >
      <div className="absolute top-0 left-0 h-full w-full rounded-4xl bg-black opacity-35"></div>
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <h1 className="font-primary text-background dark:text-foreground text-4xl leading-0 font-bold capitalize">
          {text}
        </h1>
      </div>
    </div>
  );
}

export default SinglePhoto;
