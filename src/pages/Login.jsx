import { useState } from "react";
import { login } from "../services/loginService";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      const { name, token } = data;
      localStorage.setItem("token", token);
      setUser({ name });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Iniciar Sesión
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "0 auto",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#3669C9",
  },
  input: {
    height: "40px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px",
    width: "100%",
    fontSize: "16px",
  },
  button: {
    height: "40px",
    backgroundColor: "#3669C9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default Login;
