import { api } from '../axios';

interface ICreateSessionResponse {
  token: string;
  orgId: string;
}

export async function createSession(
  email: string,
  password: string
): Promise<ICreateSessionResponse> {
  const { data } = await api.post('/sessions', { email, password });

  return data;
}
