import KanjiCard from './KanjiCard';

const KanjiList = ({ sequentialKanji }) => {
  return (
    <section>
      <ul className='container mt-4 flex flex-wrap gap-6'>
        {sequentialKanji.map((kanji) => (
          <KanjiCard key={kanji._id} kanji={kanji} />
        ))}
      </ul>
    </section>
  );
};

export default KanjiList;
