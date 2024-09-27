import { IPet } from '@/@types/Pets/IPets';
import { IPetsFilters } from '@/@types/Pets/IPetsFilters';
import { fetchPets } from '@/app/services/pets/fetchPets';
import { useStore } from '@/app/store';
import { capitalizeFirstLetter } from '@/app/utils/capitalizeFirstLetter';
import { Route } from '@/routes/index';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export function useHomeController() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const { species, age, size, gender } = Route.useSearch() as IPetsFilters;

  function handleOpenFilters() {
    setIsFilterOpen(!isFilterOpen);
  }

  const { setPets } = useStore(
    useShallow(state => ({
      setPets: state.pet.setPets,
    }))
  );

  const { data, isFetching: isLoading, refetch } = useQuery({
    queryKey: ['pets-list'],
    queryFn: async () => {
      const filters = {
        age: age === 0 ? undefined : age,
        species: species === 'all' ? undefined : capitalizeFirstLetter(species!),
        gender: gender === 'all' ? undefined : capitalizeFirstLetter(gender!),
        size: size === 'all' ? undefined : capitalizeFirstLetter(size!)
      };

      const data: IPet[] = await fetchPets(filters);

      setPets(data);

      return data;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    pets: data || [],
    isLoading,
    isFilterOpen,
    handleOpenFilters,
    refetch,
  };
}
