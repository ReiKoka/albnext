import LightModeLogo from "../../assets/images/favicon_1_light_mode.svg?react";
import DarkModeLogo from "../../assets/images/favicon_1_dark_mode.svg?react";
import useTheme from "../../hooks/useTheme";

function Logo() {
  const { theme } = useTheme();

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
