import { IPetImages } from '@/@types/Pets/IPets';
import { env } from '@/config/env';
import { cn } from '@/lib/utils';
import { Button } from '@/views/components/Button';
import { Label } from '@radix-ui/react-label';
import { PlusCircle, Trash2, Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface IUploadPetImages {
  petImages: IPetImages[];
  onUploadFiles: (images: File[]) => void;
  onRemoveFile: (index: number, fileKey: string) => void;
  isLoading: boolean;
}

export function UploadPetImages({
  petImages,
  onUploadFiles,
  onRemoveFile,
  isLoading,
}: IUploadPetImages) {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDropAccepted: (acceptedFiles) => {
      onUploadFiles(acceptedFiles);
    },
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
    },
    disabled: isLoading,
    multiple: true,
    maxFiles: 5,
  });

  console.log(petImages);

  return (
    <div className="w-full mx-auto space-y-2">
      <div className="flex items-end justify-between pb-2">
        <Label className="text-lg text-primary font-semibold">Imagens</Label>
        <div className="flex items-center gap-2">
          {petImages.length >= 5 ? null : (
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={open}
              disabled={isLoading}
            >
              <PlusCircle className="m-0 sm:mr-2 h-5 w-5" />
              <span className="hidden sm:block">Adicionar imagens</span>
            </Button>
          )}
        </div>
      </div>
      {petImages.length <= 0 ? (
        <div className="flex items-center gap-4" {...getRootProps()}>
          <div
            className={cn(
              'mt-1 h-[150px] w-full border border-zinc-200 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-zinc-300 transition-colors duration-300 hover:shadow-md hover:shadow-zinc-200',
              isDragActive
                ? 'bg-zinc-100 border-2 border-dashed border-primary'
                : 'bg-zinc-50',
            )}
          >
            <Upload className="w-7 h-7 text-zinc-500 mb-2" />
            <span className="text-zinc-500 font-medium">
              Clique para adicionar
            </span>
            <small className="text-zinc-500">Máximo de 5 imagens</small>
          </div>
          <input {...getInputProps()} />
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {petImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={`${env.BASE_AWS_API_URL}/${image.file_key}`}
                alt={image.file_key}
                className="object-cover w-40 h-40"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-zinc-200/50 group-hover:opacity-100 transition-colors duration-200 disabled:opacity-40"
                disabled={isLoading}
                onClick={() => onRemoveFile(index, image.file_key)}
              >
                <Trash2 className="w-5 h-5 text-red-500" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
