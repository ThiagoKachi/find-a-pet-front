import { IPet } from '@/@types/IPets';
import { StoreSlice } from '../store';

type PetStore = {
  pets: IPet[];
  petInfo: IPet | null;
}

type PetActions = {
  setPets: (pets: IPet[]) => void;
  setPetInfo: (pet: IPet | null) => void;
}

export type PetSlice = PetStore & PetActions;

export const createPetSlice: StoreSlice<PetSlice> = (set) => ({
  pets: [],
  setPets: (pets) => set(() => ({ pets })),
  petInfo: null,
  setPetInfo: (pet) => set(() => ({ petInfo: pet })),
});
