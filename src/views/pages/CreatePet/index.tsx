import { Button } from '@/views/components/Button';
import { ErrorMessage } from '@/views/components/ErrorMessage';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { RadioGroup, RadioGroupItem } from '@/views/components/RadioGroup';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/views/components/Select';
import { Textarea } from '@/views/components/Textarea';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Loader2, Upload } from 'lucide-react';
import { Controller } from 'react-hook-form';
import { UploadPetImages } from './components/PetImagesUpload';
import { useCreatePetController } from './useCreatePetController';

export function CreatePet() {
  const { handleSubmit, errors, isPending, register, control } =
    useCreatePetController();

  return (
    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
      <div className="flex items-center gap-2 py-2">
        <Button
          variant="ghost"
          size="default"
          className="flex items-center gap-2 p-0 text-primary hover:text-primary/80 hover:bg-transparent"
          onClick={() => {
            history.go(-1);
          }}
        >
          <ArrowLeft className="w-5 h-5 text-primary hover:text-primary/80" />
          <span className="text-base font-medium">Voltar</span>
        </Button>
      </div>
      <div className="flex justify-between mb-4 flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
        <h1 className="text-2xl font-bold text-zinc-700">Criar novo Pet</h1>
      </div>
      <form className="grid gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Enter pet's name"
              {...register('name')}
            />
            {errors.name && <ErrorMessage message={errors.name.message} />}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="age">Idade</Label>
            <Input
              id="age"
              type="number"
              min={0}
              placeholder="Enter pet's age"
              {...register('age', {
                setValueAs: (value) => value === '' ? undefined : Number(value)
              })}
            />
            {errors.age && <ErrorMessage message={errors.age.message} />}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="species">Espécie</Label>
            <Controller
              name='species'
              control={control}
              render={({ field: { value, onChange } }) => (
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select species" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dog">Cachorro</SelectItem>
                    <SelectItem value="Cat">Gato</SelectItem>
                    <SelectItem value="Bird">Ave</SelectItem>
                    <SelectItem value="Other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.species && (
              <ErrorMessage message={errors.species.message} />
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="breed">Raça</Label>
            <Input
              id="breed"
              placeholder="Enter pet's breed"
              {...register('breed')}
            />
            {errors.breed && <ErrorMessage message={errors.breed.message} />}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="size">Tamanho</Label>
            <Controller
              name='size'
              control={control}
              render={({ field: { value, onChange } }) => (
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Small">Pequeno</SelectItem>
                    <SelectItem value="Medium">Médio</SelectItem>
                    <SelectItem value="Large">Grande</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.size && <ErrorMessage message={errors.size.message} />}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gender">Gênero</Label>
            <Controller
              name='gender'
              control={control}
              render={({ field: { value, onChange } }) => (
                <RadioGroup id="gender" defaultValue="Male" value={value} onValueChange={onChange}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="gender-male" value="Male" />
                    <Label htmlFor="gender-male">Macho</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="gender-female" value="Female" />
                    <Label htmlFor="gender-female">Fêmea</Label>
                  </div>
                </RadioGroup>
              )}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            placeholder="Enter pet's description"
            className="min-h-[150px]"
            {...register('description')}
          />
          {errors.description && (
            <ErrorMessage message={errors.description.message} />
          )}
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
          <Link to="/">
            <Button type="button" variant="outline" disabled={isPending}>
              Cancelar
            </Button>
          </Link>
          <Button type="submit" className="px-8" disabled={isPending}>
            {isPending ? (
              <span className="flex items-center gap-1">
                <Loader2 className="w-4 h-4 animate-spin" /> Salvando...
              </span>
            ) : (
              'Salvar'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
