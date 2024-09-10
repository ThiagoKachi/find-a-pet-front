import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { NotFound } from './views/pages/NotFound';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFound />
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <div className="w-full h-screen bg-slate-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
