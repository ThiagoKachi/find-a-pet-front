import { IPet } from '@/@types/IPets';
import { fetchPets } from '@/app/services/fetchPets';
import { useStore } from '@/app/store';
import { useQuery } from '@tanstack/react-query';
import { useShallow } from 'zustand/react/shallow';

export function useHomeController() {
  const { setPets } = useStore(
    useShallow(state => ({
      setPets: state.pet.setPets,
    }))
  );

  const { data, isFetching: isLoading } = useQuery({
    queryKey: ['pets-list'],
    queryFn: async () => {
      const data: IPet[] = await fetchPets();

      setPets(data);

      return data;
    },
    staleTime: 1000 * 60,
  });

  return { data, isLoading };
}
