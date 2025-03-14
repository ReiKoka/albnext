import Logo from "./Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { useMediaQuery } from "usehooks-ts";
import WebNav from "./WebNav";
import HamburgerMenu from "../ui/HamburgerMenu";

function Nav() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="bg-background sticky top-0 left-0 z-50 flex w-full items-center justify-between p-5 md:p-6">
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
