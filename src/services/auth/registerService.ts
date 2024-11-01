import { API_URL } from "../../constant";
import {
  RegisterParams,
  RegisterResponse,
} from "../../interfaces/registerInterface";

export const register = async (
  data: RegisterParams
): Promise<RegisterResponse> => {
  try {
    const response = await fetch(`${API_URL}/Crear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al registrar usuario");
    }

    return (await response.json()) as RegisterResponse;
  } catch (error) {
    console.error("Error en el servicio de registro", error);
    throw error;
  }
};
