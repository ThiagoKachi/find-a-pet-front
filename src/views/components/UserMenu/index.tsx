import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/views/components/DropdownMenu';
import { Link } from '@tanstack/react-router';
import { CircleUser, LogOut, Settings } from 'lucide-react';
import { Button } from '../Button';

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="rounded-full bg-primary text-white">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-tertiary font-semibold">
          Minha conta
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4 text-zinc-700" />
          <Link to="/org-edit" className="text-zinc-700 font-medium">
            Configurações
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4 text-zinc-700" />
          <Link to="/login" className="text-zinc-700 font-medium">
            Sair
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
