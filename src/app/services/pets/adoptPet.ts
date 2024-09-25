import { IAdoptPet } from '@/@types/Pets/IAdoptPet';
import { api } from '../axios';

export async function adoptPet(body: IAdoptPet) {
  const { data } = await api.post('/pets/adopt', body);

  return data;
}
