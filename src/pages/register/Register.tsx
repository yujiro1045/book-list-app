import React, { useState, FormEvent } from "react";
import "./Register.css";
import { register } from "../../services/auth/registerService";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constant/path";
import CustomButton from "../../components/common/button/CustomButton";
import { RegisterResponseDto } from "../../types/dto/register.dto";
import { registerFormInitialValue } from "../../helpers/forms";
import { RegisterForm } from "../../types/forms/register-form.type";
import toast from "react-hot-toast";

const Register: React.FC = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>(
    registerFormInitialValue
  );
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    identification: false,
  });

  const onChangeForm = (name: keyof RegisterForm, value: string) => {
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: value === "",
    }));
  };

  const { email, identification, name, password } = registerForm;

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate(Paths.LOGIN);
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const documentNumber = identification !== "" ? Number(identification) : 0;

    const data: RegisterResponseDto = {
      correo: email,
      documento: documentNumber,
      nombre: name,
      password: password,
    };

    try {
      await register(data);
      toast.success("Registro exitoso!");
      navigate(Paths.LOGIN);
    } catch (error) {
      toast.error("Error al registrar. Inténtalo de nuevo.");
    }
  };

  const isFormComplete = name && email && password && identification;

  return (
    <form className="containerRegister" onSubmit={handleRegister}>
      <h2 className="title">Crear Cuenta</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => onChangeForm("name", e.target.value)}
        className="input"
      />
      {errors.name && <p>Este campo es obligatorio</p>}
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => onChangeForm("email", e.target.value)}
        className="input"
      />
      {errors.email && (
        <p className="error-message">Este campo es obligatorio</p>
      )}
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => onChangeForm("password", e.target.value)}
        className="input"
      />
      {errors.password && (
        <p className="error-message">Este campo es obligatorio</p>
      )}
      <input
        type="number"
        placeholder="Documento"
        value={identification}
        onChange={(e) => onChangeForm("identification", e.target.value)}
        className="input"
      />
      {errors.identification && (
        <p className="error-message">Este campo es obligatorio</p>
      )}

      <div className="button-container">
        <CustomButton
          onClick={handleRegister}
          size="large"
          disabled={!isFormComplete}
          type="submit"
        >
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
