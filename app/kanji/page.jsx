import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { KANJI_LIST_LIMIT } from '@/lib/constants';
import KanjiList from '@/components/KanjiList';
import Pagination from '@/components/Pagination';

const KanjiListPage = async ({ searchParams }) => {
  await connectDB();

  const kanjiListLimit = KANJI_LIST_LIMIT || 50;
  const { page = 1, pageSize = kanjiListLimit } = await searchParams;

  const skip = (page - 1) * pageSize;
  const total = await Kanji.countDocuments({});
  const totalPages = Math.ceil(total / pageSize);
  const showPagination = total > pageSize;
  const sequentialKanji = await Kanji.find({}).skip(skip).limit(pageSize);

  return (
    <section>
      <h2 className='text-3xl text-center font-bold mb-6 mt-8'>Browse Kanji</h2>
      {sequentialKanji.length === 0 ? (
        <p>No Kanji Found</p>
      ) : (
        <KanjiList sequentialKanji={sequentialKanji} />
      )}
      {showPagination && (
        <Pagination
          page={parseInt(page)}
          pageSize={parseInt(pageSize)}
          totalItems={total}
          totalPages={totalPages}
        />
      )}
    </section>
  );
};

export default KanjiListPage;
