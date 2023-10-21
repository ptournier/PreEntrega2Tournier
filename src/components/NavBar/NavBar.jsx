import CartWidget from "../CartWidget/CartWidget";
import NavBarMenu from "../NavBarMenu/NavBarMenu";

function NavBar() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          RegalosYa.com
        </a>
        <NavBarMenu />
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
