export interface LoginRequestDto {
  correo: string;
  password: string;
}

export interface LoginResponseDto {
  documento: number;
  nombre: string;
  correo: string;
  token: string;
}
