import Logo from "./Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { Ref } from "react";
import { useMediaQuery } from "usehooks-ts";
import WebNav from "./WebNav";
import HamburgerMenu from "../ui/HamburgerMenu";

type NavProps = {
  navRef: Ref<HTMLDivElement> | null;
};

function Nav({ navRef }: NavProps) {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div
      ref={navRef}
      className="bg-background fixed top-0 left-0 z-50 flex w-full items-center justify-between p-5 md:p-6"
    >
      <Logo />
      {matches && <WebNav />}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {!matches && <HamburgerMenu />}
      </div>
    </div>
  );
}

export default Nav;
