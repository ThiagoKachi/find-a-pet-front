import { Button } from '@/views/components/Button';
import { Trash2, Upload } from 'lucide-react';
import { useState } from 'react';

export function UploadPetImages() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxFiles = 5;
    const files = event.target.files as FileList;

    if (files?.length <= maxFiles) {
      const newImages = Array.from(files).map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    } else {
      alert(`Máximo de ${maxFiles} imagens permitidas`);
    }
  };

  return (
    <div className="w-full mx-auto space-y-6">
      {images.length <= 0 ? (
        <div className="flex items-center gap-4">
          <div
            className="mt-1 h-[150px] w-full border border-zinc-200 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-zinc-300 transition-colors duration-300 hover:shadow-md hover:shadow-zinc-200"
            onClick={() => document.getElementById('file-upload')!.click()}
          >
            <Upload className="w-7 h-7 text-zinc-500 mb-2" />
            <span className="text-zinc-500 font-medium">Clique para adicionar</span>
            <small className="text-zinc-500">Máximo de 5 imagens</small>
          </div>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileUpload}
            className="sr-only"
            accept='.jpg, .jpeg, .png'
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group">
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
                alt={image.alt}
                className="object-cover w-40 h-40"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-zinc-200/50 group-hover:opacity-100 transition-colors duration-200"
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
