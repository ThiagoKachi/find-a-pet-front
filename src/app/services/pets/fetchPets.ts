import { IPetsFilters } from '@/@types/Pets/IPetsFilters';
import { api } from '../axios';

export async function fetchPets(filters?: IPetsFilters) {
  const { data } = await api.get('/pets', { params: filters });

  return data;
}
