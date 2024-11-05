import "./Register.css";
import CustomButton from "../../components/common/button/CustomButton";
import { useRegister } from "./useRegister";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constant/path";
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
      <h2 className="title">Crear Cuenta</h2>
      <CustomInput
        type="text"
        placeholder="Nombre"
        label="Nombre"
        {...register("nombre", {
          required: REQUIRED_MESSAGE,
        })}
        error={errors.nombre}
      />
      {errors.nombre && (
        <p className="error-message">{errors.nombre.message}</p>
      )}

      <CustomInput
        type="email"
        placeholder="Correo"
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
      {errors.correo && (
        <p className="error-message">{errors.correo.message}</p>
      )}

      <CustomInput
        type="password"
        placeholder="Contraseña"
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
      {errors.password && (
        <p className="error-message">{errors.password.message}</p>
      )}

      <CustomInput
        type="number"
        placeholder="Documento"
        label="Documento"
        {...register("documento", { required: REQUIRED_MESSAGE })}
        error={errors.documento}
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
