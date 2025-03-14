import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";
import useNav from "../hooks/useNav";
import useMobileNav from "../hooks/useMobileNav";

function AppLayout() {
  const { navRef } = useNav();
  const { isOpen } = useMobileNav();

  return (
    <div className="mx-auto h-auto min-h-screen w-dvw max-w-[2000px]">
      <div
        className={`bg-logo/20 fixed inset-0 z-10 backdrop-blur-sm ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-700`}
      />
      {navRef && <Nav navRef={navRef} />}
      <Outlet />
    </div>
  );
}

export default AppLayout;
