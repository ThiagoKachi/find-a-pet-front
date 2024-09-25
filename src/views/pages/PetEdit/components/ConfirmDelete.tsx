import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/views/components/AlertDialog';
import { Button } from '@/views/components/Button';
import { Loader2, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface AlertConfirmPetDeleteProps {
  onRemovePet: () => Promise<void>;
  isLoading: boolean;
}

export function AlertConfirmPetDelete({
  onRemovePet,
  isLoading
}: AlertConfirmPetDeleteProps) {
  const [open, setOpen] = useState(false);

  async function handleRemove() {
    await onRemovePet();
    setOpen(false);
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="w-4 h-4 text-white mr-1" />
          Excluir Pet
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza que deseja excluir o Pet?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Esta exclusão será permanente e removerá todos os dados do Pet.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <Button
            className="bg-red-600 hover:bg-red-700"
            onClick={handleRemove}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-1">
                <Loader2 className="w-4 h-4 animate-spin" /> Excluindo...
              </span>
            ) : (
              'Excluir'
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
