import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { convertToSerializableObject } from '@/lib/utils/convertToObject';
import KanjiCard from '@/components/KanjiCard';
import KanjiSearchForm from '@/components/KanjiSearchForm';
import BackLinks from '@/components/BackLinks';

const SearchResultsPage = async ({ searchParams }) => {
  await connectDB();

  const { reading, meaning, stroke } = await searchParams;

  let query = {
    $or: [{ reading: reading }, { meaning: meaning }, { stroke: stroke }],
  };

  const kanjiItemsQueryResults = await Kanji.find(query).lean();
  const kanjiItems = convertToSerializableObject(kanjiItemsQueryResults);

  return (
    <>
      <section className='bg-[#ffddca] py-4'>
        <div className='max-w-7xl mx-auto px-4 pt-3 flex flex-col items-start sm:px-6 lg:px-8'>
          <KanjiSearchForm />
        </div>
      </section>
      <BackLinks />
      <section className='px-4'>
        <div className='container-sm lg:container m-auto px-4 py-6'>
          <h1 className='text-2xl mb-6'>Search Results</h1>
          {kanjiItems.length === 0 ? (
            <p className='text-xl'>No search results</p>
          ) : (
            <ul className='flex flex-wrap gap-6 list-none'>
              {kanjiItems.map((kanji) => (
                <KanjiCard key={kanji._id} kanji={kanji} />
              ))}
            </ul>
          )}
          {kanjiItems.length > 0 && (
            <div className='mt-6 text-gray-500 text-right'>
              {kanjiItems.length} kanji in search results
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
