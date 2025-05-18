import KanjiListItem from './kanjiListItem';

const KanjiCard = ({ randomKanji, sequentialKanji }) => {
  return (
    <ul className='flex flex-wrap gap-6'>
      {randomKanji &&
        randomKanji.map((kanji) => (
          <KanjiListItem key={kanji._id} kanji={kanji} />
        ))}

      {sequentialKanji &&
        sequentialKanji.map((kanji) => (
          <KanjiListItem key={kanji._id} kanji={kanji} />
        ))}
    </ul>
  );
};

export default KanjiCard;
