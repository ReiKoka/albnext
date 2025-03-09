import { use } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MainLogo from "../../assets/images/main_logo.svg?react";

function BigLogo() {
  const themeContext = use(ThemeContext);

  const theme = themeContext?.theme;

  return (
    <div>
      <MainLogo
        className={`${theme === "light" ? "fill-logo" : "fill-foreground"} w-[70%] `}
      />
    </div>
  );
}

export default BigLogo;
