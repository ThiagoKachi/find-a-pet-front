import { IOrg } from '@/@types/Orgs/IOrgs';
import { IOrgsFilters } from '@/@types/Orgs/IOrgsFilters';
import { fetchOrgs } from '@/app/services/orgs/fetchOrgs';
import { useStore } from '@/app/store';
import { capitalizeFirstLetter } from '@/app/utils/capitalizeFirstLetter';
import { Route } from '@/routes/orgs';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export function useOrgsController() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const { name, city } = Route.useSearch() as IOrgsFilters;

  function handleOpenFilters() {
    setIsFilterOpen(!isFilterOpen);
  }

  const { setOrgs } = useStore(
    useShallow(state => ({
      setOrgs: state.org.setOrgs,
    }))
  );

  const { data, isFetching: isLoading, refetch } = useQuery({
    queryKey: ['orgs-list'],
    queryFn: async () => {
      const filters = {
        name: name === 'all' ? undefined : capitalizeFirstLetter(name!),
        city: city === 'all' ? undefined : capitalizeFirstLetter(city!),
      };

      const data: IOrg[] = await fetchOrgs(filters);

      setOrgs(data);

      return data;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    orgs: data || [],
    isLoading,
    isFilterOpen,
    handleOpenFilters,
    refetch,
  };
}
