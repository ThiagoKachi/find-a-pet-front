/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSession } from '@/app/services/auth/login';
import { useStore } from '@/app/store';
import { COOKIES_KEYS } from '@/config/cookiesKeys';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useShallow } from 'zustand/react/shallow';

const schema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve conter pelo menos 6 caracteres'),
});

export type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const [showPassword, setShowPassword] = useState(false);

  const [_, setCookie] = useCookies();

  const navigate = useNavigate();

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  const { login } = useStore(
    useShallow(state => ({
      login: state.auth.login,
    }))
  );

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      const { token, orgId } = await createSession(data.email, data.password);

      return { token, orgId };
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const session_infos = await mutateAsync(
        { email: data.email, password: data.password }
      );

      setCookie(COOKIES_KEYS.ORG_ID, JSON.stringify(session_infos.orgId), {
        secure: true,
        maxAge: 60 * 60 * 24, // 1 day
      });

      login();

      setCookie(COOKIES_KEYS.TOKEN, JSON.stringify(session_infos.token), {
        secure: true,
        maxAge: 60 * 60 * 24, // 1 day
      });

      navigate({
        to: '/',
      });

      toast.success('Login realizado com sucesso!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao realizar o seu login: ${error.response?.data.message}`
        );
      }
    }
  });

  return {
    isLoading: isPending,
    register,
    handleSubmit,
    errors,
    togglePassword,
    showPassword
  };
}

