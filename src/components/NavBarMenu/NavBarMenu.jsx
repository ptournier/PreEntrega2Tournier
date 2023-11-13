import NavBarMenuItem from "../NavBarMenuItem/NavBarMenuItem";

const NavBarMenu = () => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavBarMenuItem name="Inicio" href="/" />
          <NavBarMenuItem name="Calzado" href="/category/1" />
          <NavBarMenuItem name="Ropa" href="/category/2" />
          <NavBarMenuItem name="Electrodomesticos" href="/category/3" />
        </ul>
      </div>
    </>
  );
};

export default NavBarMenu;
