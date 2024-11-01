export interface RegisterParams {
  document: number;
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  userId?: string;
  message?: string;
}
