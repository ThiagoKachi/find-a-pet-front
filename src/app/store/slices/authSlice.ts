import { StoreSlice } from '../store';

type AuthStore = {
  isAuthenticated: boolean;
  user: any;
}

type AuthActions = {
  login: (user: any) => void;
  logout: () => void;
}

export type AuthSlice = AuthStore & AuthActions;

export const createAuthSlice: StoreSlice<AuthSlice> = (set) => ({
  isAuthenticated: true,
  user: null,
  login: (user) => set(() => ({ isAuthenticated: true, user })),
  logout: () => set(() => ({ isAuthenticated: false, user: null })),
});
