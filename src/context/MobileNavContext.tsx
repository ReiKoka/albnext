import { createContext, ReactNode, useState } from "react";

type MobileNavContextTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavContext = createContext<MobileNavContextTypes | undefined>(
  undefined,
);

type MobileNavProviderProps = {
  children: ReactNode;
};

export const MobileNavProvider = ({ children }: MobileNavProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MobileNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
};

export { MobileNavContext };
