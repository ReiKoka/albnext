import { NavLink } from "react-router";
import { navigationLinks } from "../../utils/constants";

function WebNav() {
  return (
    <ul className="font-primary flex gap-6">
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <NavLink to={link.path} className="capitalize">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default WebNav;
