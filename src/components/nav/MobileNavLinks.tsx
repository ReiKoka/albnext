import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineQuestionMarkCircle,
  HiXMark,
} from "react-icons/hi2";

import BigLogo from "./BigLogo";
import Button from "../ui/Button";
import MobileNavSingleLink from "./MobileNavSingleLink";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type MobileNavLinksProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNavLinks({ isOpen, setIsOpen }: MobileNavLinksProps) {
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(mobileNavRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false),
  );
  
  return (
    <div
      ref={mobileNavRef}
      className={` ${isOpen ? "translate-x-0] visible opacity-100" : "invisible -translate-x-[100%] opacity-0"} animate-fade-left animate-once animate-ease-out bg-background fixed top-0 left-0 h-full w-[90%] rounded-r-2xl p-6 duration-700`}
    >
      <div className="mb-15 flex items-center justify-between">
        <BigLogo />
        <Button
          variant="icon"
          className="border-muted-foreground rounded-lg shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          <HiXMark size={30} className="fill-muted-foreground" />
        </Button>
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          <MobileNavSingleLink
            route="/"
            icon={HiOutlineHome}
            linkTitle="Home"
          />
          <MobileNavSingleLink
            route="/why-albania"
            icon={HiOutlineQuestionMarkCircle}
            linkTitle="Why Albania"
          />
          <MobileNavSingleLink
            route="how-it-works"
            icon={HiOutlineInformationCircle}
            linkTitle="Hot it works"
          />
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavLinks;
