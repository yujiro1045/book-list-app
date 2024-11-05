import { Link } from "react-router-dom";
import "./Navbar.css";
import { Paths } from "../../constant/path";
import useAuthStore from "../../store/useAuthStore";

const Navbar = () => {
  const { isAuthenticated, onLogout } = useAuthStore();

  return (
    <nav className="navbar">
      <h1 className="titleNavbar">Mi aplicación de líbros</h1>
      <ul className="nav-links">
        {!isAuthenticated ? (
          <>
            <li>
              <Link to={Paths.LOGIN} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={Paths.REGISTER} className="nav-link">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={Paths.BOOKS} className="nav-link">
                Líbros
              </Link>
            </li>
            <li>
              <Link to={Paths.LIST} className="nav-link">
                Lista de lectura
              </Link>
            </li>
            <li>
              <Link to="#" onClick={onLogout} className="nav-link">
                Cerrar sesión
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
