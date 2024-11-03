import React, { FormEvent, useState } from "react";
import "./Login.css";
import CustomButton from "../../components/common/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constant/path";
import { loginFormInitialValue } from "../../helpers/forms/login-form.helpers";
import { LoginResponseDto } from "../../types/dto/login.dto";
import { LoginForm } from "../../types/forms/login-form.type";
import { login } from "../../services/auth/loginService";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>(loginFormInitialValue);
  const navigate = useNavigate();

  const onChangeForm = (name: keyof LoginForm, value: string) => {
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { email, password } = loginForm;

  const handleRegisterRedirect = () => {
    navigate(Paths.REGISTER);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const credentials = { correo: email, password };

    try {
      const response: LoginResponseDto = await login(
        credentials as LoginResponseDto
      );

      localStorage.setItem("token", response.token);
      localStorage.setItem("userName", response.nombre);
      localStorage.setItem("documento", response.documento.toString());

      toast.success("Ingreso exitoso");

      navigate(Paths.BOOKS);
    } catch (error) {
      toast.error("Error al intentar ingresar, intentalo de nuevo");
    }
  };

  return (
    <form className="containerLogin">
      <h2 className="title">Iniciar Sesión</h2>
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
      <div className="button-container">
        <CustomButton size="large" onClick={handleLogin}>
          Iniciar Sesion
        </CustomButton>

        <CustomButton onClick={handleRegisterRedirect} size="large">
          Registrate
        </CustomButton>
      </div>
    </form>
  );
};

export default Login;
