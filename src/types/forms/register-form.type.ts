import { FormValue } from "./form-value.type";

export interface RegisterForm {
  identification: FormValue;
  name: FormValue;
  email: FormValue;
  password: FormValue;
}
