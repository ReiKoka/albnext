import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";
import useMobileNav from "../hooks/useMobileNav";
import useNav from "../hooks/useNav";

function AppLayout() {
  const { isOpen } = useMobileNav();
  const { navRef } = useNav();

  return (
    <div className="mx-auto h-dvh min-h-dvh w-full max-w-[2000px]">
      <div
        className={`bg-logo/20 fixed inset-0 z-10 backdrop-blur-sm ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-700`}
      ></div>

      <div className="flex h-full flex-col">
        <Nav navRef={navRef} />
        <div
          className="grow"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
