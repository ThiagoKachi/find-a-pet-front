import { ICreatePet } from '@/@types/Pets/ICreatePet';
import { authRoute } from '../axios';

export async function createPet(body: ICreatePet) {
  const { data } = await authRoute.post('/pets', body);

  return data;
}
