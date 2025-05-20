import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import connectDB from '@/config/database';
import Kanji from '@/models/kanji';
import { convertToSerializableObject } from '@/lib/utils/convertToObject';
import KanjiCard from '@/components/KanjiCard';
import KanjiSearchForm from '@/components/KanjiSearchForm';

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
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <Link
            href='/kanji'
            className='flex items-center gap-2 text-lg text-indigo-600 hover:text-indigo-800  mb-7'
          >
            <FaArrowLeft /> Back To Kanji List
          </Link>
          <h1 className='text-2xl mb-6'>Search Results</h1>
          {kanjiItems.length === 0 ? (
            <p>No search results</p>
          ) : (
            <ul className='flex flex-wrap gap-6 list-none'>
              {kanjiItems.map((kanji) => (
                <KanjiCard key={kanji._id} kanji={kanji} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
