import { Button } from '@/views/components/Button';
import { Card, CardContent } from '@/views/components/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/views/components/Carousel';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { useRouter } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { OrgDetailsLoadingScreen } from './components/LoadingScreen';
import { useOrgDetailsController } from './useOrgDetailsController';

export function OrgDetails() {
  const { history } = useRouter();

  const { isLoading, orgDetails } = useOrgDetailsController();

  if (isLoading) {
    return <OrgDetailsLoadingScreen />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
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
      <div className="grid gap-8 md:grid-cols-2">
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold text-zinc-700">
              Detalhes da Org
            </h2>
            <p className="text-muted-foreground">
              Veja os principais detalhes da org.
            </p>
          </div>
          <Card>
            <CardContent className="grid gap-4">
              <div className="grid gap-1 mt-4">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={orgDetails?.email}
                  disabled
                  className="text-zinc-600"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={orgDetails?.name}
                  disabled
                  className="text-zinc-600"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="street" className="text-sm font-medium">
                  Street
                </Label>
                <Input
                  id="street"
                  defaultValue={orgDetails?.address}
                  disabled
                  className="text-zinc-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="city" className="text-sm font-medium">
                    City
                  </Label>
                  <Input
                    id="city"
                    defaultValue={orgDetails?.city}
                    disabled
                    className="text-zinc-600"
                  />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="state" className="text-sm font-medium">
                    State
                  </Label>
                  <Input
                    id="state"
                    defaultValue={orgDetails?.state}
                    disabled
                    className="text-zinc-600"
                  />
                </div>
              </div>
              <div className="grid gap-1">
                <Label htmlFor="zipcode" className="text-sm font-medium">
                  Zipcode
                </Label>
                <Input
                  id="zipcode"
                  defaultValue={orgDetails?.zipcode}
                  disabled
                  className="text-zinc-600"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Contact Number
                </Label>
                <Input
                  id="phone"
                  defaultValue={orgDetails?.whatsapp_number}
                  disabled
                  className="text-zinc-600"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-0">
            <h2 className="text-2xl font-bold text-zinc-700">Galeria do Pet</h2>
            <p className="text-muted-foreground -mt-10">
              Confira as fotos incríveis do pet.
            </p>
          </div>
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {orgDetails?.pets?.map((pet) => (
                <CarouselItem>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
                    // src={`${env.BASE_AWS_API_URL}/${image.file_key}`}
                    alt={pet.name}
                    width="450"
                    height="350"
                    className="object-cover rounded-md"
                    style={{ aspectRatio: '450/350', objectFit: 'cover' }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
