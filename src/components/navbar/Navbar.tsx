import { Link } from "react-router-dom";
import "./Navbar.css";
import { Paths } from "../../constant/path";
import React from "react";
import useAuthStore from "../../store/useAuthStore";

interface NavbarProps {
  isAuthenticated: Boolean;
}

const Navbar: React.FC<NavbarProps> = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="navbar">
      <h1 className="titleNavbar">My Books App</h1>
      <ul className="nav-links">
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
        {isAuthenticated && (
          <>
            <li>
              <Link to={Paths.BOOKS} className="nav-link">
                Books
              </Link>
            </li>
            <li>
              <Link to={Paths.LIST} className="nav-link">
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
