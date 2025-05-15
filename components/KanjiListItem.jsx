import Link from 'next/link';
import { noto } from '@/utils/fonts';

const KanjiListItem = ({ kanji }) => {
  return (
    <li
      className={`${noto.className} bg-white text-3xl font-light px-2 pt-2 pb-3 border rounded-xl`}
    >
      <Link href={`/kanji/${kanji._id}`}>{kanji.literal}</Link>
    </li>
  );
};

export default KanjiListItem;
