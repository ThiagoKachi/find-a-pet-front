import { IUpdatePet } from '@/@types/Pets/IUpdatePet';
import { api } from '../axios';

export async function updatePet(body: IUpdatePet, petID: string) {
  const { data } = await api.put(`/pets/${petID}`, body);

  return data;
}
