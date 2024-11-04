import { create } from "zustand";
import { LoginResponseDto } from "../types/dto/login.dto";
import { createJSONStorage, persist } from "zustand/middleware";

type User = Omit<LoginResponseDto, "token">;

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  onLogin: (user: LoginResponseDto) => void;
  onLogout: () => void;
  onSetAuthenticated: (isAuthenticated: boolean) => void;
}

type AuthStatement = AuthActions & AuthState;

const useAuthStore = create(
  persist<AuthStatement>(
    (set) => ({
      isAuthenticated: false,
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
      onSetAuthenticated(isAuthenticated) {
        set({ isAuthenticated });
      },
    }),
    { name: "auth-state", storage: createJSONStorage(() => localStorage) }
  )
);

export default useAuthStore;
