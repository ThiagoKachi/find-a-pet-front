import { Button } from '@/views/components/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/views/components/Card';
import { ErrorMessage } from '@/views/components/ErrorMessage';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { Loader2 } from 'lucide-react';
import { useSignUpController } from './useSignUpController';

export function SignUp() {
  const { handleSubmit, isPending, errors, register } = useSignUpController();

  return (
    <div className="flex items-center justify-center h-screen -mt-10">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Cadastro de ORG</CardTitle>
          <CardDescription>
            Por favor, preencha o formulário abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="E-mail da ORG"
                {...register('email')}
              />
              {errors.email && (
                <ErrorMessage message={errors.email.message} />
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  {...register('password.password')}
                />
                {errors.password?.password && (
                  <ErrorMessage message={errors.password.password.message} />
                )}
              </div>
              <div className="grid gap-2 items-center">
                <Label htmlFor="confirm_password">Confirmar Senha</Label>
                <Input
                  id="confirm_password"
                  type="password"
                  placeholder="Confirme sua senha"
                  {...register('password.confirmPassword')}
                />
                {errors.password?.confirmPassword && (
                  <ErrorMessage message={errors.password?.confirmPassword.message} />
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">Nome da ORG</Label>
              <Input
                id="name"
                placeholder="Nome da org"
                {...register('name')}
              />
              {errors.name && (
                <ErrorMessage message={errors.name.message} />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Endereço da org" {...register('address')} />
              {errors.address && (
                <ErrorMessage message={errors.address.message} />
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" placeholder="Cidade que está localizada" {...register('city')} />
                {errors.city && (
                  <ErrorMessage message={errors.city.message} />
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">Estado</Label>
                <Input id="state" placeholder="Seu estado" {...register('state')} />
                {errors.state && (
                  <ErrorMessage message={errors.state.message} />
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="zipcode">CEP</Label>
                <Input id="zipcode" placeholder="Seu CEP" {...register('zipcode')} />
                {errors.zipcode && (
                  <ErrorMessage message={errors.zipcode.message} />
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Número para contato"
                  {...register('whatsapp_number')}
                />
                {errors.whatsapp_number && (
                  <ErrorMessage message={errors.whatsapp_number.message} />
                )}
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <span className='flex items-center gap-1'>
                  <Loader2 className="w-4 h-4 animate-spin" /> Cadastrando...
                </span>
              ) : 'Cadastrar'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
