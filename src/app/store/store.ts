import { StateCreator } from 'zustand';
import { AuthSlice } from './slices/authSlice';
import { OrgSlice } from './slices/orgSlice';
import { PetSlice } from './slices/petSlice';

export type Store = {
  auth: AuthSlice
  pet: PetSlice;
  org: OrgSlice;
}

export type StoreSlice<T> = StateCreator<
  Store,
  [['zustand/immer', never]],
  [],
  T
>
