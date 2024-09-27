import { api } from '../axios';

export async function createSession(
  email: string,
  password: string
): Promise<{ token: string }> {
  const { data } = await api.post('/sessions', { email, password });

  return data;
}
