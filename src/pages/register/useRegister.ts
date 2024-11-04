import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constant/path";
import { ONLY_EMAIL_REGEX } from "../../helpers/constants/regex/email-regex.helper";
import { ONLY_NUMBERS_REGEX } from "../../helpers/constants/regex/numeric-regex.helper";
import { registerFormInitialValue } from "../../helpers/forms";
import { register } from "../../services/auth/registerService";
import { RegisterResponseDto } from "../../types/dto/register.dto";
import { RegisterForm } from "../../types/forms/register-form.type";

export const useRegister = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>(
    registerFormInitialValue
  );

  const [isLoading, setIsLoading] = useState(false);

  const { email, identification, name, password } = registerForm;

  const navigate = useNavigate();

  const onChangeForm = (name: keyof RegisterForm, value: string) => {
    setRegisterForm((prev) => ({
      ...prev,
      [name]: {
        error: "",
        value,
      },
    }));
  };

  const cleanErrors = () => {
    for (const fieldName in registerForm) {
      setError(fieldName as keyof RegisterForm, "");
    }
  };

  const setError = (name: keyof RegisterForm, error: string) => {
    setRegisterForm((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        error,
      },
    }));
  };

  const handleLoginRedirect = () => {
    navigate(Paths.LOGIN);
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cleanErrors();

    setIsLoading(true);

    let error = false;

    for (const [fieldName, fieldValue] of Object.entries(registerForm)) {
      if (!fieldValue.value) {
        setError(
          fieldName as keyof RegisterForm,
          `El campo ${fieldName} es requerido`
        );

        error = true;
      }
    }

    if (
      identification.value &&
      !ONLY_NUMBERS_REGEX.test(identification.value)
    ) {
      setError("identification", "El campo documento solo admite números");
      error = true;
    }

    if (email.value && !ONLY_EMAIL_REGEX.test(email.value)) {
      setError("email", "Formato de correo inválido");
      error = true;
    }

    if (error) {
      setIsLoading(false);
      return;
    }

    const data: RegisterResponseDto = {
      correo: email.value,
      documento: Number(identification.value),
      nombre: name.value,
      password: password.value,
    };

    try {
      await register(data);
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
    email,
    identification,
    isLoading,
    name,
    password,

    handleLoginRedirect,
    handleRegister,
    onChangeForm,
  };
};
