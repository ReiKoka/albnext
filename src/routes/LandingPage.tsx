import Home from "../components/main/Home";
import useNav from "../hooks/useNav";

function LandingPage() {
  const { navHeight } = useNav();

  //prettier-ignore
  return (
    <div>
      {navHeight && <Home navHeight={navHeight} />}
    </div>)
}

export default LandingPage;
