import { Link } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>FindAFriend - 404</title>
      </Helmet>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-700 sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-3 text-base leading-7 text-gray-600">
            Desculpe, não encontramos a página que você está procurando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
