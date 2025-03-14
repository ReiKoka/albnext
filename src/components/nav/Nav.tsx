import { HiBars3 } from "react-icons/hi2";
import Button from "../ui/Button";
import Logo from "./Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { Ref } from "react";
import { useMediaQuery } from "usehooks-ts";
import MobileNavLinks from "./MobileNavLinks";
import useMobileNav from "../../hooks/useMobileNav";
import WebNav from "./WebNav";

type NavProps = {
  navRef: Ref<HTMLDivElement> | null;
};

function Nav({ navRef }: NavProps) {
  const matches = useMediaQuery("(min-width: 768px)");
  const { isOpen, setIsOpen } = useMobileNav();

  return (
    <div
      ref={navRef}
      className="bg-background sticky top-0 left-0 z-50 flex w-full items-center justify-between p-5 md:p-6"
    >
      <Logo />
      {matches && <WebNav />}
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
