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

  const { character, reading, meaning, strokes } = kanjiDetails;

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            href='/kanji'
            className='flex items-center gap-2 text-lg text-indigo-600 hover:text-indigo-800'
          >
            <FaArrowLeft /> Back to Kanji List
          </Link>
          <Link
            href='/'
            className='flex items-center gap-2 text-lg text-indigo-600 hover:text-indigo-800'
          >
            <FaArrowLeft /> Back to Search
          </Link>
        </div>
      </section>
      <section className='py-4'>
        <div className='grid grid-cols-[1fr_2fr_1fr]'>
          <div className='col-span-full col-start-2 col-end-3 flex flex-col gap-4'>
            <p className={`${noto.className} text-7xl font-light mb-4`}>
              {character}
            </p>
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
              <span className='font-semibold mr-2'>Stroke:</span> {strokes}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KanjiPage;
