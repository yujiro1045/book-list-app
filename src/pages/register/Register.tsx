import React, { useState, FormEvent } from "react";
import "./Register.css";
import { register } from "../../services/auth/registerService";
import { RegisterParams } from "../../interfaces/registerInterface";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [document, setDocument] = useState<number | "">("");

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const documentNumber = document !== "" ? Number(document) : 0;

    const data: RegisterParams = {
      name,
      email,
      password,
      document: documentNumber,
    };

    try {
      await register(data);
      alert("Registro exitoso!");
    } catch (error) {
      alert("Error al registrar. Inténtalo de nuevo.");
    }
  };

  return (
    <form className="containerRegister" onSubmit={handleRegister}>
      <h1>Registrate</h1>
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
      <input
        type="number"
        placeholder="Documento"
        value={document === "" ? "" : document}
        onChange={(e) =>
          setDocument(e.target.value ? Number(e.target.value) : "")
        }
        className="input"
      />
      <button type="submit" className="button">
        Registrarse
      </button>
    </form>
  );
};

export default Register;
