import Link from 'next/link';

const PaginationLink = ({ page = 1, pages, subtrahend = 1, children }) => {
  const lowerRange = page <= pages - (pages - 3);
  const midRange = page > pages - (pages - 3) && page < pages - 2;
  const upperRange = page >= pages - 2;

  const lowerLink = pages - (pages - subtrahend);
  const upperLink = pages - subtrahend;

  return (
    <Link
      href={`/kanji?page=${
        lowerRange ? lowerLink : midRange ? page : upperRange ? upperLink : null
      }`}
      className='text-blue-600 font-normal'
    >
      {children}
    </Link>
  );
};

export default PaginationLink;
