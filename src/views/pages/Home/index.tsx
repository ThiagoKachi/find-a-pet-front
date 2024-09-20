import { Button } from '@/views/components/Button';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { RadioGroup, RadioGroupItem } from '@/views/components/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/views/components/Select';
import { useNavigate } from '@tanstack/react-router';
import { Filter, PawPrint } from 'lucide-react';
import { useState } from 'react';
import { PetCard } from './components/PetCard';
import { useHomeController } from './useHomeController';

interface HomeProps {
  breed?: string;
  age?: number;
  size?: string;
  gender?: string;
}

export default function Home({ breed, age, size, gender }: HomeProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const navigate = useNavigate({ from: '/' });

  const { data: pets, isLoading } = useHomeController();

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
          <div className={`transition-all duration-300 ease-in-out ${isFilterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="mb-2 grid gap-4 sm:grid-cols-2 md:gap-3 md:grid-cols-5 lg:grid-cols-5">
              <div className="grid gap-2">
                <Label htmlFor="species">Espécie</Label>
                <Select
                  defaultValue={breed}
                  onValueChange={(value) => navigate({ search: (prev) => ({ ...prev, breed: value }) })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a espécie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Cachorro</SelectItem>
                    <SelectItem value="cat">Gato</SelectItem>
                    <SelectItem value="bird">Ave</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
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
                  defaultValue={size}
                  onValueChange={(value) => navigate({ search: (prev) => ({ ...prev, size: value }) })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Pequeno</SelectItem>
                    <SelectItem value="medium">Médio</SelectItem>
                    <SelectItem value="large">Grande</SelectItem>
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
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="flex items-start w-full justify-center mt-[10%] text-2xl font-bold gap-2 animate-pulse text-primary">
            Loading pets...
            <span>
              <PawPrint className='w-8 h-8 -mt-1' />
            </span>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
            {pets!.length > 0 ? (
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
