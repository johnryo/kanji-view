import Link from 'next/link';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { LiaAngleRightSolid } from 'react-icons/lia';
import { LiaEllipsisHSolid } from 'react-icons/lia';
import PaginationLink from './PaginationLink';
import RangeTracker from './RangeTracker';

const Pagination = ({ page, pageSize, totalItems, totalPages }) => {
  return (
    <>
      <nav className='container mx-auto flex justify-center items-center gap-4 mt-8'>
        <Link
          href={`/kanji?page=${page > 1 ? page - 1 : 1}`}
          className={`mr-2 px-2 py-1 border border-gray-500 rounded ${
            page === 1 ? 'opacity-25 cursor-not-allowed' : ''
          }`}
        >
          <LiaAngleLeftSolid />
        </Link>

        {page <= totalPages - (totalPages - 3) ? (
          <>
            <PaginationLink pages={totalPages}>
              {totalPages - (totalPages - 1)}
            </PaginationLink>

            <PaginationLink page={page} pages={totalPages} subtrahend={2}>
              {totalPages - (totalPages - 2)}
            </PaginationLink>

            <PaginationLink page={page} pages={totalPages} subtrahend={3}>
              {totalPages - (totalPages - 3)}
            </PaginationLink>

            <LiaEllipsisHSolid />

            <Link
              href={`/kanji?page=${totalPages}`}
              className='text-blue-600 font-normal'
            >
              {totalPages}
            </Link>
          </>
        ) : page > totalPages - (totalPages - 3) && page < totalPages - 2 ? (
          <>
            <PaginationLink pages={totalPages}>
              {totalPages - (totalPages - 1)}
            </PaginationLink>

            <LiaEllipsisHSolid />

            <Link
              href={`/kanji?page=${page}`}
              className='text-blue-600 font-normal underline underline-offset-8'
            >
              {page}
            </Link>

            <LiaEllipsisHSolid />

            <Link
              href={`/kanji?page=${totalPages}`}
              className='text-blue-600 font-normal'
            >
              {totalPages}
            </Link>
          </>
        ) : page >= totalPages - 2 ? (
          <>
            <PaginationLink pages={totalPages}>
              {totalPages - (totalPages - 1)}
            </PaginationLink>

            <LiaEllipsisHSolid />

            <PaginationLink page={page} pages={totalPages} subtrahend={2}>
              {totalPages - 2}
            </PaginationLink>

            <PaginationLink page={page} pages={totalPages}>
              {totalPages - 1}
            </PaginationLink>

            <Link
              href={`/kanji?page=${totalPages}`}
              className='text-blue-600 font-normal'
            >
              {totalPages}
            </Link>
          </>
        ) : null}

        <Link
          href={`/kanji?page=${page < totalPages ? page + 1 : totalPages}`}
          className={`ml-2 px-2 py-1 border border-gray-500 rounded ${
            page === totalPages ? 'opacity-25 cursor-not-allowed' : ''
          }`}
        >
          <LiaAngleRightSolid />
        </Link>
      </nav>

      <RangeTracker
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        totalPages={totalPages}
      />
    </>
  );
};

export default Pagination;
