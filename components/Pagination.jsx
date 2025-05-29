import Link from 'next/link';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { LiaAngleRightSolid } from 'react-icons/lia';
import { LiaEllipsisHSolid } from 'react-icons/lia';
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
            <Link
              href={`/kanji?page=${totalPages - (totalPages - 1)}`}
              className='text-blue-600 font-normal'
            >
              {totalPages - (totalPages - 1)}
            </Link>

            <Link
              href={`/kanji?page=${totalPages - (totalPages - 2)}`}
              className='text-blue-600 font-normal'
            >
              {totalPages - (totalPages - 2)}
            </Link>

            <Link
              href={`/kanji?page=${totalPages - (totalPages - 3)}`}
              className='text-blue-600 font-normal'
            >
              {totalPages - (totalPages - 3)}
            </Link>

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
            <Link
              href={`/kanji?page=${totalPages - (totalPages - 1)}`}
              className='text-blue-600 font-normal'
            >
              {totalPages - (totalPages - 1)}
            </Link>

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
            <Link
              href={`kanji?page=${totalPages - (totalPages - 1)}`}
              className='text-blue-600 font-normal'
            >
              {totalPages - (totalPages - 1)}
            </Link>

            <LiaEllipsisHSolid />

            <Link
              href={`/kanji?page=${totalPages - 2}`}
              className='text-blue-600 font-normal'
            >
              {totalPages - 2}
            </Link>

            <Link
              href={`/kanji?page=${totalPages - 1}`}
              className='text-blue-600 font-normal'
            >
              {totalPages - 1}
            </Link>

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
