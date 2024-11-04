import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constant/path";
import { register } from "../../services/auth/registerService";
import { RegisterResponseDto } from "../../types/dto/register.dto";
import { useForm } from "react-hook-form";

interface RegisterFormValues {
  correo: string;
  password: string;
  documento: string;
  nombre: string;
}

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<RegisterFormValues>();

  const navigate = useNavigate();

  const handleRegister = async (data: RegisterFormValues) => {
    const registerData: RegisterResponseDto = {
      correo: data.correo,
      documento: Number(data.documento),
      nombre: data.nombre,
      password: data.password,
    };

    try {
      await register(registerData);
      toast.success("Registro exitoso!");
      navigate(Paths.LOGIN);
    } catch (error) {
      console.error(error);

      toast.error("Error al registrar. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    methods,

    handleRegister,
  };
};
