import Link from 'next/link';
import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { noto } from '@/utils/fonts';
import { KANJI_LIST_LIMIT } from '@/lib/constants';
// import KanjiCard from './KanjiCard';

export default async function KanjiList({ list }) {
  console.log(list);
  await connectDB();

  const pageSize = KANJI_LIST_LIMIT || 50;

  const total = await Kanji.countDocuments();

  const limitedKanjiList = await Kanji.find({}).limit(pageSize).lean();

  return (
    <section>
      <ul className='flex flex-wrap gap-6'>
        {limitedKanjiList.map((kanji) => (
          <li
            key={kanji._id}
            className={`${noto.className} bg-white text-3xl font-light px-2 pt-2 pb-3 border rounded-lg`}
          >
            <Link href={`/kanji/${kanji._id}`}>{kanji.literal}</Link>
          </li>
        ))}
      </ul>
      <h2 className='text-xl mt-10'>
        Showing the first {pageSize} kanji of {total}
      </h2>
    </section>
  );
}
