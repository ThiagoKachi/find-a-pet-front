import {
  Group,
  PawPrint,
  Ruler
} from 'lucide-react';

import {
  Card,
  CardContent
} from '@/views/components/Card';
import { Link } from '@tanstack/react-router';

interface PetCardProps {
  petID: string;
}

export function PetCard({ petID }: PetCardProps) {
  return (
    <Link to='/pet-details/$id' params={{ id: petID }}>
      <Card className="w-full max-w-full hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
            alt="Golden Retriever"
            width="400"
            height="240"
            className="rounded-t-lg object-cover w-full transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ aspectRatio: '400/240' }}
          />
        </div>
        <CardContent className="p-6 grid gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Buddy</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <PawPrint className="w-4 h-4" />
              <span>3 years</span>
              <Ruler className="w-4 h-4" />
              <span>Medium</span>
              <Group className="w-4 h-4" />
              <span>Male</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks. He's great
            with kids and other pets, and is always happy to make new friends.
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
