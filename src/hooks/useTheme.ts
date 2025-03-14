import { use } from "react";
import { ThemeContext } from "../context/ThemeContext";

function useTheme() {
  const context = use(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext cannot be used outside ThemeProvider");
  }

  return context;
}

export default useTheme;
