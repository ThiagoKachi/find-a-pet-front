import { Header } from '@/views/components/Header';
import Home from '@/views/pages/Home';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const schema = z.object({
  species: z.string().optional(),
  age: z.number().optional(),
  size: z.string().optional(),
  gender: z.string().optional(),
});

export type PetsFilters = z.infer<typeof schema>;

export const Route = createFileRoute('/_authenticated/')({
  validateSearch: (search: Record<string, unknown>): PetsFilters => {
    return schema.parse(search);
  },
  component: PetsComponent,
});

function PetsComponent() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
