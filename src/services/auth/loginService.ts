import { API_URL } from "../../constant";
import { LoginParams, LoginResponse } from "../../interfaces/loginInterface";

export const login = async ({
  email,
  password,
}: LoginParams): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error al iniciar sesión");
  }

  return await response.json();
};
