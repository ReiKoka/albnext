import { use } from "react";
import { MobileNavContext } from "../context/MobileNavContext";

function useMobileNav() {
  const context = use(MobileNavContext);

  if (!context) {
    throw new Error(
      "MobileNavContext cannot be used outside MobileNavProvider",
    );
  }

  return context;
}

export default useMobileNav;
