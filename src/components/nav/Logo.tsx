import { use } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LightModeLogo from "../../assets/images/favicon_1_light_mode.svg?react";
import DarkModeLogo from "../../assets/images/favicon_1_dark_mode.svg?react";

function Logo() {
  const themeContext = use(ThemeContext);

  const theme = themeContext?.theme;

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
