import { useMediaQuery } from "usehooks-ts";
import useNav from "../../../hooks/useNav";
import SinglePhoto from "../../ui/SinglePhoto";

function Services() {
  const { navHeight } = useNav();
  const matches = useMediaQuery("(min-width: 768px");

  return (
    <section
      style={{ height: `calc(100svh - ${navHeight}px)` }}
      className="text-foreground bg-muted flex flex-col items-center gap-4 p-4 md:py-6 lg:py-8"
    >
      <div className="flex h-full w-full overflow-hidden flex-col gap-4">
        <h1 className="font-primary text-center text-3xl font-light md:text-4xl lg:text-5xl">
          Our Services
        </h1>
        <div className="flex flex-col gap-4 h-full grow overflow-hidden landscape:flex-row md:flex-row">
          <SinglePhoto
            title="real estate"
            text=""
            imageUrl={matches ? "/services-1-web.png" : "/services-1.png"}
          />
          <SinglePhoto
            title="business consulting services"
            text=""
            imageUrl="/services-3.jpeg"
            divClassName="md:ml-0 md:mr-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
