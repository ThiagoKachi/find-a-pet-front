import { Button } from '@/views/components/Button';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { RadioGroup, RadioGroupItem } from '@/views/components/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/views/components/Select';
import { Textarea } from '@/views/components/Textarea';
import { Upload } from 'lucide-react';
import { AlertConfirmPetDelete } from './components/ConfirmDelete';
import { UploadPetImages } from './components/PetImagesUpload';

export function EditPet() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8">
      <div className="flex justify-between mb-4 flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
        <h1 className="text-2xl font-bold text-zinc-700">Editar informações do Pet</h1>
        <AlertConfirmPetDelete />
      </div>
      <form className="grid gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Enter pet's name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="age">Idade</Label>
            <Input id="age" type="number" placeholder="Enter pet's age" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="species">Espécie</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select species" />
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
            <Label htmlFor="breed">Raça</Label>
            <Input id="breed" placeholder="Enter pet's breed" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="size">Tamanho</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
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
            <RadioGroup id="gender" defaultValue="male">
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
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea id="description" placeholder="Enter pet's description" className="min-h-[150px]" />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label className="text-base">Imagens</Label>
            <Button size="sm" variant="outline">
              <Upload className="mr-2 h-5 w-5" />
              Adicionar imagens
            </Button>
          </div>
          <UploadPetImages />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar alterações</Button>
        </div>
      </form>
    </div>
  );
}
