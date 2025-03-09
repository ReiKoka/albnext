import { ElementType } from "react";
import { NavLink } from "react-router";

type MobileNavSingleLinkProps = {
  route: string;
  linkTitle: string;
  icon: ElementType;
};

function MobileNavSingleLink({
  route,
  linkTitle,
  icon: Icon,
}: MobileNavSingleLinkProps) {
  const handleClick = () => {};

  return (
    <li className="border-border border-b py-4 last:border-0">
      <NavLink
        to={route}
        className="font-primary text-foreground flex items-center gap-4 text-xl leading-5 font-medium tracking-wide"
        onClick={handleClick}
      >
        <Icon size={30} strokeWidth={1.2} />
        <span>{linkTitle}</span>
      </NavLink>
    </li>
  );
}

export default MobileNavSingleLink;
