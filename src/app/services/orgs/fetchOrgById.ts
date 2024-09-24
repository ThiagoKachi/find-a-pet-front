import { api } from '../axios';

export async function fetchOrgById(orgID: string) {
  const { data } = await api.get(`/orgs/${orgID}`);

  return data;
}
