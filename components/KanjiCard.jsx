import Link from 'next/link';
import { noto } from '@/lib/utils/fonts';

const KanjiCard = ({ kanji }) => {
  return (
    <li>
      <Link href={`/kanji/${kanji._id}`}>
        <div
          className={`${noto.className} bg-background text-5xl font-light px-3 pt-2 pb-3 shadow-sm/40 hover:shadow-lg/40`}
        >
          {kanji.character}
        </div>
      </Link>
    </li>
  );
};

export default KanjiCard;
