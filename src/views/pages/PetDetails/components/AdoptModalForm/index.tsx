import { Button } from '@/views/components/Button';
import { Checkbox } from '@/views/components/Checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/views/components/Dialog';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';

export function AdoptModalForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Tenho interesse</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-zinc-900">Entre em contato</DialogTitle>
          <DialogDescription className="text-base text-zinc-700 -pt-2">Preencha o formulário abaixo para entrar em contato.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email para contato</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Enter your address" required />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <Label htmlFor="city">Cidade</Label>
              <Input id="city" placeholder="Enter your city" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="state">Estado</Label>
              <Input id="state" placeholder="Enter your state" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="zipcode">CEP</Label>
              <Input id="zipcode" type="number" placeholder="Enter your zipcode" required />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="instagram">URL do Instagram</Label>
            <Input id="instagram" type="url" placeholder="Enter your Instagram URL" required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="consent" required />
            <Label htmlFor="consent">
              Aceito ser contactado por esta empresa.
            </Label>
          </div>
        </div>
        <DialogFooter className="flex justify-end gap-2 mt-2">
          <Button variant="outline">Cancelar</Button>
          <Button type="submit" className="w-32">
            Enviar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
