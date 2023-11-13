import { Link } from "react-router-dom";

const NavBarMenuItem = ({ name, href }) => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={href}>
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavBarMenuItem;
