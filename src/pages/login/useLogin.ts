import toast from "react-hot-toast";
import { Paths } from "../../constant/path";
import { LoginResponseDto } from "../../types/dto/login.dto";
import { login } from "../../services/auth/loginService";
import { ONLY_EMAIL_REGEX } from "../../helpers/constants/regex/email-regex.helper";
import { LoginForm } from "../../types/forms/login-form.type";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFormInitialValue } from "../../helpers/forms/login-form.helpers";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/useAuthStore";

interface LoginFormValues {
  correo: string;
  password: string;
}

export const useLogin = () => {
  const { onSetUser, onSetAuthenticated } = useAuthStore();

  const methods = useForm<LoginFormValues>();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormValues) => {
    try {
      const response = await login(data);
      onSetAuthenticated(true);
      onSetUser(response);

      toast.success("Ingreso exitoso");
      navigate(Paths.BOOKS);
    } catch (error) {
      toast.error("Error al intentar ingresar, inténtalo de nuevo");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    methods,

    handleLogin,
  };
};
