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
    <section>
      <KanjiCard randomKanji={randomKanji} />
      <h2 className='text-xl mt-10'>
        Showing {pageSize} random kanji of {total}
      </h2>
    </section>
  );
};

export default HomeKanji;
