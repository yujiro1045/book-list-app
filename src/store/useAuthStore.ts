import { create } from "zustand";
import { LoginResponseDto } from "../types/dto/login.dto";
import { createJSONStorage, persist } from "zustand/middleware";

type User = Omit<LoginResponseDto, "token">;

interface AuthState {
  token: string | null;
  user: User | null;
}

interface AuthActions {
  onLogin: (user: LoginResponseDto) => void;
  onLogout: () => void;
}

type AuthStatement = AuthActions & AuthState;

const useAuthStore = create(
  persist<AuthStatement>(
    (set) => ({
      error: null,
      token: null,
      user: null,
      onLogin(user) {
        set(() => {
          const { token, ...rest } = user;
          return { token, user: { ...rest } };
        });
      },
      onLogout() {
        set({ user: null, token: null });
      },
    }),
    { name: "auth-state", storage: createJSONStorage(() => localStorage) }
  )
);

export default useAuthStore;

/* interface AuthState {
  loginError: string | null;
  registerError: string | null;
  setLoginError: (error: string | null) => void;
  setRegisterError: (error: string | null) => void;
} */

/* const useAuthStore = create<AuthState>((set) => ({
  loginError: null,
  registerError: null,
  setLoginError: (error) => set({ loginError: error }),
  setRegisterError: (error) => set({ registerError: error }),
})); */
