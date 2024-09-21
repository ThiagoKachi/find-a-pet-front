import { Button } from '@/views/components/Button';
import { Card, CardContent } from '@/views/components/Card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/views/components/Carousel';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { useRouter } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export function OrgDetails() {
  const { history } = useRouter();

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
            <h2 className="text-2xl font-bold text-zinc-700">Organization Details</h2>
            <p className="text-muted-foreground">View the key details about our organization.</p>
          </div>
          <Card>
            <CardContent className="grid gap-4">
              <div className="grid gap-1 mt-4">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input id="email" type="email" defaultValue="tjk091@gmail.com" disabled className="text-zinc-600" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input id="name" defaultValue="Acme Inc." disabled className="text-zinc-600" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="street" className="text-sm font-medium">
                  Street
                </Label>
                <Input id="street" defaultValue="123 Main St" disabled className="text-zinc-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="city" className="text-sm font-medium">
                    City
                  </Label>
                  <Input id="city" defaultValue="San Francisco" disabled className="text-zinc-600" />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="state" className="text-sm font-medium">
                    State
                  </Label>
                  <Input id="state" defaultValue="CA" disabled className="text-zinc-600" />
                </div>
              </div>
              <div className="grid gap-1">
                <Label htmlFor="zipcode" className="text-sm font-medium">
                  Zipcode
                </Label>
                <Input id="zipcode" defaultValue="94101" disabled className="text-zinc-600" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Contact Number
                </Label>
                <Input id="phone" defaultValue="+1 (555) 555-5555" disabled className="text-zinc-600" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-0">
            <h2 className="text-2xl font-bold text-zinc-700">Pet Gallery</h2>
            <p className="text-muted-foreground -mt-10">
              Check out some of the adorable pets we have at our organization.
            </p>
          </div>
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
                  alt="Pet 1"
                  width="450"
                  height="350"
                  className="object-cover rounded-md"
                  style={{ aspectRatio: '450/350', objectFit: 'cover' }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
                  alt="Pet 2"
                  width="450"
                  height="350"
                  className="object-cover rounded-md"
                  style={{ aspectRatio: '450/350', objectFit: 'cover' }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
                  alt="Pet 3"
                  width="450"
                  height="350"
                  className="object-cover rounded-md"
                  style={{ aspectRatio: '450/350', objectFit: 'cover' }}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
