import React from "react";
import "./Login.css";
import CustomButton from "../../components/common/button/CustomButton";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constant/path";
import { ONLY_EMAIL_REGEX } from "../../helpers/constants/regex/email-regex.helper";

const REQUIRED_MESSAGE = "Este campo es requerido";

const Login = () => {
  const { isLoading, methods, handleLogin } = useLogin();

  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = methods;

  const emailErrors = errors.correo;
  const passwordErrors = errors.password;

  return (
    <form className="containerLogin" onSubmit={handleSubmit(handleLogin)}>
      <h2 className="title">Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        className={`input ${emailErrors ? "input-error" : ""}`}
        {...register("correo", {
          required: REQUIRED_MESSAGE,
          pattern: {
            value: ONLY_EMAIL_REGEX,
            message: "Formato de correo inválido",
          },
        })}
      />
      {emailErrors && <p className="error-message">{emailErrors.message}</p>}

      <input
        type="password"
        placeholder="Contraseña"
        className={`input ${passwordErrors ? "input-error" : ""}`}
        {...register("password", {
          required: REQUIRED_MESSAGE,
          minLength: {
            value: 8,
            message: "La contraseña debe tener minimo 8 caracteres",
          },
        })}
      />
      {passwordErrors && (
        <p className="error-message">{passwordErrors.message}</p>
      )}

      <div className="button-container">
        <CustomButton loading={isLoading} size="large" type="submit">
          Iniciar Sesión
        </CustomButton>

        <p>
          Eres nuevo?{" "}
          <span
            onClick={() => navigate(Paths.REGISTER)}
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
