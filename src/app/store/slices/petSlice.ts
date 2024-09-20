import { IPet } from '@/@types/IPets';
import { StoreSlice } from '../store';

type PetStore = {
  pets: IPet[];
}

type PetActions = {
  setPets: (pets: IPet[]) => void;
}

export type PetSlice = PetStore & PetActions;

export const createPetSlice: StoreSlice<PetSlice> = (set) => ({
  pets: [],
  setPets: (pets) => set(() => ({ pets })),
});
