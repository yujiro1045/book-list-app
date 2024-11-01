import { useState } from "react";
import { register } from "../services/registerService";
import "./Register.css";

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
    <div className="containerRegister">
      <h1>Login</h1>
      <h2 className="title">Crear Cuenta</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button onClick={handleRegister} className="button">
        Registrarse
      </button>
    </div>
  );
};

export default Register;
