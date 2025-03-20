import HeroSection from "../components/main/Home/HeroSection";
import Services from "../components/main/Home/Services";
import WhyAlbaniaSection from "../components/main/Home/WhyAlbaniaSection";

function LandingPage() {
  return (
    <div className="h-full">
      <HeroSection />
      <WhyAlbaniaSection />
      <Services />
    </div>
  );
}

export default LandingPage;
