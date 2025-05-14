import KanjiList from '@/components/KanjiList';

export default function KanjiListPage() {
  let list = 'sequential';

  return (
    <>
      <KanjiList list={list} />
    </>
  );
}
