import { api } from '../axios';

export async function fetchPetById(petID: string) {
  const { data } = await api.get(`/pets/${petID}`);

  return data;
}
