import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { HOME_KANJI_LIMIT } from '@/lib/constants';
import KanjiCard from './KanjiCard';

const HomeKanji = async () => {
  await connectDB();

  const pageSize = HOME_KANJI_LIMIT || 15;

  const total = await Kanji.countDocuments();

  const randomKanji = await Kanji.aggregate([{ $sample: { size: pageSize } }]);

  return (
    <section className='container'>
      <ul className='mt-4 flex flex-wrap justify-center gap-6'>
        {randomKanji.map((kanji) => (
          <KanjiCard key={kanji._id} kanji={kanji} />
        ))}
      </ul>
      <h2 className='mt-10 text-center'>
        Showing {randomKanji.length} random kanji of {total}
      </h2>
    </section>
  );
};

export default HomeKanji;
