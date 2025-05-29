import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { KANJI_LIST_LIMIT } from '@/lib/constants';
import KanjiCard from '@/components/KanjiCard';
import Pagination from '@/components/Pagination';

const KanjiListPage = async ({ searchParams }) => {
  await connectDB();

  const kanjiListLimit = KANJI_LIST_LIMIT || 50;
  const { page = 1, pageSize = kanjiListLimit } = await searchParams;

  const skip = (page - 1) * pageSize;
  const total = await Kanji.countDocuments({});
  const totalPages = Math.ceil(total / pageSize);
  const showPagination = total > pageSize && totalPages >= page;
  const sequentialKanji = await Kanji.find({}).skip(skip).limit(pageSize);

  return (
    <section>
      <h2 className='text-3xl text-center font-bold mb-6 mt-8'>Browse Kanji</h2>
      {sequentialKanji.length === 0 ? (
        <p className='container text-center text-xl'>No Kanji Found</p>
      ) : (
        <ul className='container mt-4 flex flex-wrap gap-6'>
          {sequentialKanji.map((kanji) => (
            <KanjiCard key={kanji._id} kanji={kanji} />
          ))}
        </ul>
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
