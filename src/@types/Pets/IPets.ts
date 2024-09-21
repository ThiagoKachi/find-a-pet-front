export interface IPet {
  id: string;
  name: string;
  age: number;
  species: string;
  breed: string;
  size: string;
  gender: string;
  description: string;
  available: boolean;
  created_at: string;
  updated_at: string;
  orgId: string;
  petImages: {
    id: string;
    file_key: string;
  }[];
}
