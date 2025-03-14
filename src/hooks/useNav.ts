import { use } from "react";
import { NavHeightContext } from "../context/NavHeightContext";

function useNav() {
  const context = use(NavHeightContext);

  if (!context) {
    throw new Error("NavContext cannot be used outside NavProvider");
  }

  return context;
}

export default useNav;
