import KanjiDetails from '@/components/KanjiDetails';

export default async function KanjiPage({ params }) {
  const { id } = await params;

  return (
    <>
      <KanjiDetails id={id} />
    </>
  );
}
