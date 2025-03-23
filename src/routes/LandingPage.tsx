import { useEffect, useRef } from "react";
import HeroSection from "../components/main/Home/HeroSection";
import Services from "../components/main/Home/Services";
import WhyAlbaniaSection from "../components/main/Home/WhyAlbaniaSection";
import SubscribeModal from "../components/modals/SubscribeModal";
import useModal from "../hooks/useModal";

function LandingPage() {
  const { openModal, closeModal } = useModal();
  const hasOpenedModal = useRef(false);

  useEffect(() => {
    if (!hasOpenedModal.current) {
      const timer = setTimeout(() => {
        openModal("join-mailing-list");
        hasOpenedModal.current = true;
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [openModal]);

  return (
    <div className="h-full">
      <HeroSection />
      <WhyAlbaniaSection />
      <Services />
      <SubscribeModal
        title="join our mailing list"
        modalType="join-mailing-list"
        onClose={closeModal}
        titleClassName="mt-12 pb-0 uppercase text-xl "
        modalClassName="min-h-80 gap-20 md:gap-30"
      />
    </div>
  );
}

export default LandingPage;
