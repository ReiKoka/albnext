import MainLogo from "../../assets/images/main_logo.svg?react";
import useTheme from "../../hooks/useTheme";

function BigLogo() {
  const { theme } = useTheme();

  return (
    <div>
      <MainLogo
        className={`${theme === "light" ? "fill-logo" : "fill-foreground"} w-[70%]`}
      />
    </div>
  );
}

export default BigLogo;
