import {
  Group,
  PawPrint,
  Ruler
} from 'lucide-react';

import { IPet } from '@/@types/IPets';
import { env } from '@/config/env';
import {
  Card,
  CardContent
} from '@/views/components/Card';
import { Link } from '@tanstack/react-router';

interface PetCardProps {
  pet: IPet;
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <Link to='/pet-details/$id' params={{ id: pet.id }}>
      <Card className="w-full max-w-full hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={`${env.BASE_AWS_API_URL}/${pet.petImages[0].file_key}`}
            alt={pet.name}
            width="400"
            height="240"
            className="rounded-t-lg object-cover w-full transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ aspectRatio: '400/240' }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = '/no-Image-placeholder.png';
            }}
          />
        </div>
        <CardContent className="px-4 py-6 grid gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{pet.name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <PawPrint className="w-4 h-4" />
              <span>{pet.age} {pet.age === 1 ? 'ano' : 'anos'}</span>
              <Ruler className="w-4 h-4" />
              <span>{pet.size === 'Small' ? 'Pequeno' : pet.size === 'Medium' ? 'Médio' : 'Grande'}</span>
              <Group className="w-4 h-4" />
              <span>{pet.gender === 'Male' ? 'Macho' : 'Fêmea'}</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            {pet.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
