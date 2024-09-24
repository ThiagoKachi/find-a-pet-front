import { IEditOrgBody } from '@/@types/Orgs/IEditOrgBody';
import { api } from '../axios';

export async function editOrg(orgID: string, body: IEditOrgBody) {
  const { data } = await api.put(`/orgs/${orgID}`, body);

  return data;
}
