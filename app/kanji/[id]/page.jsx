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

  const { literal, reading, meaning, strokes } = kanjiDetails;

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            href='/kanji'
            className='text-foreground text-[1.125rem] flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Kanji
          </Link>
        </div>
      </section>
      <section className='py-4'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <div className='col-span-full xl:col-start-2 xl:col-end-4 flex flex-col gap-4'>
            <p className={`${noto.className} text-7xl font-light mb-4`}>
              {literal}
            </p>
            <p className={`${noto.className} text-2xl font-light`}>
              <span
                className={`${titillium.className} text-xl font-semibold mr-2`}
              >
                Reading(s):
              </span>{' '}
              {reading}
            </p>
            <p className='text-xl'>
              <span className='font-semibold mr-2'>Meaning(s):</span> {meaning}
            </p>
            <p className='text-xl'>
              <span className='font-semibold mr-2'>Strokes:</span> {strokes}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KanjiPage;
