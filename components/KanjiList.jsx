import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { KANJI_LIST_LIMIT } from '@/lib/constants';
import KanjiCard from './KanjiCard';

export default async function KanjiList({ list }) {
  console.log(list);

  await connectDB();

  const pageSize = KANJI_LIST_LIMIT || 50;

  const total = await Kanji.countDocuments();

  const sequentialKanjiList = await Kanji.find({}).limit(pageSize).lean();

  return (
    <section>
      <KanjiCard sequentialKanjiList={sequentialKanjiList} />
      <h2 className='text-xl mt-10'>
        Showing {pageSize} random kanji of {total}
      </h2>
    </section>
  );
}
