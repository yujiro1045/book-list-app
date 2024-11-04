import React from "react";
import "./Register.css";
import CustomButton from "../../components/common/button/CustomButton";
import { useRegister } from "./useRegister";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constant/path";
import { ONLY_EMAIL_REGEX } from "../../helpers/constants/regex/email-regex.helper";

const REQUIRED_MESSAGE = "Este campo es requerido";

const Register = () => {
  const { isLoading, handleRegister, methods } = useRegister();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = methods;

  const navigate = useNavigate();

  return (
    <form className="containerRegister" onSubmit={handleSubmit(handleRegister)}>
      <h2 className="title">Crear Cuenta</h2>
      <input
        type="text"
        placeholder="Nombre"
        className={`input ${errors.nombre ? "input-error" : "input-valid"}`}
        {...register("nombre", {
          required: REQUIRED_MESSAGE,
        })}
      />
      {errors.nombre && (
        <p className="error-message">{errors.nombre.message}</p>
      )}

      <input
        type="email"
        placeholder="Correo"
        className={`input ${errors.correo ? "input-error" : ""}`}
        {...register("correo", {
          required: REQUIRED_MESSAGE,
          pattern: {
            value: ONLY_EMAIL_REGEX,
            message: "Formato de correo inválido",
          },
        })}
      />
      {errors.correo && (
        <p className="error-message">{errors.correo.message}</p>
      )}

      <input
        type="password"
        placeholder="Contraseña"
        className={`input ${errors.password ? "input-error" : ""}`}
        {...register("password", {
          required: REQUIRED_MESSAGE,
          minLength: {
            value: 8,
            message: "La contraseña debe tener minimo 8 caracteres",
          },
        })}
      />
      {errors.password && (
        <p className="error-message">{errors.password.message}</p>
      )}

      <input
        type="number"
        placeholder="Documento"
        className={`input ${errors.documento ? "input-error" : ""}`}
        {...register("documento", { required: REQUIRED_MESSAGE })}
      />
      {errors.documento && (
        <p className="error-message">{errors.documento.message}</p>
      )}

      <div className="button-container">
        <CustomButton loading={isLoading} size="large" type="submit">
          Registrate
        </CustomButton>

        <p>
          Ya tienes cuenta?{" "}
          <span
            onClick={() => navigate(Paths.LOGIN)}
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
