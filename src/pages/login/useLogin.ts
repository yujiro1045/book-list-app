import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../enum/path.enum";
import { login } from "../../services/auth/loginService";
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
