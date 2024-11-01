const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <p>&copy; 2024 My App. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#282c34",
    color: "white",
    position: "fixed",
    width: "100%",
    bottom: 0,
  },
};
