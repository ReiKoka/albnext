import { use } from "react";
import Home from "../components/main/Home";
import { NavHeightContext } from "../context/NavHeightContext";

function LandingPage() {
  const navContext = use(NavHeightContext);
  const navHeight = navContext?.navHeight;
  return <div>{navHeight && <Home navHeight={navHeight} />}</div>;
}

export default LandingPage;
