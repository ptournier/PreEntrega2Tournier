import { NavLink } from "react-router-dom";

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
          <li className="nav-item">
            <NavLink className="nav-link" to={"/"}>
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/category/1"}>
            Calzado
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/category/2"}>
              Ropa
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/category/3"}>
            Electrodomesticos
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBarMenu;
