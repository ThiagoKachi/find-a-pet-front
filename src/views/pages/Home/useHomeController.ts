import { IPetsFilters } from '@/@types/Pets/IPetsFilters';
import { IPetsListResponse } from '@/@types/Pets/IPetsListResponse';
import { fetchPets } from '@/app/services/pets/fetchPets';
import { useStore } from '@/app/store';
import { capitalizeFirstLetter } from '@/app/utils/capitalizeFirstLetter';
import { Route } from '@/routes/index';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export function useHomeController() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const { species, age, size, gender, limit, page } = Route.useSearch() as IPetsFilters;

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
        size: size === 'all' ? undefined : capitalizeFirstLetter(size!),
        limit: limit ? limit : 10,
        page: page ? page : 1,
      };

      const data: IPetsListResponse = await fetchPets(filters);

      setPets(data.pets || []);

      return data.pets;
    },
  });

  return {
    pets: data || [],
    isLoading,
    isFilterOpen,
    handleOpenFilters,
    refetch,
  };
}
