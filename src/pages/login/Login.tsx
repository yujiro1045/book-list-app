import React from "react";
import "./Login.css";
import CustomButton from "../../components/common/button/CustomButton";
import { useLogin } from "./useLogin";

const Login = () => {
  const {
    email,
    isLoading,
    password,

    handleLogin,
    handleRegisterRedirect,
    onChangeForm,
  } = useLogin();

  const handleSubmit = () => {};

  return (
    <form className="containerLogin" onSubmit={handleLogin}>
      <h2 className="title">Iniciar Sesión</h2>
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

      <div className="button-container">
        <CustomButton loading={isLoading} size="large" type="submit">
          Iniciar Sesión
        </CustomButton>

        <p>
          Eres nuevo?{" "}
          <span
            onClick={handleRegisterRedirect}
            style={{ cursor: "pointer", color: "#3669c9" }}
          >
            Registrate
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
