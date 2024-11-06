import "./Login.css";
import CustomButton from "../../components/common/button/CustomButton";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../enum/path.enum";
import { ONLY_EMAIL_REGEX } from "../../helpers/constants/regex/email-regex.helper";
import CustomInput from "../../components/common/input/CustomInput";

const REQUIRED_MESSAGE = "Este campo es requerido";

const Login = () => {
  const { isLoading, methods, handleLogin } = useLogin();

  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = methods;

  return (
    <form className="containerLogin" onSubmit={handleSubmit(handleLogin)}>
      <h2 className="title-login">Iniciar Sesión</h2>
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

      <div className="button-container">
        <CustomButton loading={isLoading} size="large" type="submit">
          Iniciar Sesión
        </CustomButton>

        <p>
          Eres nuevo?{" "}
          <span
            onClick={() => navigate(Paths.REGISTER)}
            style={{ cursor: "pointer", color: "#3669c9" }}
          >
            Registrate
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
