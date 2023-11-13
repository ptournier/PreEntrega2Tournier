import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import NavBarMenu from "../NavBarMenu/NavBarMenu";

const NavBar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          RegalosYa.com
        </Link>
        <NavBarMenu />
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
