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
import useAuthStore from "../../store/useAuthErrorsStore";

const Register: React.FC = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>(
    registerFormInitialValue
  );
  const { setRegisterError } = useAuthStore();
  const navigate = useNavigate();

  const onChangeForm = (name: keyof RegisterForm, value: string) => {
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { email, identification, name, password } = registerForm;

  const handleLoginRedirect = () => {
    navigate(Paths.LOGIN);
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !identification || !name || !password) {
      setRegisterError("Por favor, completa todos los campos.");
      return;
    }

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
      setRegisterError("Error al registrar. Inténtalo de nuevo.");
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
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => onChangeForm("email", e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => onChangeForm("password", e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Documento"
        value={identification}
        onChange={(e) => onChangeForm("identification", e.target.value)}
        className="input"
      />
      <p className="error-message">
        {useAuthStore((state) => state.registerError)}
      </p>

      <div className="button-container">
        <CustomButton
          size="large"
          disabled={!isFormComplete}
          onClick={handleRegister}
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
