import { create } from "zustand";

interface AuthState {
  token: string | null;

  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
      set({ token });
    }
  },
}));
