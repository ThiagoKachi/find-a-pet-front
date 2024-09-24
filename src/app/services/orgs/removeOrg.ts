import { api } from '../axios';

export async function removeOrg(orgID: string) {
  const { data } = await api.delete(`/orgs/${orgID}`);

  return data;
}
