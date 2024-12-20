import { API_URL } from "../../helpers/constants/env/env.constant.helper";
import { LoginRequestDto, LoginResponseDto } from "../../types/dto/login.dto";

export const login = async (
  data: LoginRequestDto
): Promise<LoginResponseDto> => {
  const response = await fetch(`${API_URL}usuario/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al iniciar sesión");
  }

  return await response.json();
};
