import Logo from "./Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { Ref } from "react";
import { useMediaQuery } from "usehooks-ts";
import WebNav from "./WebNav";
import HamburgerMenu from "../ui/HamburgerMenu";
import { HiLanguage, HiMagnifyingGlass } from "react-icons/hi2";

type NavProps = {
  navRef: Ref<HTMLDivElement> | null;
};

function Nav({ navRef }: NavProps) {
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <div
      ref={navRef}
      className="bg-background absolute top-0 left-0 z-50 flex max-h-full w-full items-center justify-between p-5 md:p-6"
    >
      <Logo />
      {matches && <WebNav />}
      <div className="flex items-center gap-4">
        <HiMagnifyingGlass
          size={20}
          strokeWidth={0.3}
          className="fill-foreground"
        />
        <HiLanguage size={20} strokeWidth={0.3} className="fill-foreground" />
        <ThemeToggle />
        {!matches && <HamburgerMenu />}
      </div>
    </div>
  );
}

export default Nav;
