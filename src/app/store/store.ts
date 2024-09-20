import { StateCreator } from 'zustand';
import { AuthSlice } from './slices/authSlice';
import { PetSlice } from './slices/petSlice';

export type Store = {
  auth: AuthSlice
  pet: PetSlice;
}

export type StoreSlice<T> = StateCreator<
  Store,
  [['zustand/immer', never]],
  [],
  T
>
