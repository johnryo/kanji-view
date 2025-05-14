import KanjiListItem from './kanjiListItem';

export default function KanjiCard({ randomKanjiList, sequentialKanjiList }) {
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
}
