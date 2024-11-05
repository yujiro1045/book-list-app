import { create } from "zustand";
import { LoginResponseDto } from "../types/dto/login.dto";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  user: LoginResponseDto | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  onLogout: () => void;
  onSetAuthenticated: (isAuthenticated: boolean) => void;
  onSetUser: (user: LoginResponseDto) => void;
}

type AuthStatement = AuthActions & AuthState;

const useAuthStore = create(
  persist<AuthStatement>(
    (set) => ({
      isAuthenticated: false,
      error: null,
      user: null,

      onLogout() {
        set({ user: null, isAuthenticated: false });
      },
      onSetAuthenticated(isAuthenticated) {
        set({ isAuthenticated });
      },
      onSetUser(user) {
        set({ user });
      },
    }),
    { name: "auth-state", storage: createJSONStorage(() => localStorage) }
  )
);

export default useAuthStore;
