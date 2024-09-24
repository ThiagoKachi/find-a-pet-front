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
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

interface AlertConfirmOrgDeleteProps {
  onRemoveOrg: () => Promise<void>;
  isLoading: boolean;
}

export function AlertConfirmOrgDelete({
  onRemoveOrg,
  isLoading
}: AlertConfirmOrgDeleteProps) {
  const [open, setOpen] = useState(false);

  async function handleRemove() {
    await onRemoveOrg();
    setOpen(false);
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="w-4 h-4 text-white mr-1" />
          Excluir ORG
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza que deseja excluir sua ORG?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Esta exclusão será permanente e removerá todos os dados da sua ORG.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <Button
            variant={'destructive'}
            className="bg-red-600 hover:bg-red-700"
            onClick={handleRemove}
            disabled={isLoading}
          >
            {isLoading ? 'Aguarde...' : 'Excluir'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
