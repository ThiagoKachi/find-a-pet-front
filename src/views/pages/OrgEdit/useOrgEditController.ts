import { IOrg } from '@/@types/Orgs/IOrgs';
import { editOrg } from '@/app/services/orgs/editOrg';
import { fetchOrgById } from '@/app/services/orgs/fetchOrgById';
import { removeOrg } from '@/app/services/orgs/removeOrg';
import { useStore } from '@/app/store';
import { COOKIES_KEYS } from '@/config/cookiesKeys';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useShallow } from 'zustand/react/shallow';

const schema = z.object({
  email: z.string().email('Email inválido'),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.string(),
  whatsapp_number: z.string(),
});

export type FormData = z.infer<typeof schema>;

export function useOrgEditController() {
  const [cookie] = useCookies([COOKIES_KEYS.ORG_ID]);

  const navigate = useNavigate();

  const { setOrgInfo } = useStore(
    useShallow(state => ({
      setOrgInfo: state.org.setOrgInfo,
    }))
  );

  const { data, isFetching: isLoading } = useQuery({
    queryKey: ['org-edit-details'],
    queryFn: async () => {
      const data: IOrg = await fetchOrgById(cookie[COOKIES_KEYS.ORG_ID]);

      setOrgInfo(data);

      return data;
    },
    staleTime: 1000 * 60 * 10,
  });

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    values: {
      email: data?.email || '',
      name: data?.name || '',
      address: data?.address || '',
      city: data?.city || '',
      state: data?.state || '',
      zipcode: data?.zipcode || '',
      whatsapp_number: data?.whatsapp_number || '',
    }
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await editOrg('e36c0d00-661b-4af6-a6c6-53f5ec3db61d', data);

      toast.success('Org atualizada com sucesso!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao atualizar a sua org: ${error.response?.data.error}`
        );
      }
    }
  });

  const { mutateAsync, isPending: isRemovingOrg } = useMutation({
    mutationFn: (orgID: string) => removeOrg(orgID),
  });

  async function handleRemoveOrg() {
    try {
      await mutateAsync('e36c0d00-661b-4af6-a6c6-53f5ec3db61d');

      navigate({
        to: '/',
      });

      toast.success('Org removida com sucesso!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao remover a sua org: ${error.response?.data.error}`
        );
      }
    }
  }

  return {
    orgDetails: data,
    isLoading,
    register,
    handleSubmit,
    errors,
    handleRemoveOrg,
    isRemovingOrg,
  };
}
