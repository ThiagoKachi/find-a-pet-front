import { IPet } from '@/@types/Pets/IPets';
import { Badge } from '@/views/components/Badge';
import { Link } from '@tanstack/react-router';
import { PawPrintIcon, Pencil } from 'lucide-react';

interface PetCardProps {
  petDetails: IPet;
}

export function PetCard({ petDetails }: PetCardProps) {
  return (
    <div className="relative">
      <img
        src="https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
        alt={petDetails.name}
        className="w-full sm:h-auto h-[200px]"
        width="500"
        height="300"
        style={{ aspectRatio: '500/300', objectFit: 'cover' }}
      />
      <Link to="/pet-edit/$id" params={{ id: petDetails.id }}>
        <div className="absolute top-2 right-2 bg-background/80 rounded-full p-2 cursor-pointer">
          <Pencil className="w-5 h-5 text-foreground" />
        </div>
      </Link>
      <Badge
        variant={petDetails?.available ? 'default' : 'destructive'}
        className="hidden absolute top-4 left-2 md:inline-flex items-center gap-2 text-white py-1"
      >
        <PawPrintIcon className="w-4 h-4" />
        {petDetails?.available
          ? 'Disponível para adoção'
          : 'Indisponível para adoção'
        }
      </Badge>
      <Badge
        variant="default"
        className="absolute bottom-4 left-2 inline-flex items-center gap-2 text-white py-1"
      >
        {petDetails.name}
      </Badge>
    </div>
  );
}
