export interface LoginRequestDto {
  documento: number;
  nombre: string;
  correo: string;
  token: string;
}

export type LoginResponseDto = LoginRequestDto;
