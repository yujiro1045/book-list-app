export interface RegisterRequestDto {
  documento: number;
  nombre: string;
  correo: string;
  password: string;
}

export type RegisterResponseDto = RegisterRequestDto;
