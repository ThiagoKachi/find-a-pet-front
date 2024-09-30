import { IPet, IPetImages } from '@/@types/Pets/IPets';
import { removeFile } from '@/app/services/images/removeFile';
import { uploadFile } from '@/app/services/images/uploadFile';
import { deletePet } from '@/app/services/pets/deletePet';
import { fetchPetById } from '@/app/services/pets/fetchPetById';
import { updatePet } from '@/app/services/pets/updatePet';
import { Route } from '@/routes/_authenticated/pet-edit/$id';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório.' }),
  age: z.number({ message: 'Idade é obrigatória.' }),
  species: z.enum(['Cat', 'Dog', 'Bird', 'Other'], { message: 'Espécie é obrigatória.' }),
  breed: z.string().min(1, { message: 'Raca é obrigatória.' }),
  size: z.enum(['Small', 'Medium', 'Large'], { message: 'Tamanho é obrigatório.' }),
  gender: z.enum(['Male', 'Female'], { message: 'Genero é obrigatório.' }),
  description: z.string().optional(),
  available: z.boolean(),
});

export type FormData = z.infer<typeof schema>;

export function useEditPetController() {
  const [petImages, setPetImages] = useState<IPetImages[]>([]);

  const { id } = Route.useParams();
  const navigate = useNavigate();

  const { data, isFetching: isLoadingPetDetails } = useQuery({
    queryKey: ['pet-details-edit'],
    queryFn: async () => {
      const data: IPet = await fetchPetById(id);

      setPetImages(data.petImages);

      return data;
    },
  });

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    values: {
      gender: data?.gender || 'Male',
      species: data?.species || 'Dog',
      size: data?.size || 'Medium',
      age: data?.age || 0,
      name: data?.name || '',
      description: data?.description || '',
      available: data?.available ?? true,
      breed: data?.breed || '',
    }
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      await updatePet(data, id);
    },
  });

  const { mutateAsync: removePet, isPending: isPendingRemovePet } = useMutation({
    mutationFn: async (petID: string) => await deletePet(petID),
  });

  async function handleRemovePet() {
    try {
      await removePet(id);

      navigate({
        to: '/',
      });

      toast.success('Pet removido com sucesso!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao remover o pet: ${error.response?.data.error}`
        );
      }
    }
  }

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      navigate({
        to: '/',
      });

      toast.success('Pet editado com sucesso! 🐾');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao editar o pet: ${error.response?.data.error}`
        );
      }
    }
  });

  // Edit images
  const [isLoading, setIsLoading] = useState(false);

  async function handleRemoveFile(index: number, fileKey: string) {
    try {
      setPetImages((prevState) => {
        const newState = [...prevState];
        newState.splice(index, 1);

        return newState;
      });

      await removeFile(fileKey);
      toast.success('Imagem removida com sucesso!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Ocorreu um erro ao remover a imagem: ${error.response?.data.error}`
        );
      }
    }
  }

  async function handleUpload(images: File[]) {
    if (petImages.length + images.length > 5) {
      toast.warning('Máximo de 5 imagens por pet');
      return;
    }

    try {
      setIsLoading(true);

      const response = await Promise.allSettled(images.map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        return uploadFile(id, formData);
      }));

      response.forEach((response, index) => {
        if (response.status === 'rejected') {
          const fileWithError = images[index];
          toast.error(`O upload do arquivo ${fileWithError.name} falhou.`);
        }
      });

      const values = response
        .filter((images) => images.status === 'fulfilled')
        .map((images) => images.value.petImages);

      setPetImages((prevState: IPetImages[]) => {
        const newImagesArray = [...prevState, ...values].flat();

        return newImagesArray;
      });

      toast.success('Uploads realizados com sucesso!');
    } catch  {
      toast.error('O upload dos arquivos falhou.');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    register,
    errors,
    handleSubmit,
    isPending,
    control,
    isLoadingPetDetails,
    handleRemovePet,
    isPendingRemovePet,
    isLoading,
    handleRemoveFile,
    handleUpload,
    petImages
  };
}
