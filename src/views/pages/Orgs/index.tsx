import { Button } from '@/views/components/Button';
import { Input } from '@/views/components/Input';
import { Loading } from '@/views/components/Loading';
import { useNavigate } from '@tanstack/react-router';
import { Filter, PawPrint } from 'lucide-react';
import { OrgCard } from './components/OrgCard';
import { useOrgsController } from './useOrgsController';

interface OrgsProps {
  name?: string;
  city?: string;
}

export function Orgs({ name, city }: OrgsProps) {
  const navigate = useNavigate({ from: '/orgs' });

  const {
    orgs,
    handleOpenFilters,
    isFilterOpen,
    isLoading,
    refetch
  } = useOrgsController();

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-4 md:p-8">

        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">Nossos Pets</h1>
          <Button variant="ghost" size="icon" onClick={handleOpenFilters}>
            <Filter className="w-4 h-4 text-primary" />
          </Button>
        </div>

        {isFilterOpen && (
          <form
            className="grid grid-cols-3 gap-4 w-full md:w-2/3"
            onSubmit={(e) => {
              e.preventDefault();
              refetch();
            }}>
            <Input
              placeholder="Nome da Org"
              value={name || ''}
              onChange={(e) => {
                navigate({ search: (prev) => ({ ...prev, name: e.target.value }) });
              }}
            />
            <Input
              placeholder="Cidade"
              value={city || ''}
              onChange={(e) => {
                navigate({ search: (prev) => ({ ...prev, city: e.target.value }) });
              }}
            />
            <Button className="w-full">Buscar</Button>
          </form>
        )}

        {isLoading ? (
          <Loading
            text='Loading orgs...'
            icon={<PawPrint className='w-8 h-8 -mt-1' />}
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
            {orgs.length > 0 ? orgs.map((org) => (
              <OrgCard key={org.id} orgDetails={org} />
            )) : (
              <div className="col-span-4 mt-8">
                <p className="text-center text-gray-500">
                  Nenhuma org encontrada...
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
