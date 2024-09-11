import { Header } from '@/views/components/Header';
import { EditPet } from '@/views/pages/PetEdit';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pet-edit/$id')({
  component: PetEditComponent
});

function PetEditComponent() {
  const { id } = Route.useParams();

  return (
    <>
      <Header />
      <EditPet petID={id} />
    </>
  );
}
