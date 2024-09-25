import { SignUp } from '@/views/pages/SignUp';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/signup')({
  component: () => <SignUp />
});
