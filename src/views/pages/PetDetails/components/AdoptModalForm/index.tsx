import { Button } from '@/views/components/Button';
import { Checkbox } from '@/views/components/Checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/views/components/Dialog';
import { ErrorMessage } from '@/views/components/ErrorMessage';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { Loader2 } from 'lucide-react';
import { useAdoptFormController } from './useAdoptFormController';

export function AdoptModalForm() {
  const { register, handleSubmit, errors, isPending, setOpen, open } =
    useAdoptFormController();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Tenho interesse</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[600px]"
        onInteractOutside={(e) => isPending && e.preventDefault()}
      >
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-2">
            <DialogTitle className="text-xl text-zinc-900">
              Entre em contato
            </DialogTitle>
            <DialogDescription className="text-base text-zinc-700 -pt-2">
              Preencha o formulário abaixo para entrar em contato.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name">Nome</Label>
                <small className="text-red-500 ml-1">*</small>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  {...register('name')}
                />
                {errors.name && <ErrorMessage message={errors.name.message} />}
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email para contato</Label>
                <small className="text-red-500 ml-1">*</small>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register('email')}
                />
                {errors.email && (
                  <ErrorMessage message={errors.email.message} />
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="phone">Telefone</Label>
                <small className="text-red-500 ml-1">*</small>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register('phone')}
                />
                {errors.phone && (
                  <ErrorMessage message={errors.phone.message} />
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="address">Endereço</Label>
                <small className="text-red-500 ml-1">*</small>
                <Input
                  id="address"
                  placeholder="Enter your address"
                  {...register('address')}
                />
                {errors.address && (
                  <ErrorMessage message={errors.address.message} />
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label htmlFor="city">Cidade</Label>
                <small className="text-red-500 ml-1">*</small>
                <Input
                  id="city"
                  placeholder="Enter your city"
                  {...register('city')}
                />
                {errors.city && <ErrorMessage message={errors.city.message} />}
              </div>
              <div className="space-y-1">
                <Label htmlFor="state">Estado</Label>
                <small className="text-red-500 ml-1">*</small>
                <Input
                  id="state"
                  placeholder="Enter your state"
                  {...register('state')}
                />
                {errors.state && (
                  <ErrorMessage message={errors.state.message} />
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="zipcode">CEP</Label>
                <small className="text-red-500 ml-1">*</small>
                <Input
                  id="zipcode"
                  type="number"
                  placeholder="Enter your zipcode"
                  {...register('zipcode')}
                />
                {errors.zipcode && (
                  <ErrorMessage message={errors.zipcode.message} />
                )}
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="instagram">URL do Instagram</Label>
              <Input
                id="instagram"
                type="url"
                placeholder="Enter your Instagram URL"
                {...register('instagramURL')}
              />
              {errors.instagramURL && (
                <ErrorMessage message={errors.instagramURL.message} />
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="consent" />
              <Label htmlFor="consent">
                Aceito ser contactado por esta empresa.
              </Label>
            </div>
          </div>
          <DialogFooter className="flex justify-end gap-2 mt-2">
            <Button variant="outline" disabled={isPending}>
              Cancelar
            </Button>
            <Button type="submit" className="w-32" disabled={isPending}>
              {isPending ? (
                <span className='flex items-center gap-1'>
                  <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
                </span>
              ) : 'Enviar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
