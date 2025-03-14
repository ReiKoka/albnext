import { Link } from "react-router";

function WebNav() {
  return (
    <ul className="font-primary flex gap-6">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/why-albania">Why Albania?</Link>
      </li>
      <li>
        <Link to="/how-it-works">How it works?</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </ul>
  );
}

export default WebNav;
