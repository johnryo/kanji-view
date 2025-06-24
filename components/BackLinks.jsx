import Link from 'next/link';
import { LiaAngleDoubleLeftSolid } from 'react-icons/lia';

const UtilityLinks = async () => {
  return (
    <section className='md:px-10 lg:px-20'>
      <div className='container m-auto'>
        <Link
          href='/kanji'
          className='flex items-center gap-1 text-blue-500 hover:text-blue-700'
        >
          <LiaAngleDoubleLeftSolid /> Back to Kanji List
        </Link>
        <Link
          href='/'
          className='flex items-center gap-1 text-blue-500 hover:text-blue-700'
        >
          <LiaAngleDoubleLeftSolid /> Back to Search
        </Link>
      </div>
    </section>
  );
};

export default UtilityLinks;
