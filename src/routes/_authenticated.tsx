import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context;

    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
});
