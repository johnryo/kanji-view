import Link from 'next/link';
import { noto } from '@/utils/fonts';

export default function KanjiCard({ randomKanjiList }) {
  return (
    <ul className='flex flex-wrap gap-6'>
      {randomKanjiList.map((kanji) => (
        <li
          key={kanji._id}
          className={`${noto.className} bg-white text-3xl font-light px-2 pt-2 pb-3 border rounded-xl`}
        >
          <Link href={`/kanji/${kanji._id}`}>{kanji.literal}</Link>
        </li>
      ))}
    </ul>
  );
}
