import { Header } from '@/views/components/Header';
import { EditOrg } from '@/views/pages/OrgEdit';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/org-edit')({
  component: () => (
    <>
      <Header />
      <EditOrg />
    </>
  )
});
