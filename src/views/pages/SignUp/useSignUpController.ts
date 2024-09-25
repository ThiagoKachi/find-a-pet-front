import { registerOrg } from '@/app/services/orgs/registerOrg';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Email inválido.' }).min(1, { message: 'Email é obrigatório.' }),
  name: z.string().min(1, { message: 'Nome é obrigatório.' }),
  password: z.object({
    password: z.string().min(6, { message: 'Senha deve conter pelo menos 6 caracteres.' }),
    confirmPassword: z.string().min(6, { message: 'Confirme sua senha.' }),
  }).refine((data) => data.password === data.confirmPassword, { message: 'As senhas devem ser iguais.', path: ['confirmPassword'] }),
  address: z.string().min(1, { message: 'Endereço é obrigatório.' }),
  city: z.string().min(1, { message: 'Cidade é obrigatória.' }),
  state: z.string().min(1, { message: 'Estado é obrigatório.' }),
  zipcode: z.string().min(1, { message: 'CEP é obrigatório.' }),
  whatsapp_number: z.string().min(1, { message: 'Telefone é obrigatório.' }),
});

export type FormData = z.infer<typeof schema>;

export function useSignUpController() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      await registerOrg({ ...data, password: data.password.password });
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      navigate({
        to: '/login',
      });

      toast.success('Cadastro realizado com sucesso! 🐾');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao realizar o seu cadastro: ${error.response?.data.error}`
        );
      }
    }
  });

  return {
    register,
    errors,
    handleSubmit,
    isPending,
  };
}
