import KanjiCard from './KanjiCard';

const KanjiList = ({ sequentialKanji }) => {
  return (
    <ul className='container mt-4 flex flex-wrap gap-6'>
      {sequentialKanji.map((kanji) => (
        <KanjiCard key={kanji._id} kanji={kanji} />
      ))}
    </ul>
  );
};

export default KanjiList;
