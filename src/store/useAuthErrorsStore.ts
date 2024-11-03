// src/stores/useAuthStore.ts
import { create } from "zustand";

interface AuthState {
  loginError: string | null;
  registerError: string | null;
  setLoginError: (error: string | null) => void;
  setRegisterError: (error: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  loginError: null,
  registerError: null,
  setLoginError: (error) => set({ loginError: error }),
  setRegisterError: (error) => set({ registerError: error }),
}));

export default useAuthStore;
