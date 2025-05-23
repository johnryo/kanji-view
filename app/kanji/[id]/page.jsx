import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { convertToSerializableObject } from '@/lib/utils/convertToObject';
import { noto, titillium } from '@/lib/utils/fonts';
import BackLinks from '@/components/BackLinks';

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
      <BackLinks />
      <section className='px-4'>
        <div className='flex justify-center align-center container w-full'>
          <div className='flex flex-col gap-2'>
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
      </section>
    </>
  );
};

export default KanjiPage;
