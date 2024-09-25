import { ICreatePet } from '@/@types/Pets/ICreatePet';
import { api } from '../axios';

export async function createPet(body: ICreatePet) {
  const { data } = await api.post('/pets', body);

  return data;
}
