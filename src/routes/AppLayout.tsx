import { use } from "react";
import Nav from "../components/nav/Nav";
import { NavHeightContext } from "../context/NavHeightContext";
import Home from "../components/main/Home";

function AppLayout() {
  const navContext = use(NavHeightContext);

  if (!navContext) {
    throw new Error("NavHeightContext must be used within a NavHeightProvider");
  }

  const { navRef, navHeight } = navContext;

  return (
    <div className="mx-auto h-auto min-h-screen w-dvw max-w-[2000px]">
      <Nav navRef={navRef} />
      <Home navHeight={navHeight} />
      <h1>HEYYYYY</h1>
    </div>
  );
}

export default AppLayout;
