import { COOKIES_KEYS } from '@/config/cookiesKeys';
import { env } from '@/config/env';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const getTokenFromCookies = () => {
  const accessTokenStorage = cookies.get(COOKIES_KEYS.TOKEN);

  return accessTokenStorage ? `Bearer ${accessTokenStorage}` : null;
};

export const api = axios.create({
  baseURL: env.BASE_API_URL
});

export const authRoute = axios.create({
  baseURL: env.BASE_API_URL
});

authRoute.interceptors.request.use((config) => {
  config.headers.Authorization = getTokenFromCookies();

  return config;
});
