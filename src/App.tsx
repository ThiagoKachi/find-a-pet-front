import { createRouter, RouterProvider } from '@tanstack/react-router';
import { authProvider } from './app/store/authStore';
import { routeTree } from './routeTree.gen';
import { NotFound } from './views/pages/NotFound';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFound />,
  context: { isAuthenticated: undefined! }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { isAuthenticated } = authProvider();

  return (
    <div className="w-full h-screen bg-slate-50">
      <RouterProvider router={router} context={{ isAuthenticated }} />
    </div>
  );
}

export default App;
