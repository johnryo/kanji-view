import Link from 'next/link';

const PaginationLink = ({ page, targetPage, children }) => {
  function linkStyle(tp) {
    return `text-blue-500 font-semibold ${
      page === tp ? 'underline underline-offset-8' : ''
    }`;
  }

  return (
    <Link href={`/kanji?page=${targetPage}`} className={linkStyle(targetPage)}>
      {children}
    </Link>
  );
};

export default PaginationLink;
