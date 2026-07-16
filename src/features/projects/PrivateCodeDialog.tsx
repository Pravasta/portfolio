import { Lock } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

interface PrivateCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Optional project title shown in the message. */
  projectTitle?: string;
}

/**
 * Shown when a project has no public link — communicates that the source code
 * is private / confidential and cannot be shared.
 */
export const PrivateCodeDialog = ({
  open,
  onOpenChange,
  projectTitle,
}: PrivateCodeDialogProps) => (
  <AlertDialog open={open} onOpenChange={onOpenChange}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Lock className="h-6 w-6 text-primary" />
        </div>
        <AlertDialogTitle className="text-center">
          Kode Bersifat Privat
        </AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          {projectTitle ? (
            <>
              <span className="font-medium text-foreground">{projectTitle}</span>{' '}
              merupakan proyek profesional/klien.{' '}
            </>
          ) : (
            'Proyek ini bersifat rahasia. '
          )}
          Kode sumbernya tidak dapat dibagikan atau disebarluaskan karena terikat
          perjanjian kerahasiaan. Terima kasih atas pengertiannya!
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction className="w-full">Mengerti</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
