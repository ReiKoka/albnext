import { useMediaQuery } from "usehooks-ts";
import useNav from "../../../hooks/useNav";
import SinglePhoto from "../../ui/SinglePhoto";

function Services() {
  const { navHeight } = useNav();
  const matches = useMediaQuery("(min-width: 768px");

  return (
    <section
      style={{ "--nav-height": `${navHeight}px` } as React.CSSProperties}
      className="text-foreground bg-muted flex h-[calc(100svh_-_var(--nav-height))] flex-col items-center gap-4 p-4 md:py-6 lg:py-8 landscape:h-[calc(120svh_-_var(--nav-height))] landscape:lg:h-[calc(100svh_-_var(--nav-height))]"
    >
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden">
        <h1 className="font-primary text-center text-3xl font-light md:text-4xl lg:text-5xl landscape:lg:mb-5">
          Our Services
        </h1>
        <div className="flex h-full grow flex-col gap-4 overflow-hidden md:flex-row landscape:flex-row">
          <SinglePhoto
            title="real estate"
            text="Tap into Albania’s booming property sector with a partner who knows the landscape from the inside out. Our premium, end-to-end service covers everything from scouting exclusive off-market opportunities to managing post-purchase logistics."
            imageUrl={matches ? "/services-1-web.png" : "/services-1.png"}
            divClassName="landscape:mx-0 landscape:ml-auto"
          />
          <SinglePhoto
            title="business consulting services"
            text="Streamline your entrance into Albania’s thriving economy! We handle the details-company registration, regulatory compliance, and strategic consulting. Thanks to our local connections and industry insight, your new venture is built on a foundation of confidence and clarity."
            imageUrl="/services-3.jpeg"
            divClassName="landscape:mx-0 landscape:mr-auto"
            h1ClassName="md:top-12 lg:top-14 lg:left-4"
            pClassName="md:top-auto md:bottom-10 md:right-0 md:left-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
