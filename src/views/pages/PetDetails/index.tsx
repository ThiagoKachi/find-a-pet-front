import { transformGender, transformSize } from '@/app/utils/transformToPortuguese';
import { env } from '@/config/env';
import { Badge } from '@/views/components/Badge';
import { Button } from '@/views/components/Button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/views/components/Carousel';
import { Separator } from '@/views/components/Separator';
import { useRouter } from '@tanstack/react-router';
import { ArrowLeft, BuildingIcon, PawPrint, PawPrintIcon, Warehouse } from 'lucide-react';
import { AdoptModalForm } from './components/AdoptModalForm';
import { PetDetailsLoadingScreen } from './components/LoadingScreen';
import { usePetDetailsController } from './usePetDetailsController';

export function PetDetails() {
  const { history } = useRouter();

  const { isLoading, petDetails } = usePetDetailsController();

  if (isLoading) {
    return <PetDetailsLoadingScreen />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
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
              {petDetails?.petImages && petDetails?.petImages.length > 0 ?
                petDetails?.petImages?.map((image) => (
                  <CarouselItem key={image.id}>
                    <img
                      src={`${env.BASE_AWS_API_URL}/${image.file_key}`}
                      width={600}
                      height={428}
                      alt={petDetails.name}
                      className="object-cover w-full h-[428px]"
                      style={{ aspectRatio: '600/428', objectFit: 'cover' }}
                    />
                  </CarouselItem>
                )): (
                  <CarouselItem>
                    <img
                      src="/no-Image-placeholder.png"
                      alt="Placeholder Image"
                      width={600}
                      height={428}
                      className="object-cover w-full h-[428px]"
                      style={{ aspectRatio: '600/428', objectFit: 'cover' }}
                    />
                  </CarouselItem>
                )}
            </CarouselContent>
            <CarouselPrevious variant="ghost" size="icon" className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white" />
            <CarouselNext variant="ghost" size="icon" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{petDetails?.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <PawPrint className="w-5 h-5" />
              <span>{petDetails?.age === 1 ? 'Ano' : 'Anos'}</span>
              <Separator orientation="vertical" className="h-4" />
              <span>{petDetails?.breed}</span>
              <Separator orientation="vertical" className="h-4" />
              <span>{transformSize(petDetails?.size)}</span>
              <Separator orientation="vertical" className="h-4" />
              <span>{transformGender(petDetails?.gender)}</span>
            </div>
          </div>
          <div className="space-y-2">
            <p>{petDetails?.description}</p>
            <Badge variant={petDetails?.available ? 'default' : 'destructive'} className="inline-flex items-center gap-2 text-white py-1">
              <PawPrintIcon className="w-4 h-4" />
              {petDetails?.available
                ? 'Disponível para adoção'
                : 'Indisponível para adoção'
              }
            </Badge>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Sobre o Canil</h2>
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
