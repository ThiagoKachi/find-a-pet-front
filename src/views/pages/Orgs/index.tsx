import { Button } from '@/views/components/Button';
import { Input } from '@/views/components/Input';
import { Filter } from 'lucide-react';
import { useState } from 'react';
import { OrgCard } from './components/OrgCard';

export function Orgs() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-4 md:p-8">

        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">Nossos Pets</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <Filter className="w-4 h-4 text-primary" />
          </Button>
        </div>

        {isFilterOpen && (
          <div className="grid grid-cols-3 gap-4 w-full md:w-2/3">
            <Input placeholder="Nome da Org" />
            <Input placeholder="Cidade" />
            <Button className="w-full">Buscar</Button>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
          <OrgCard />
          <OrgCard />
          <OrgCard />
          <OrgCard />
          <OrgCard />
          <OrgCard />
        </div>
      </main>
    </div>
  );
}
