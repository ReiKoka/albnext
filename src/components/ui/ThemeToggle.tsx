import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import Button from "./Button";
import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      className="group text-muted-foreground hover:text-primary relative h-6 w-6 cursor-pointer items-center justify-center rounded-full border-0 p-0 transition-all duration-300 ease-out hover:translate-y-0"
      onClick={handleToggle}
      variant="icon"
    >
      <HiOutlineSun
        className={`text-foreground group-hover:text-primary absolute transition-all duration-300 ease-out group-hover:scale-110 group-active:scale-75 ${
          theme === "light"
            ? "rotate-[-180deg] opacity-0"
            : "rotate-0 opacity-100"
        }`}
        size={22}
      />
      <HiOutlineMoon
        className={`text-foreground group-hover:text-primary absolute transition-all duration-300 ease-out group-hover:scale-110 group-active:scale-75 ${
          theme === "light"
            ? "rotate-0 opacity-100"
            : "rotate-[-180deg] opacity-0"
        }`}
        size={20}
      />
    </Button>
  );
}

export default ThemeToggle;
