import { IOrg } from '@/@types/Orgs/IOrgs';
import { fetchOrgById } from '@/app/services/orgs/fetchOrgById';
import { Route } from '@/routes/org-details/$id';
import { useQuery } from '@tanstack/react-query';

export function useOrgDetailsController() {
  const { id } = Route.useParams();

  const { data, isFetching: isLoading } = useQuery({
    queryKey: ['org-details'],
    queryFn: async () => {
      const data: IOrg = await fetchOrgById(id);

      return data;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    orgDetails: data,
    isLoading,
  };
}
