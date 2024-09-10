import { Header } from '@/views/components/Header';
import { Orgs } from '@/views/pages/Orgs';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/orgs')({
  component: () => (
    <>
      <Header />
      <Orgs />
    </>
  )
});
