import { IPet } from '@/@types/Pets/IPets';
import { fetchPetById } from '@/app/services/pets/fetchPetById';
import { useStore } from '@/app/store';
import { Route } from '@/routes/pet-details/$id';
import { useQuery } from '@tanstack/react-query';
import { useShallow } from 'zustand/react/shallow';

export function usePetDetailsController() {
  const { id } = Route.useParams();

  const { setPetInfo } = useStore(
    useShallow(state => ({
      setPetInfo: state.pet.setPetInfo,
    }))
  );

  const { data, isFetching: isLoading } = useQuery({
    queryKey: ['pet-details'],
    queryFn: async () => {
      const data: IPet = await fetchPetById(id);

      setPetInfo(data);

      return data;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    petDetails: data,
    isLoading,
  };
}
