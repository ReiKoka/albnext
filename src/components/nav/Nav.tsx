import { HiBars3 } from "react-icons/hi2";
import Button from "../ui/Button";
import Logo from "./Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { Ref, use } from "react";
import { useMediaQuery } from "usehooks-ts";
import MobileNavLinks from "./MobileNavLinks";
import { MobileNavContext } from "../../context/MobileNavContext";

type NavProps = {
  navRef: Ref<HTMLDivElement> | null;
};

function Nav({ navRef }: NavProps) {
  const matches = useMediaQuery("(min-width: 768px)");

  const mobileNavContext = use(MobileNavContext);
  const isOpen = mobileNavContext?.isOpen;
  const setIsOpen = mobileNavContext?.setIsOpen;

  return (
    <div
      ref={navRef}
      className="bg-background sticky top-0 left-0 z-50 flex w-full items-center justify-between p-5 md:p-6"
    >
      <Logo />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {!matches && (
          <Button
            variant="icon"
            className="group border-0 p-0 hover:translate-0"
            onClick={() => setIsOpen && setIsOpen(true)}
          >
            <HiBars3
              size={24}
              className="group-hover:fill-primary fill-foreground"
            />
          </Button>
        )}
        <MobileNavLinks
          isOpen={isOpen ?? false}
          setIsOpen={setIsOpen ?? (() => {})}
        />
      </div>
    </div>
  );
}

export default Nav;
