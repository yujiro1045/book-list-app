import { RegisterForm } from "../../types/forms/register-form.type";

const defaultFieldValue = {
  value: "",
  error: "",
};

export const registerFormInitialValue: RegisterForm = {
  identification: defaultFieldValue,
  email: defaultFieldValue,
  name: defaultFieldValue,
  password: defaultFieldValue,
};
