import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/views/components/AlertDialog';
import { Button } from '@/views/components/Button';
import { Trash2 } from 'lucide-react';

export function AlertConfirmPetDelete() {
  return (
    <AlertDialog>
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
          <AlertDialogAction className="bg-red-600 hover:bg-red-700">Excluir</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
