import HomeKanjiList from '@/components/HomeKanjiList';

export default function HomePage() {
  let list = 'random';

  return (
    <>
      <HomeKanjiList list={list} />
    </>
  );
}
