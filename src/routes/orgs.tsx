import { Header } from '@/views/components/Header';
import { Orgs } from '@/views/pages/Orgs';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const schema = z.object({
  name: z.string().optional(),
  city: z.string().optional(),
});

type OrgsFilters = z.infer<typeof schema>;

export const Route = createFileRoute('/orgs')({
  validateSearch: (search: Record<string, unknown>): OrgsFilters => {
    return schema.parse(search);
  },
  component: OrgsComponent
});

function OrgsComponent() {
  const { name, city } = Route.useSearch();

  return (
    <>
      <Header />
      <Orgs name={name} city={city} />
    </>
  );
}
