import { isTokenValid } from '@/app/utils/validateToken';
import { COOKIES_KEYS } from '@/config/cookiesKeys';
import { Outlet, createRootRouteWithContext, redirect } from '@tanstack/react-router';
import { Cookies } from 'react-cookie';
import { toast } from 'sonner';

type RootRouteProps = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const cookies = new Cookies();

export const Route = createRootRouteWithContext<RootRouteProps>()({
  component: () => <Outlet />,
  beforeLoad: ({ context }) => {
    const accessTokenStorage = cookies.get(COOKIES_KEYS.TOKEN);

    const { login, logout } = context;

    const token = accessTokenStorage;

    if (token) {
      const isValidToken = isTokenValid(token);

      if (isValidToken) {
        login();
      } else {
        logout();
        cookies.remove(COOKIES_KEYS.TOKEN);
        throw redirect({ to: '/' });
      }
    } else {
      logout();
      cookies.remove(COOKIES_KEYS.TOKEN);
      toast.info('Por favor, realize o login para acessar esta página');
      throw redirect({ to: '/' });
    }
  },
});
