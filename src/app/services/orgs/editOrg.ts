import { IEditOrgBody } from '@/@types/Orgs/IEditOrgBody';
import { authRoute } from '../axios';

export async function editOrg(orgID: string, body: IEditOrgBody) {
  const { data } = await authRoute.put(`/orgs/${orgID}`, body);

  return data;
}
