import { StoreSlice } from '../store';

type AuthStore = {
  isAuthenticated: boolean;
}

type AuthActions = {
  login: () => void;
  logout: () => void;
}

export type AuthSlice = AuthStore & AuthActions;

export const createAuthSlice: StoreSlice<AuthSlice> = (set) => ({
  isAuthenticated: false,
  login: () => set((state) => { state.auth.isAuthenticated = true; }),
  logout: () => set((state) => { state.auth.isAuthenticated = false; }),
});

