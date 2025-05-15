import KanjiListItem from './kanjiListItem';

const KanjiCard = ({ randomKanjiList, sequentialKanjiList }) => {
  return (
    <ul className='flex flex-wrap gap-6'>
      {randomKanjiList &&
        randomKanjiList.map((kanji) => (
          <KanjiListItem key={kanji._id} kanji={kanji} />
        ))}

      {sequentialKanjiList &&
        sequentialKanjiList.map((kanji) => (
          <KanjiListItem key={kanji._id} kanji={kanji} />
        ))}
    </ul>
  );
};

export default KanjiCard;
