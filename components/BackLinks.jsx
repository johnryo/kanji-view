import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const BackLinks = () => {
  return (
    <div className='container m-auto'>
      <Link
        href='/kanji'
        className='flex items-center gap-2 text-slate-700 hover:text-slate-950'
      >
        <FaArrowLeft /> Back to Kanji List
      </Link>
      <Link
        href='/'
        className='flex items-center gap-2 text-slate-700 hover:text-slate-950'
      >
        <FaArrowLeft /> Back to Search
      </Link>
    </div>
  );
};

export default BackLinks;
