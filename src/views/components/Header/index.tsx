
import { useStore } from '@/app/store';
import { Sheet, SheetContent, SheetTrigger } from '@/views/components/Sheet';
import { Link } from '@tanstack/react-router';
import { Dog, Menu, PawPrint, Warehouse } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '../Button';
import { NavItem } from '../NavItem';
import { UserMenu } from '../UserMenu';

export function Header() {
  const { isAuthenticated } = useStore(
    useShallow(state => ({
      isAuthenticated: state.auth.isAuthenticated,
    }))
  );

  return (
    <header className="z-50 bg-slate-50 sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-start gap-2 text-lg font-semibold md:text-base"
        >
          <PawPrint className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-primary">FindAFriend</h1>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <hr className="w-full border-x border-gray-200 h-[24px]" />
        <NavItem
          href="/"
          icon={<Dog className="h-5 w-5 mb-0.5" />}
          title="Pets"
        />
        <NavItem
          href="/orgs"
          icon={<Warehouse className="h-5 w-5 mb-0.5" />}
          title="ORGs"
        />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden bg-slate-50"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <PawPrint className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold text-primary">FindAFriend</h1>
              <span className="sr-only">Acme Inc</span>
            </Link>
            <NavItem
              href="/"
              icon={<Dog className="h-5 w-5 mb-0.5" />}
              title="Pets"
            />
            <NavItem
              href="/orgs"
              icon={<Warehouse className="h-5 w-5 mb-0.5" />}
              title="ORGs"
            />
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
        {isAuthenticated ? (
          <UserMenu />
        ) : (
          <Link to="/login">
            <Button
              variant="outline"
              className="bg-slate-50 gap-1.5"
            >
              <PawPrint className="h-5 w-5 text-primary mb-0.5" />
              <span>Entrar</span>
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
