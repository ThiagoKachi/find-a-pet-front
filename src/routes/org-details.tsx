import { Header } from '@/views/components/Header';
import { OrgDetails } from '@/views/pages/OrgDetails';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/org-details')({
  component: () => (
    <>
      <Header />
      <OrgDetails />
    </>
  ),
});
