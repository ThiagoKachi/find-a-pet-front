import { createPet } from '@/app/services/pets/createPet';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório.' }),
  age: z.number({ message: 'Idade é obrigatória.' }),
  species: z.enum(['Cat', 'Dog', 'Bird', 'Other'], { message: 'Espécie é obrigatória.' }),
  breed: z.string().min(1, { message: 'Raca é obrigatória.' }),
  size: z.enum(['Small', 'Medium', 'Large'], { message: 'Tamanho é obrigatório.' }),
  gender: z.enum(['Male', 'Female'], { message: 'Genero é obrigatório.' }),
  description: z.string().optional(),
  available: z.boolean().default(true),
});

export type FormData = z.infer<typeof schema>;

export function useCreatePetController() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      gender: 'Male',
    }
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      await createPet(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      navigate({
        to: '/',
      });

      toast.success('Cadastro do pet realizado com sucesso! 🐾');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao realizar o cadastro do seu pet: ${error.response?.data.error}`
        );
      }
    }
  });

  return {
    register,
    errors,
    handleSubmit,
    isPending,
    control
  };
}
