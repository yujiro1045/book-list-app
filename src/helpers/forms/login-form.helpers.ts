import { LoginForm } from "../../types/forms/login-form.type";

export const loginFormInitialValue: LoginForm = {
  email: { value: "", error: "" },
  password: { value: "", error: "" },
};
