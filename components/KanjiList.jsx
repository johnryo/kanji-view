import KanjiCard from './KanjiCard';

const KanjiList = ({ pageSize, total, sequentialKanjiList }) => {
  return (
    <section>
      <KanjiCard sequentialKanjiList={sequentialKanjiList} />
      <h2 className='text-xl mt-10'>
        Showing the first {pageSize} kanji of {total}
      </h2>
    </section>
  );
};

export default KanjiList;
