import { api } from '../axios';

export async function deletePet(petID: string) {
  const { data } = await api.delete(`/pets/${petID}`);

  return data;
}
