import { Header } from '@/views/components/Header';
import { PetDetails } from '@/views/pages/PetDetails';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pet-details/$id')({
  component: PetDetailsComponent
});

function PetDetailsComponent() {
  return (
    <>
      <Header />
      <PetDetails />
    </>
  );
}
