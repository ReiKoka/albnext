import { use } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LightModeLogo from "../../assets/images/favicon_1_light_mode.svg?react";
import DarkModeLogo from "../../assets/images/favicon_1_dark_mode.svg?react";

function Logo() {
  const themeContext = use(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { theme } = themeContext;

  return (
    <div>
      {theme === "light" ? (
        <LightModeLogo className="w-7" />
      ) : (
        <DarkModeLogo className="w-7" />
      )}
    </div>
  );
}

export default Logo;
