import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

type RootRouteProps = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const Route = createRootRouteWithContext<RootRouteProps>()({
  component: () => <Outlet />
});
