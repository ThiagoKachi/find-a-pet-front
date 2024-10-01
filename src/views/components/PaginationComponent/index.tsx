import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/views/components/Pagination';

interface PaginationProps {
  prev: () => void;
  next: () => void;
  handlePage: (actualPage: number) => void;
  pages: number;
  currentPage: number;
  hasMore?: boolean;
}

export function PaginationComponent({
  prev,
  next,
  handlePage,
  pages,
  currentPage,
  hasMore,
}: PaginationProps) {
  const totalPagesToShow = 5;
  const halfOfTotalPages = Math.floor(totalPagesToShow / 2);

  const startPage = Math.max(1, currentPage - halfOfTotalPages);
  const endPage = Math.min(startPage + totalPagesToShow - 1, pages);

  const pagesArray = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={prev}
            disabled={currentPage === 1}
          />
        </PaginationItem>
        {pagesArray.map((page) => (
          <PaginationItem
            key={page.toString()}
            onClick={() => handlePage(page)}
          >
            <PaginationLink isActive={page === currentPage}>{page}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={next}
            disabled={!hasMore}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
