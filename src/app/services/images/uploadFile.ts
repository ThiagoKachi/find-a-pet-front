import { api } from '../axios';

interface IUploadFilesResponse {
  message: string;
  petImages: {
    id: string;
    file_key: string;
  }[]
}

export async function uploadFile(petID: string, file: FormData) {
  const { data } = await api.post<IUploadFilesResponse>(`/pets/images/${petID}`, file);

  return data;
}
