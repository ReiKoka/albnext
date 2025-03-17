import { createContext, useEffect, useRef, useState, ReactNode } from "react";

interface NavHeightContextType {
  navHeight: number;
  navRef: React.RefObject<HTMLDivElement | null>;
}

const NavHeightContext = createContext<NavHeightContextType | undefined>(
  undefined,
);

export const NavHeightProvider = ({ children }: { children: ReactNode }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);

    return () => window.removeEventListener("resize", updateNavHeight);
  }, [navHeight]);

  return (
    <NavHeightContext.Provider value={{ navHeight, navRef }}>
      {children}
    </NavHeightContext.Provider>
  );
};

export { NavHeightContext };
