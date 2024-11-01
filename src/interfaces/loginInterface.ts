export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  name: string;
}
