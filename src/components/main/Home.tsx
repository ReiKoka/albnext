import { HiOutlineBriefcase, HiOutlineHome } from "react-icons/hi2";
import Button from "../ui/Button";

function Home({ navHeight }: { navHeight: number }) {
  return (
    <section
      className="relative w-full bg-[url('/hero-background.jpeg')] bg-cover bg-bottom bg-no-repeat"
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
    >
      <div className="flex h-full flex-col gap-6 p-3">
        <h1 className="font-primary text-background dark:text-foreground mt-auto w-full text-center text-3xl leading-10 font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl lg:mb-6 xl:mb-10">
          Your trusted gateway to Albania
        </h1>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:gap-8 lg:mb-10 xl:mb-24">
          <Button
            variant="outline"
            className="font-primary dark:text-foreground dark:border-foreground border-background text-background flex w-full items-center max-h-40 justify-center border-2 text-sm sm:w-fit"
          >
            <HiOutlineBriefcase
              size={20}
              strokeWidth={2}
              className="stroke-background dark:stroke-foreground"
            />
            <span>Set up a business</span>
          </Button>

          <Button
            variant="outline"
            className="font-primary dark:text-foreground dark:border-foreground border-background text-background flex w-full items-center justify-center border-2 text-sm sm:w-fit"
          >
            <HiOutlineHome
              size={20}
              strokeWidth={2}
              className="stroke-background dark:stroke-foreground"
            />
            <span>Live & Work</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
