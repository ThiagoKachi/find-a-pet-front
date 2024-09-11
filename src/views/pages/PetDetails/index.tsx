import { Badge } from '@/views/components/Badge';
import { Button } from '@/views/components/Button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/views/components/Carousel';
import { Separator } from '@/views/components/Separator';
import { useRouter } from '@tanstack/react-router';
import { ArrowLeft, BuildingIcon, PawPrint, PawPrintIcon, Warehouse } from 'lucide-react';
import { AdoptModalForm } from './components/AdoptModalForm';

interface PetDetailsProps {
  petID: string;
}

export function PetDetails({ petID }: PetDetailsProps) {
  const { history } = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <h1>PET ID: {petID}</h1>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="default"
          className="flex items-center gap-2 p-0 text-primary hover:text-primary/80 hover:bg-transparent"
          onClick={() => {
            history.go(-1);
          }}
        >
          <ArrowLeft className="w-5 h-5 text-primary hover:text-primary/80" />
          <span className="text-base font-medium">Voltar</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
                  width={600}
                  height={428}
                  alt="Pet 1"
                  className="object-cover w-full h-[428px]"
                  style={{ aspectRatio: '600/400', objectFit: 'cover' }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
                  width={600}
                  height={428}
                  alt="Pet 2"
                  className="object-cover w-full h-[428px]"
                  style={{ aspectRatio: '600/400', objectFit: 'cover' }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
                  width={600}
                  height={428}
                  alt="Pet 2"
                  className="object-cover w-full h-[428px]"
                  style={{ aspectRatio: '600/400', objectFit: 'cover' }}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="ghost" size="icon" className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white" />
            <CarouselNext variant="ghost" size="icon" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Buddy the Beagle</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <PawPrint className="w-5 h-5" />
              <span>3 anos</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Beagle</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Médio</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Macho</span>
            </div>
          </div>
          <div className="space-y-2">
            <p>
              Buddy is a friendly and energetic Beagle who loves to play and explore. He's great with kids and other
              pets, and would make a wonderful addition to any family. Buddy is up-to-date on all his vaccinations and
              is ready to find his forever home.
            </p>
            <Badge variant="default" className="inline-flex items-center gap-2 text-white py-1">
              <PawPrintIcon className="w-4 h-4" />
              Disponível para adoção
            </Badge>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">About the Shelter</h2>
            <div className="flex items-center gap-2">
              <Warehouse className="w-5 h-5" />
              <span>Paws and Claws Animal Shelter</span>
            </div>
            <div className="flex items-center gap-2">
              <BuildingIcon className="w-5 h-5" />
              <span>123 Main Street, Anytown USA</span>
            </div>
          </div>
          <AdoptModalForm />
        </div>
      </div>
    </div>
  );
}
