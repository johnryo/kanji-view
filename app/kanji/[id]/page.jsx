import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { convertToSerializableObject } from '@/lib/utils/convertToObject';
import { noto, titillium } from '@/lib/utils/fonts';

const KanjiPage = async ({ params }) => {
  const { id } = await params;

  await connectDB();

  const kanjiDoc = await Kanji.findById(id).lean();
  const kanjiDetails = convertToSerializableObject(kanjiDoc);

  if (!kanjiDetails) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>Kanji Not Found</h1>
    );
  }

  const { character, reading, meaning, stroke } = kanjiDetails;

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            href='/kanji'
            className='flex items-center gap-2 text-indigo-600 hover:text-indigo-800'
          >
            <FaArrowLeft /> Back to Kanji List
          </Link>
          <Link
            href='/'
            className='flex items-center gap-2 text-indigo-600 hover:text-indigo-800'
          >
            <FaArrowLeft /> Back to Search
          </Link>
        </div>
      </section>
      <section className='py-4'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 w-full gap-6'>
            <div className='flex flex-col gap-2 m-auto'>
              <h2 className={`${noto.className} text-7xl font-light mb-4`}>
                {character}
              </h2>
              <p className={`${noto.className} text-2xl font-light`}>
                <span
                  className={`${titillium.className} text-xl font-semibold mr-2`}
                >
                  Reading:
                </span>{' '}
                {reading}
              </p>
              <p className='text-xl'>
                <span className='font-semibold mr-2'>Meaning:</span> {meaning}
              </p>
              <p className='text-xl'>
                <span className='font-semibold mr-2'>Stroke:</span> {stroke}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KanjiPage;
