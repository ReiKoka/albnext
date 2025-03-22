import { useMediaQuery } from "usehooks-ts";
import useNav from "../../../hooks/useNav";
import SinglePhoto from "../../ui/SinglePhoto";

function Services() {
  const { navHeight } = useNav();
  const matches = useMediaQuery("(min-width: 768px");

  return (
    <section
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
      className="text-foreground bg-muted flex flex-col items-center gap-4 p-4 lg:py-8"
    >
      <div className="flex h-full w-full flex-col gap-8">
        <h1 className="font-primary text-center text-3xl font-light md:text-4xl lg:text-5xl">
          Our Services
        </h1>
        <div className="flex w-full max-w-[70%] xl:max-w-[50%] mx-auto grow flex-col items-center justify-between gap-6 md:grid md:grid-cols-2 md:grid-rows-[10px_1fr_1fr_10px]">
          <SinglePhoto
            flex={2}
            title="real estate"
            text="Tap into Albania’s booming property sector with a partner who knows the landscape from the inside out. Our premium, end-to-end service covers everything from scouting exclusive off-market opportunities to managing post-purchase logistics. By combining meticulous research with real-world expertise, we deliver property investments designed for lasting returns."
            imageUrl={!matches ? "/services-1.png" : "/services-1-web.png"}
            divClassName="md:row-start-1 md:row-end-5 h-full"
            h1ClassName="top-[51%] 2xl:top-[85%] 2xl:left-[70%]"
            pClassName=""
          />

          <SinglePhoto
            flex={1}
            title="marketing"
            text=""
            imageUrl="/services-2.jpeg"
            divClassName="md:h-full md:row-start-2"
          />

          <SinglePhoto
            flex={1}
            title="Business Setup"
            text=""
            imageUrl="/services-3.jpeg"
            divClassName="md:h-full md:pb-8 md:row-start-3"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
