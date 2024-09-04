import { Button } from '@/views/components/Button';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { RadioGroup, RadioGroupItem } from '@/views/components/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/views/components/Select';
import { Filter } from 'lucide-react';
import { useState } from 'react';
import { PetCard } from './components/PetCard';

export function Home() {
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
          <div className={`transition-all duration-300 ease-in-out ${isFilterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="mb-2 grid gap-4 sm:grid-cols-2 md:gap-3 md:grid-cols-5 lg:grid-cols-5">
              <div className="grid gap-2">
                <Label htmlFor="species">Espécie</Label>
                <Select>
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
                <Input id="age" type="number" placeholder="Digite a idade do pet" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="size">Tamanho</Label>
                <Select>
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
              <div className="grid gap-2">
                <Label htmlFor="gender">Gênero</Label>
                <RadioGroup id="gender" defaultValue="male" className="flex gap-2 -mt-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="gender-male" value="male" />
                    <Label htmlFor="gender-male">Macho</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="gender-female" value="female" />
                    <Label htmlFor="gender-female">Fêmea</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label>&nbsp;</Label>
                <Button className="w-full">Buscar</Button>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </main>
    </div>
  );
}
