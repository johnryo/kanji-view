// import Link from 'next/link';
// import {
//   LiaAngleDoubleLeftSolid,
//   LiaAngleDoubleRightSolid,
// } from 'react-icons/lia';
import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { convertToSerializableObject } from '@/lib/utils/convertToObject';
import { noto, titillium } from '@/lib/utils/fonts';
import BackLinks from '@/components/BackLinks';

const KanjiPage = async ({ params }) => {
  await connectDB();

  const { id } = await params;
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
      <BackLinks />
      <section className='py-10 md:px-10 lg:px-20'>
        <div className='flex justify-center align-center container m-auto py-12 px-6'>
          {/* <Link
            href='/'
            className='flex flex-col justify-center text-blue-500 text-2xl hover:cursor-pointer px-3'
          >
            <LiaAngleDoubleLeftSolid />
          </Link> */}

          <div className='flex flex-col gap-2 bg-background border-background rounded-xl p-6 shadow-lg/10'>
            <h2 className={`${noto.className} text-7xl font-light mb-4`}>
              {character}
            </h2>
            <p className={`${noto.className} text-2xl font-light`}>
              <span
                className={`${titillium.className} text-xl font-normal mr-2`}
              >
                Reading:
              </span>{' '}
              {reading}
            </p>
            <p className='text-xl'>
              <span className='font-normal mr-2'>Meaning:</span> {meaning}
            </p>
            <p className='text-xl'>
              <span className='font-normal mr-2'>Strokes:</span> {stroke}
            </p>
          </div>

          {/* <Link
            href='/'
            className='flex flex-col justify-center text-blue-500 text-2xl hover:cursor-pointer px-3'
          >
            <LiaAngleDoubleRightSolid />
          </Link> */}
        </div>
      </section>
    </>
  );
};

export default KanjiPage;
