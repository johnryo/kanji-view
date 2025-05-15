import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { convertToSerializableObject } from '@/utils/convertToObject';
import { noto, titillium } from '@/utils/fonts';

const KanjiDetails = async ({ id }) => {
  await connectDB();

  const kanjiDoc = await Kanji.findById(id).lean();
  const kanjiDetails = convertToSerializableObject(kanjiDoc);

  const { literal, reading, meaning, strokes } = kanjiDetails;

  return (
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
  );
};

export default KanjiDetails;
