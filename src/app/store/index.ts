import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createAuthSlice } from './slices/authSlice';
import { createOrgSlice } from './slices/orgSlice';
import { createPetSlice } from './slices/petSlice';
import { Store } from './store';

export const useStore = create<Store>()(
  immer((set, get, api) => ({
    auth: createAuthSlice(set, get, api),
    pet: createPetSlice(set, get, api),
    org: createOrgSlice(set, get, api),
  }))
);
