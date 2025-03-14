import { HiOutlineBriefcase, HiOutlineHome } from "react-icons/hi2";
import useNav from "../../../hooks/useNav";
import Button from "../../ui/Button";

function HeroSection() {
  const { navHeight } = useNav();

  return (
    <section
      className="relative w-full bg-[url('/hero-background.jpeg')] bg-cover bg-bottom bg-no-repeat"
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
    >
      <div className="flex h-full flex-col gap-6 p-3">
        <h1 className="font-primary text-background dark:text-foreground mt-auto w-full text-center text-3xl leading-10 font-bold tracking-wide sm:text-3xl md:text-4xl lg:mb-6 lg:text-5xl xl:mb-10">
          Your trusted gateway to Albania
        </h1>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:gap-8 lg:mb-10 xl:mb-24">
          <Button
            variant="outline"
            className="dark:text-foreground dark:border-foreground border-background text-background before:bg-background hover:text-foreground hover:border-background relative z-10 flex max-h-40 w-full items-center justify-center overflow-hidden border-2 text-sm before:absolute before:top-0 before:-z-10 before:h-full before:w-full before:-translate-x-[100%] before:transition-all before:duration-500 before:content-[''] hover:scale-100 hover:before:translate-x-0 sm:w-fit"
          >
            <HiOutlineBriefcase
              size={20}
              strokeWidth={2}
              className="stroke-background dark:stroke-foreground group-hover:stroke-foreground transition-all duration-500"
            />
            <span>Set up a business</span>
          </Button>

          <Button
            variant="outline"
            className="dark:text-foreground dark:border-foreground border-background text-background before:bg-background hover:text-foreground hover:border-background relative z-10 flex max-h-40 w-full items-center justify-center overflow-hidden border-2 text-sm before:absolute before:top-0 before:-z-10 before:h-full before:w-full before:-translate-x-[100%] before:transition-all before:ease-out before:duration-500 before:content-[''] hover:scale-100 hover:before:translate-x-0 sm:w-fit"
          >
            <HiOutlineHome
              size={20}
              strokeWidth={2}
              className="stroke-background dark:stroke-foreground group-hover:stroke-foreground transition-all duration-500"
            />
            <span>Live & Work</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
