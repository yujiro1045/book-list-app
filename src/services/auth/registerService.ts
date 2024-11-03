import { API_URL } from "../../constant";
import {
  RegisterRequestDto,
  RegisterResponseDto,
} from "../../types/dto/register.dto";

export const register = async (
  data: RegisterRequestDto
): Promise<RegisterResponseDto> => {
  try {
    const response = await fetch(`${API_URL}usuario/Crear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al registrar usuario");
    }

    return (await response.json()) as RegisterResponseDto;
  } catch (error) {
    console.error("Error en el servicio de registro", error);
    throw error;
  }
};