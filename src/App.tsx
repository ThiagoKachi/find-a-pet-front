import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from './app/store';
import { routeTree } from './routeTree.gen';
import { Toaster } from './views/components/Toast';
import { NotFound } from './views/pages/NotFound';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFound />,
  context: { isAuthenticated: undefined!, login: undefined!, logout: undefined! },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

function App() {
  const { isAuthenticated, login, logout } = useStore(useShallow(state => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login,
    logout: state.auth.logout,
  })));

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position='top-right'
        richColors
        expand
        theme='light'
        toastOptions={{}}
      />
      <div className="w-full h-screen bg-slate-50">
        <RouterProvider
          router={router}
          context={{
            isAuthenticated,
            login,
            logout,
          }}
        />
      </div>

    </QueryClientProvider>
  );
}

export default App;
