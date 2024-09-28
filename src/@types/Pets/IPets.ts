type PetGender = 'Male' | 'Female';
type PetSize = 'Small' | 'Medium' | 'Large';
type PetSpecies = 'Cat' | 'Dog' | 'Bird' | 'Other';

export type IPetImages = {
  id: string;
  file_key: string;
  blob?: boolean;
};

export interface IPet {
  id: string;
  name: string;
  age: number;
  species: PetSpecies;
  breed: string;
  size: PetSize;
  gender: PetGender;
  description: string;
  available: boolean;
  created_at: string;
  updated_at: string;
  orgId: string;
  petImages: IPetImages[];
}
