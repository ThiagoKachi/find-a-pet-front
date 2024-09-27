import { authRoute } from '../axios';

export async function deletePet(petID: string) {
  const { data } = await authRoute.delete(`/pets/${petID}`);

  return data;
}
