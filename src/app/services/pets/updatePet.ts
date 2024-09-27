import { IUpdatePet } from '@/@types/Pets/IUpdatePet';
import { authRoute } from '../axios';

export async function updatePet(body: IUpdatePet, petID: string) {
  const { data } = await authRoute.put(`/pets/${petID}`, body);

  return data;
}
