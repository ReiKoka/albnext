import { use } from "react";
import Nav from "../components/nav/Nav";
import { NavHeightContext } from "../context/NavHeightContext";

import { Outlet } from "react-router";
import { MobileNavContext } from "../context/MobileNavContext";

function AppLayout() {
  const navContext = use(NavHeightContext);
  const navRef = navContext?.navRef;

  const mobileNavContext = use(MobileNavContext);
  const isOpen = mobileNavContext?.isOpen;

  return (
    <div className="mx-auto h-auto min-h-screen w-dvw max-w-[2000px]">
      <div
        className={`fixed inset-0 z-10 bg-logo/20 backdrop-blur-sm transition-opacity duration-700 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />
      {navRef && <Nav navRef={navRef} />}
      <Outlet />
    </div>
  );
}

export default AppLayout;
