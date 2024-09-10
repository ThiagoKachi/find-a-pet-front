import { Header } from '@/views/components/Header';
import { Home } from '@/views/pages/Home';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Header />
      <Home />
    </>
  )
});
