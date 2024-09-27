import { authRoute } from '../axios';

export async function removeOrg(orgID: string) {
  const { data } = await authRoute.delete(`/orgs/${orgID}`);

  return data;
}
