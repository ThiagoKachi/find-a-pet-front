import { IRegisterOrgBody } from '@/@types/Orgs/IRegisterOrgBody';
import { api } from '../axios';

export async function registerOrg(body: IRegisterOrgBody) {
  const { data } = await api.post('/orgs', body);

  return data;
}
