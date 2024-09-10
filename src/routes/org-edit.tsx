import { Header } from '@/views/components/Header';
import { EditOrg } from '@/views/pages/OrgEdit';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/org-edit')({
  component: () => (
    <>
      <Header />
      <EditOrg />
    </>
  )
});
