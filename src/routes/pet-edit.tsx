import { Header } from '@/views/components/Header';
import { EditPet } from '@/views/pages/PetEdit';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pet-edit')({
  component: () => (
    <>
      <Header />
      <EditPet />
    </>
  )
});
