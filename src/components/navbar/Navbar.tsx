import { Link } from "react-router-dom";
import "./Navbar.css";
import { Paths } from "../../enum/path.enum";
import useAuthStore from "../../store/useAuthStore";

interface ListToRender {
  name: string;
  path?: Paths;
  onClick?: VoidFunction;
}

const Navbar = () => {
  const { isAuthenticated, user, onLogout } = useAuthStore();

  const listUnauthenticated: ListToRender[] = [
    { name: "Login", path: Paths.LOGIN },
    { name: "Register", path: Paths.REGISTER },
  ];

  const listAuthenticated: ListToRender[] = [
    { name: "Libros", path: Paths.BOOKS },
    { name: "Lista de lectura", path: Paths.LIST },
  ];

  return (
    <nav className="navbar">
      <h1 className="titleNavbar">Mi aplicación de libros</h1>

      <ul className="nav-links">
        {(isAuthenticated ? listAuthenticated : listUnauthenticated).map(
          (item, index) => (
            <li key={index} className="nav-item">
              <Link
                to={item?.path ?? "#"}
                onClick={item.onClick}
                className="nav-link"
              >
                {item?.name}
              </Link>
            </li>
          )
        )}
      </ul>

      {isAuthenticated && (
        <ul className="user-section">
          {user && <li className="user-name">{user.nombre}</li>}
          <li className="logout-link">
            <button onClick={onLogout} className="nav-link">
              Cerrar sesión
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
