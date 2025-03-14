import { NavLink } from "react-router";
import { IconType } from "react-icons";
import useMobileNav from "../../hooks/useMobileNav";

type MobileNavSingleLinkProps = {
  route: string;
  linkTitle: string;
  icon: IconType;
};

//prettier-ignore
function MobileNavSingleLink({ route, linkTitle, icon: Icon}: MobileNavSingleLinkProps) {
  const {setIsOpen} = useMobileNav() 

  const handleClick = () => {
    if(setIsOpen) setIsOpen(false)
  };

  return (
    <li className="border-border border-b py-4 last:border-0">
      <NavLink
        to={route}
        className="font-primary text-foreground flex items-center gap-4 text-xl leading-5 font-medium tracking-wide"
        onClick={handleClick}
      >
        <Icon size={30} strokeWidth={1.3} />
        <span className="capitalize">{linkTitle}</span>
      </NavLink>
    </li>
  );
}

export default MobileNavSingleLink;
