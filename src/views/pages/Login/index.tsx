import { cn } from '@/lib/utils';
import { Button } from '@/views/components/Button';
import { ErrorMessage } from '@/views/components/ErrorMessage';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { Link } from '@tanstack/react-router';
import { Eye, EyeOff, Loader2, PawPrint } from 'lucide-react';
import { useLoginController } from './useLoginController';

export function Login() {
  const {
    register,
    errors,
    handleSubmit,
    isLoading,
    togglePassword,
    showPassword
  } = useLoginController();

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-64 lg:py-0">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center gap-2 -ml-10">
              <PawPrint className="h-7 w-7 text-primary" />
              <h1 className="text-3xl font-semibold text-primary">
                FindAFriend
              </h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Entre com seu email para acessar sua conta
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="org@example.com"
                {...register('email')}
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <div className='relative'>
                <Input
                  id="password"
                  type={!showPassword ? 'password' : 'text'}
                  placeholder="********"
                  className={cn('placeholder:text-base', !showPassword ? 'text-2xl' : 'text-base')}
                  {...register('password')}
                />
                <button
                  type="button"
                  className='absolute right-4 top-1/2 -translate-y-1/2'
                  onClick={togglePassword}
                >
                  {!showPassword ? (
                    <EyeOff size={18} className='text-zinc-600 cursor-pointer' />
                  ) : (
                    <Eye size={18} className='text-zinc-600 cursor-pointer' />
                  )}
                </button>
              </div>
              {errors.password && (
                <ErrorMessage message={errors.password.message} />
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-1">
                  <Loader2 className="w-4 h-4 animate-spin" /> Aguarde...
                </span>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
          <div className='flex flex-col items-center'>
            <div className="mt-4 text-center text-sm">
              Não tem uma conta?{' '}
              <Link to="/signup" className="underline">
                Cadastrar
              </Link>
            </div>
            <span className='my-2 text-sm flex items-center'>
              <span className='block w-16 h-[1px] bg-zinc-200 mr-2' />
              ou
              <span className='block w-16 h-[1px] bg-zinc-200 ml-2' />
            </span>
            <div className="text-sm ml-2">
              <Link to="/" className="underline">
                Quero adotar
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="h-full w-full relative">
          <img
            src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRvcHRpb24lMjBwZXR8ZW58MHx8MHx8fDA%3D"
            alt="Imagem de fundo"
            className="inset-0 w-full h-screen object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}
