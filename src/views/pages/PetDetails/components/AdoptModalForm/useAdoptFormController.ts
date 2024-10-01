import { adoptPet } from '@/app/services/pets/adoptPet';
import { Route } from '@/routes/pet-details/$id';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { showConfetti } from './buttonEffect';

const schema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório.' }),
  email: z.string().email({ message: 'Email inválido.' }).min(1, { message: 'Email é obrigatório.' }),
  phone: z.string().min(1, { message: 'Telefone é obrigatório.' }),
  address: z.string().min(1, { message: 'Endereço é obrigatório.' }),
  city: z.string().min(1, { message: 'Cidade é obrigatória.' }),
  state: z.string().min(1, { message: 'Estado é obrigatório.' }),
  zipcode: z.string().min(1, { message: 'CEP é obrigatório.' }),
  instagramURL: z.string().optional(),
});

export type FormData = z.infer<typeof schema>;

export function useAdoptFormController() {
  const [open, setOpen] = useState(false);

  const { id } = Route.useParams();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      await adoptPet({
        ...data,
        petId: id,
        consent: true,
      });
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      setOpen(false);

      toast.success(
        'Seu interesse foi enviado para a org. Em breve a org entrará em contato. ❤️ 🐾'
      );

      showConfetti();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao enviar seu interesse: ${error.response?.data.error}`
        );
      }
    }
  });

  return {
    register,
    errors,
    handleSubmit,
    isPending,
    open,
    setOpen,
  };
}
