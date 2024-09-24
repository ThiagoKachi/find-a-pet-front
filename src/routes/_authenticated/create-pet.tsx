import { Header } from '@/views/components/Header';
import { CreatePet } from '@/views/pages/CreatePet';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/create-pet')({
  component: () => (
    <>
      <Header />
      <CreatePet />
    </>
  )
});
