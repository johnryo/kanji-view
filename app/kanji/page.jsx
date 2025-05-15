import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { KANJI_LIST_LIMIT } from '@/lib/constants';
import KanjiList from '@/components/KanjiList';

const KanjiListPage = async () => {
  await connectDB();

  const pageSize = KANJI_LIST_LIMIT || 50;

  const total = await Kanji.countDocuments();

  const sequentialKanjiList = await Kanji.find({}).limit(pageSize).lean();

  return (
    <>
      <KanjiList
        pageSize={pageSize}
        total={total}
        sequentialKanjiList={sequentialKanjiList}
      />
    </>
  );
};

export default KanjiListPage;
