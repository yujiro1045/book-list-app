import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flex: 1,
    padding: "2rem",
  },
};
