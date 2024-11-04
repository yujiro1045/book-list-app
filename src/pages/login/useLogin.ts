import toast from "react-hot-toast";
import { Paths } from "../../constant/path";
import { LoginResponseDto } from "../../types/dto/login.dto";
import { login } from "../../services/auth/loginService";
import { ONLY_EMAIL_REGEX } from "../../helpers/constants/regex/email-regex.helper";
import { LoginForm } from "../../types/forms/login-form.type";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFormInitialValue } from "../../helpers/forms/login-form.helpers";

export const useLogin = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>(loginFormInitialValue);

  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = loginForm;

  const navigate = useNavigate();

  const onChangeForm = (name: keyof LoginForm, value: string) => {
    setLoginForm((prev) => ({
      ...prev,
      [name]: {
        error: "",
        value,
      },
    }));
  };

  const setError = (name: keyof LoginForm, error: string) => {
    setLoginForm((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        error,
      },
    }));
  };

  const handleRegisterRedirect = () => {
    navigate(Paths.REGISTER);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    let error = false;

    for (const [fieldName, fieldValue] of Object.entries(loginForm)) {
      if (!fieldValue.value) {
        setError(
          fieldName as keyof LoginForm,
          `El campo ${fieldName} es requerido`
        );
        error = true;
      }
    }

    if (email.value && !ONLY_EMAIL_REGEX.test(email.value)) {
      setError("email", "Formato de correo inválido");
      error = true;
    }

    if (error) {
      setIsLoading(false);
      return;
    }

    const credentials = { correo: email.value, password: password.value };

    try {
      const response: LoginResponseDto = await login(credentials);
      localStorage.setItem("token", response.token);
      localStorage.setItem("userName", response.nombre);
      localStorage.setItem("documento", response.documento.toString());

      toast.success("Ingreso exitoso");
      navigate(Paths.BOOKS);
    } catch (error) {
      setError("general", "Error al intentar ingresar, inténtalo de nuevo");
      toast.error("Error al intentar ingresar, inténtalo de nuevo");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    isLoading,
    password,

    handleLogin,
    handleRegisterRedirect,
    onChangeForm,
  };
};
