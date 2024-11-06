import "./Register.css";
import CustomButton from "../../components/common/button/CustomButton";
import { useRegister } from "./useRegister";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../enum/path.enum";
import { ONLY_EMAIL_REGEX } from "../../helpers/constants/regex/email-regex.helper";
import CustomInput from "../../components/common/input/CustomInput";

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
      <h2 className="title-register">Crear Cuenta</h2>
      <CustomInput
        type="text"
        placeholder="Ingresa tu nombre"
        label="Nombre"
        {...register("nombre", {
          required: REQUIRED_MESSAGE,
        })}
        error={errors.nombre}
      />

      <CustomInput
        type="email"
        placeholder="Ingresa tu correo"
        label="Correo"
        {...register("correo", {
          required: REQUIRED_MESSAGE,
          pattern: {
            value: ONLY_EMAIL_REGEX,
            message: "Formato de correo inválido",
          },
        })}
        error={errors.correo}
      />

      <CustomInput
        type="password"
        placeholder="Ingresa tu contraseña"
        label="Contraseña"
        {...register("password", {
          required: REQUIRED_MESSAGE,
          minLength: {
            value: 8,
            message: "La contraseña debe tener mínimo 8 caracteres",
          },
        })}
        error={errors.password}
      />

      <CustomInput
        type="number"
        placeholder="Ingresa tu numero de documento"
        label="Documento"
        {...register("documento", { required: REQUIRED_MESSAGE })}
        error={errors.documento}
      />

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
