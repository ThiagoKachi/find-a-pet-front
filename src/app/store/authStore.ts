import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  login: (user: any) => void;
  logout: () => void;
}

export const authProvider = create<AuthState>((set) => ({
  isAuthenticated: true,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
