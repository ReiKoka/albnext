import { HiBars3 } from "react-icons/hi2";
import useMobileNav from "../../hooks/useMobileNav";
import Button from "./Button";
import MobileNavLinks from "../nav/MobileNavLinks";

function HamburgerMenu() {
  const { isOpen, setIsOpen } = useMobileNav();
  return (
    <>
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
      <MobileNavLinks
        isOpen={isOpen ?? false}
        setIsOpen={setIsOpen ?? (() => {})}
      />
    </>
  );
}

export default HamburgerMenu;
