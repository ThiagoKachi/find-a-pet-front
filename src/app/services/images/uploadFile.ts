import { api } from '../axios';

export async function uploadFile(petID: string, file: FormData) {
  await api.post(`/pets/images/${petID}`, file);
}
