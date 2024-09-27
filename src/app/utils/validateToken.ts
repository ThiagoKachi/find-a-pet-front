import { jwtDecode, JwtPayload } from 'jwt-decode';

export function isTokenValid(token: string) {
  const decoded: JwtPayload = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp! > currentTime;
}
