import { Button } from '@/views/components/Button';
import { ErrorMessage } from '@/views/components/ErrorMessage';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';
import { RadioGroup, RadioGroupItem } from '@/views/components/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/views/components/Select';
import { Switch } from '@/views/components/Switch';
import { Textarea } from '@/views/components/Textarea';
import { Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Controller } from 'react-hook-form';
import { AlertConfirmPetDelete } from './components/ConfirmDelete';
import { PetEditLoadingScreen } from './components/LoadingScreen';
import { UploadPetImages } from './components/PetImagesUpload';
import { useEditPetController } from './useEditPetController';

export function EditPet() {
  const {
    control,
    errors,
    handleSubmit,
    isLoadingPetDetails,
    isPending,
    register,
    isPendingRemovePet,
    handleRemovePet,
    handleUpload,
    handleRemoveFile,
    isLoading,
    petImages,
  } = useEditPetController();

  if (isLoadingPetDetails) {
    return (
      <PetEditLoadingScreen />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8">
      <Helmet>
        <title>FindAFriend - Editar Pet</title>
      </Helmet>
      <div className="flex justify-between mb-4 flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
        <h1 className="text-2xl font-bold text-zinc-700">Editar informações do Pet</h1>
        <div className='flex items-center gap-2'>
          <Button
            type="button"
            className="px-8"
            disabled={isPending || isLoading}
            onClick={handleSubmit}
          >
            {isPending ? (
              <span className="flex items-center gap-1">
                <Loader2 className="w-4 h-4 animate-spin" /> Salvando...
              </span>
            ) : (
              'Salvar'
            )}
          </Button>
          <AlertConfirmPetDelete
            onRemovePet={handleRemovePet}
            isLoading={isPendingRemovePet}
            isDisabled={isLoading}
          />
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="available">Status</Label>
          <Controller
            name='available'
            control={control}
            render={({ field: { value, onChange } }) => (
              <div className="flex items-center space-x-2">
                <Switch checked={value} onCheckedChange={onChange} id="available" />
                <Label htmlFor="available">
                  {value ? 'Disponível para adoção' : 'Indisponível para adoção'}
                </Label>
              </div>
            )}
          />
        </div>
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
        <hr className='my-1' />
        <div className="grid gap-2">
          <UploadPetImages
            petImages={petImages}
            onUploadFiles={handleUpload}
            onRemoveFile={handleRemoveFile}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
