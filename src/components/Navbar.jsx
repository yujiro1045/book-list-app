import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Books App</h1>
      <ul className="nav-links">
        <li>
          <Link to="/login" className="nav-links">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="nav-links">
            Register
          </Link>
        </li>
        <li>
          <Link to="/books" className="nav-links">
            Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
