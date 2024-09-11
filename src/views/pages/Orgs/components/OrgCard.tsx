
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/views/components/Card';
import { Link } from '@tanstack/react-router';
import { Home, MailIcon, PawPrintIcon, PhoneIcon } from 'lucide-react';

interface OrgCardProps {
  orgID: string;
}

export function OrgCard({ orgID }: OrgCardProps) {
  return (
    <Link to='/org-details/$id' params={{ id: orgID }}>
      <Card className="w-full max-w-full hover:shadow-md transition-shadow duration-200">
        <CardHeader className="flex items-start gap-4 px-6 pt-6 pb-1">
          <div className="flex items-center gap-4 ml-0">
            <div className="bg-primary rounded-md p-2 flex items-center justify-center">
              <Home className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Detalhes da Org</h3>
          </div>

          <div className="grid gap-1">
            <CardTitle className="text-lg font-semibold text-primary">Cozy Mountain Retreat</CardTitle>
            <div className="text-muted-foreground">
              <MailIcon className="w-4 h-4 inline-block mr-1" />
            tjk@email.com
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 grid gap-4">
          <div className="grid gap-1">
            <div className="text-muted-foreground">Address</div>
            <div>123 Maple Lane</div>
            <div>Asheville, NC 28801</div>
          </div>
          <div className="grid gap-1">
            <div className="text-muted-foreground">Contact</div>
            <div>
              <PhoneIcon className="w-4 h-4 inline-block mr-1" />
            +1 (555) 555-5555
            </div>
          </div>
          <div className="grid gap-1">
            <div className="text-muted-foreground">Pets</div>
            <div>
              <PawPrintIcon className="w-4 h-4 inline-block mr-1" />
            2 pets allowed
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
