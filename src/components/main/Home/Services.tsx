import useNav from "../../../hooks/useNav";

function Services() {
  const { navHeight } = useNav();
  return (
    <section
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
      className="text-foreground bg-muted flex flex-col items-center gap-8 p-8 md:p-10 lg:p-12"
    >
      Services
    </section>
  );
}

export default Services;
