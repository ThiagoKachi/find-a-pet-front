import { IPet } from '@/@types/Pets/IPets';
import { fetchPetById } from '@/app/services/pets/fetchPetById';
import { Route } from '@/routes/pet-details/$id';
import { useQuery } from '@tanstack/react-query';

export function usePetDetailsController() {
  const { id } = Route.useParams();

  const { data, isFetching: isLoading } = useQuery({
    queryKey: ['pet-details'],
    queryFn: async () => {
      const data: IPet = await fetchPetById(id);

      return data;
    },
  });

  return {
    petDetails: data,
    isLoading,
  };
}
