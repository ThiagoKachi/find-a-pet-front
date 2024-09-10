import { Login } from '@/views/pages/Login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: () => <Login />
});
