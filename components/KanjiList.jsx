import KanjiCard from './KanjiCard';

const KanjiList = ({ pageSize, total, sequentialKanji }) => {
  return (
    <section>
      <h2 className='text-3xl text-center font-bold mb-6 mt-8'>Browse Kanji</h2>
      <KanjiCard sequentialKanji={sequentialKanji} />
      <h2 className='text-xl mt-10'>
        Showing the first {pageSize} kanji of {total}
      </h2>
    </section>
  );
};

export default KanjiList;
