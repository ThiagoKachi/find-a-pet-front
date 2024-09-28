import { api } from '../axios';

export async function removeFile(fileKey: string) {
  await api.delete(`/pets/images/${fileKey}`);
}
