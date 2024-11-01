import { API_URL } from "../constant";

export const register = async (document, name, email, password) => {
  const response = await fetch(`${API_URL}/Crear`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ document, name, email, password }),
  });

  if (!response.ok) {
    throw new Error("Error al registrar usuario");
  }

  return await response.json();
};
