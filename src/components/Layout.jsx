import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main className="mainContent">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
