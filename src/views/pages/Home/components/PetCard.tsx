import {
  Building2,
  Group,
  PawPrint,
  PawPrintIcon,
  Ruler
} from 'lucide-react';

import { IPet } from '@/@types/Pets/IPets';
import { env } from '@/config/env';
import { Badge } from '@/views/components/Badge';
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
      <Card className="w-full max-w-full hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer h-full relative">
        <div className="relative overflow-hidden border-b border-zinc-100">
          <Badge
            variant={pet?.available ? 'default' : 'destructive'}
            className="hidden absolute bottom-2 left-2 md:inline-flex items-center gap-2 text-white py-1"
          >
            <PawPrintIcon className="w-4 h-4" />
            {pet?.available
              ? 'Disponível'
              : 'Indisponível'
            }
          </Badge>
          {pet.petImages.length > 0 ? (
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
          ) : (
            <img
              width="400"
              height="240"
              className="rounded-t-lg object-cover w-full transition-transform duration-300 ease-in-out hover:scale-110"
              style={{ aspectRatio: '400/240' }}
              src="/no-Image-placeholder.png"
              alt="Placeholder Image"
            />
          )}
        </div>
        <CardContent className="px-4 py-6 gap-2 flex flex-col">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{pet.name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
              <PawPrint className="w-4 h-4" />
              <span>{pet.age} {pet.age === 1 ? 'ano' : 'anos'}</span>
              <Ruler className="w-4 h-4" />
              <span>{pet.size === 'Small' ? 'Pequeno' : pet.size === 'Medium' ? 'Médio' : 'Grande'}</span>
              <Group className="w-4 h-4" />
              <span>{pet.gender === 'Male' ? 'Macho' : 'Fêmea'}</span>
            </div>
          </div>
          <p className="text-muted-foreground truncate">
            {pet.description}
          </p>
          <div className='flex gap-2'>
            <Building2 size={18} className="text-primary" />
            <h2 className='text-primary font-medium'>{pet.org_id.name}</h2>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
