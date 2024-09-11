import { CreatePet } from '@/views/pages/CreatePet';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/create-pet')({
  component: () => <CreatePet />
});
