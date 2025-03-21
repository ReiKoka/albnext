import useNav from "../../../hooks/useNav";
import SinglePhoto from "../../ui/SinglePhoto";

function Services() {
  const { navHeight } = useNav();

  const servicesData = [
    {
      id: 1,
      flex: "flex-2",
      text: "real estate",
      imageUrl: "/services-1.png",
    },
    {
      id: 2,
      flex: "flex-1",
      text: "marketing",
      imageUrl: "/services-2.jpeg",
    },
    {
      id: 3,
      flex: "flex-1",
      text: "business setup",
      imageUrl: "/services-3.jpeg",
    },
  ];
  return (
    <section
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
      className="text-foreground bg-muted flex flex-col items-center gap-8 p-8 md:p-10 lg:p-12"
    >
      <div className="flex h-full w-full flex-col gap-8">
        <h1 className="font-primary text-center text-3xl font-light md:text-4xl lg:text-5xl">
          Our Services
        </h1>
        <div className="flex w-full grow flex-col items-center justify-between gap-6">
          <SinglePhoto
            flex="flex-2"
            text="real estate"
            className=""
            imageUrl="/services-1.png"
          />

          <SinglePhoto
            flex="flex-1"
            text="marketing"
            imageUrl="/services-2.jpeg"
          />

          <SinglePhoto
            flex="flex-1"
            text="Business Setup"
            imageUrl="/services-3.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
