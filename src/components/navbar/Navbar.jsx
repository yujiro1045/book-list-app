import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <h1 className="titleNavbar">My Books App</h1>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <Link to="/books" className="nav-link">
                Books
              </Link>
            </li>
            <li>
              <Link to="/list" className="nav-link">
                Lista de lectura
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
