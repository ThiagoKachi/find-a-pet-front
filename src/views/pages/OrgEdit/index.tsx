import { Button } from '@/views/components/Button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/views/components/Carousel';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { Plus } from 'lucide-react';
import { AlertConfirmOrgDelete } from './components/ConfirmDelete';
import { PetCard } from './components/PetCard';

export function EditOrg() {
  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        <div>
          <div className="flex justify-between flex-col md:flex-row items-start md:items-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-zinc-700">
              Editar perfil da ORG
            </h1>
            <div className="flex gap-2 mb-2 md:mb-0">
              <Button variant="default">
                <Plus className="w-4 h-4 text-white mr-1" />
                Adicionar Pet
              </Button>
              <AlertConfirmOrgDelete />
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="info@acme.com" />
            </div>
            <div>
              <Label htmlFor="name">Nome da ORG</Label>
              <Input id="name" defaultValue="Acme Inc" />
            </div>
            <div>
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" defaultValue="123 Main St" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" defaultValue="Anytown" />
              </div>
              <div>
                <Label htmlFor="state">Estado</Label>
                <Input id="state" defaultValue="CA" />
              </div>
              <div>
                <Label htmlFor="zipcode">CEP</Label>
                <Input id="zipcode" defaultValue="12345" />
              </div>
            </div>
            <div>
              <Label htmlFor="contract">Número para contato</Label>
              <Input id="contract" defaultValue="ABC-123" />
            </div>
            <div className="flex w-full md:w-auto justify-end">
              <Button type="submit" className="w-full md:w-auto">Salvar alterações</Button>
            </div>
          </form>
        </div>
        <div>
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <PetCard />
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <PetCard />
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <PetCard />
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <PetCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="ghost" size="icon" className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white" />
            <CarouselNext variant="ghost" size="icon" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
