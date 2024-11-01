import { useState } from "react";
import { register } from "../services/registerService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await register({ name, email, password });
      alert("Registro exitoso!");
    } catch (error) {
      console.error("Error", error);
      alert("Error al registrar. Inténtalo de nuevo.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Crear Cuenta</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
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
      <button onClick={handleRegister} style={styles.button}>
        Registrarse
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

export default Register;
