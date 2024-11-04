import React from "react";
import "./Register.css";
import CustomButton from "../../components/common/button/CustomButton";
import { useRegister } from "./useRegister";

const Register = () => {
  const {
    email,
    identification,
    isLoading,
    name,
    password,

    handleLoginRedirect,
    handleRegister,
    onChangeForm,
  } = useRegister();

  return (
    <form className="containerRegister" onSubmit={handleRegister}>
      <h2 className="title">Crear Cuenta</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name.value}
        onChange={(e) => onChangeForm("name", e.target.value)}
        className={`input ${name.error ? "input-error" : "input-valid"}`}
      />
      {name.error && <p className="error-message">{name.error}</p>}

      <input
        type="email"
        placeholder="Correo"
        value={email.value}
        onChange={(e) => onChangeForm("email", e.target.value)}
        className={`input ${email.error ? "input-error" : ""}`}
      />
      {email.error && <p className="error-message">{email.error}</p>}

      <input
        type="password"
        placeholder="Contraseña"
        value={password.value}
        onChange={(e) => onChangeForm("password", e.target.value)}
        className={`input ${password.error ? "input-error" : ""}`}
      />
      {password.error && <p className="error-message">{password.error}</p>}

      <input
        type="number"
        placeholder="Documento"
        value={identification.value}
        onChange={(e) => onChangeForm("identification", e.target.value)}
        className={`input ${identification.error ? "input-error" : ""}`}
      />
      {identification.error && (
        <p className="error-message">{identification.error}</p>
      )}

      <div className="button-container">
        <CustomButton loading={isLoading} size="large" type="submit">
          Registrate
        </CustomButton>

        <p>
          Ya tienes cuenta?{" "}
          <span
            onClick={handleLoginRedirect}
            style={{ cursor: "pointer", color: "#3669c9" }}
          >
            Inicia sesión
          </span>
        </p>
      </div>
    </form>
  );
};

export default Register;
