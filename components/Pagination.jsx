import Link from 'next/link';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { LiaAngleRightSolid } from 'react-icons/lia';
import { LiaEllipsisHSolid } from 'react-icons/lia';
import PaginationLink from './PaginationLink';
import PageTracker from './PageTracker';

const Pagination = ({ page, pageSize, totalItems, totalPages }) => {
  const lastPage = totalPages;
  const firstPage = lastPage - (lastPage - 1);

  return (
    <>
      <nav className='container mx-auto flex justify-center items-center gap-4 mt-8'>
        <Link
          href={`/kanji?page=${page > 1 ? page - 1 : 1}`}
          className={`mr-2 p-2 text-green-800 bg-green-50 hover:bg-green-100 border border-green-500 rounded-[50%] ${
            page === 1 ? 'opacity-25 cursor-not-allowed' : ''
          }`}
        >
          <LiaAngleLeftSolid />
        </Link>

        {page <= lastPage - (lastPage - 3) ? (
          <>
            <PaginationLink page={page} targetPage={firstPage}>
              {firstPage}
            </PaginationLink>

            <PaginationLink page={page} targetPage={firstPage + 1}>
              {firstPage + 1}
            </PaginationLink>

            <PaginationLink page={page} targetPage={firstPage + 2}>
              {firstPage + 2}
            </PaginationLink>

            <LiaEllipsisHSolid />

            <PaginationLink page={page} targetPage={lastPage}>
              {lastPage}
            </PaginationLink>
          </>
        ) : page > lastPage - (lastPage - 3) && page < lastPage - 2 ? (
          <>
            <PaginationLink page={page} targetPage={firstPage}>
              {firstPage}
            </PaginationLink>

            <LiaEllipsisHSolid />

            <PaginationLink page={page} targetPage={page}>
              {page}
            </PaginationLink>

            <LiaEllipsisHSolid />

            <PaginationLink page={page} targetPage={lastPage}>
              {lastPage}
            </PaginationLink>
          </>
        ) : page >= lastPage - 2 ? (
          <>
            <PaginationLink page={page} targetPage={firstPage}>
              {firstPage}
            </PaginationLink>

            <LiaEllipsisHSolid />

            <PaginationLink page={page} targetPage={lastPage - 2}>
              {lastPage - 2}
            </PaginationLink>

            <PaginationLink page={page} targetPage={lastPage - 1}>
              {lastPage - 1}
            </PaginationLink>

            <PaginationLink page={page} targetPage={lastPage}>
              {lastPage}
            </PaginationLink>
          </>
        ) : null}

        <Link
          href={`/kanji?page=${page < lastPage ? page + 1 : lastPage}`}
          className={`ml-2 p-2 text-green-800 bg-green-50 hover:bg-green-100 border border-green-500 rounded-[50%] ${
            page === lastPage ? 'opacity-25 cursor-not-allowed' : ''
          }`}
        >
          <LiaAngleRightSolid />
        </Link>
      </nav>

      <PageTracker
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        totalPages={totalPages}
      />
    </>
  );
};

export default Pagination;
