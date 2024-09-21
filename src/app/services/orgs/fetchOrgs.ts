import { IOrgsFilters } from '@/@types/Orgs/IOrgsFilters';
import { api } from '../axios';

export async function fetchOrgs(filters?: IOrgsFilters) {
  const { data } = await api.get('/orgs', { params: filters });

  return data;
}
