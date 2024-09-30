
import { IOrg } from '@/@types/Orgs/IOrgs';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/views/components/Card';
import { Link } from '@tanstack/react-router';
import { Home, MailIcon, PawPrintIcon, PhoneIcon } from 'lucide-react';

interface OrgCardProps {
  orgDetails: IOrg;
}

export function OrgCard({ orgDetails }: OrgCardProps) {
  return (
    <Link to='/org-details/$id' params={{ id: orgDetails.id }}>
      <Card className="w-[300px] hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer h-full">
        <div className="relative overflow-hidden border-b border-zinc-100">
          <CardHeader className="flex items-start gap-4 px-6 pt-6 pb-1">
            <div className="flex items-center gap-4 ml-0">
              <div className="bg-primary rounded-md p-2 flex items-center justify-center">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-base sm:text-2xl font-semibold text-primary">
              Detalhes da Org
              </h3>
            </div>

            <div className="grid gap-1">
              <CardTitle className="text-lg font-semibold text-primary">
                {orgDetails.name}
              </CardTitle>
              <div className="text-muted-foreground">
                <MailIcon className="w-4 h-4 inline-block mr-1" />
                {orgDetails.email}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 grid gap-4">
            <div className="grid gap-1">
              <div className="text-muted-foreground">Endereço</div>
              <div>{orgDetails.address}</div>
              <div>{orgDetails.city} - {orgDetails.state} - {orgDetails.zipcode}</div>
            </div>
            <div className="grid gap-1">
              <div className="text-muted-foreground">Contato</div>
              <div>
                <PhoneIcon className="w-4 h-4 inline-block mr-2 mb-1" />
                {orgDetails.whatsapp_number}
              </div>
            </div>
            <div className="grid gap-1">
              <div className="text-muted-foreground">Pets</div>
              <div>
                <PawPrintIcon className="w-4 h-4 inline-block mr-2 mb-1" />
                {`${orgDetails.pets.length} ${orgDetails.pets.length === 1 ? 'pet' : 'pets'} cadastrados`}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
