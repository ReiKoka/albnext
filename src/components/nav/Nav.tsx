import { HiBars3 } from "react-icons/hi2";
import Button from "../ui/Button";
import Logo from "./Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { Ref } from "react";

type NavProps = {
  navRef: Ref<HTMLDivElement> | null;
};

function Nav({ navRef }: NavProps) {
  return (
    <div
      ref={navRef}
      className="bg-background sticky top-0 left-0 z-50 flex w-full items-center justify-between p-6"
    >
      <Logo />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="icon" className="group border-0 p-2 hover:translate-0">
          <HiBars3
            size={24}
            className="group-hover:fill-primary fill-foreground"
          />
        </Button>
      </div>
    </div>
  );
}

export default Nav;
