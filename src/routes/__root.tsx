import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

type RootRouteProps = {
  isAuthenticated: boolean;
};

export const Route = createRootRouteWithContext<RootRouteProps>()({
  component: () => <Outlet />
});
