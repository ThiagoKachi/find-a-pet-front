import { IPetsFilters } from '@/@types/Pets/IPetsFilters';
import { Route } from '@/routes/_authenticated';
import { Button } from '@/views/components/Button';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { Loading } from '@/views/components/Loading';
import { RadioGroup, RadioGroupItem } from '@/views/components/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/views/components/Select';
import { useNavigate } from '@tanstack/react-router';
import { Filter, PawPrint } from 'lucide-react';
import { PetCard } from './components/PetCard';
import { useHomeController } from './useHomeController';

export default function Home() {
  const { species, age, size, gender } = Route.useSearch() as IPetsFilters;
  const navigate = useNavigate({ from: '/' });

  const {
    pets,
    isLoading,
    isFilterOpen,
    handleOpenFilters,
    refetch,
  } = useHomeController();

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
          <div className={`transition-all duration-300 ease-in-out ${isFilterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <form className="mb-2 grid gap-4 sm:grid-cols-2 md:gap-3 md:grid-cols-5 lg:grid-cols-5" onSubmit={(e) => {
              e.preventDefault();
              refetch();
            }}>
              <div className="grid gap-2">
                <Label htmlFor="species">Espécie</Label>
                <Select
                  defaultValue={species || 'all'}
                  onValueChange={(value) => navigate({ search: (prev) => ({ ...prev, species: value }) })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a espécie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dog">Cachorro</SelectItem>
                    <SelectItem value="Cat">Gato</SelectItem>
                    <SelectItem value="Bird">Ave</SelectItem>
                    <SelectItem value="all">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="age">Idade</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Digite a idade do pet"
                  value={age || ''}
                  onChange={(e) => {
                    navigate({ search: (prev) => ({ ...prev, age: Number(e.target.value) }) });
                  }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="size">Tamanho</Label>
                <Select
                  defaultValue={size || 'all'}
                  onValueChange={(value) => navigate({ search: (prev) => ({ ...prev, size: value }) })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Pequeno</SelectItem>
                    <SelectItem value="medium">Médio</SelectItem>
                    <SelectItem value="large">Grande</SelectItem>
                    <SelectItem value="all">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 ml-0.5">
                <Label htmlFor="gender">Gênero</Label>
                <RadioGroup
                  id="gender"
                  defaultValue={gender || 'all'}
                  onValueChange={(value) => navigate({ search: (prev) => ({ ...prev, gender: value }) })}
                  className="flex gap-2 sm:-mt-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="gender-male" value="male" />
                    <Label htmlFor="gender-male">Macho</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="gender-female" value="female" />
                    <Label htmlFor="gender-female">Fêmea</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="all-gender" value="all" />
                    <Label htmlFor="all-gender">Todos</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex justify-end mt-1 md:mt-5">
                <Label>&nbsp;</Label>
                <Button className="w-full md:w-1/2">Buscar</Button>
              </div>
            </form>
          </div>
        )}

        {isLoading ? (
          <Loading
            text='Loading pets...'
            icon={<PawPrint className='w-8 h-8 -mt-1' />}
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
            {pets.length > 0 ? (
              pets?.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))
            ) : (
              <div className="col-span-4">
                <p className="text-center text-gray-500">Nenhum pet encontrado</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
