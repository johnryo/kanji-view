import KanjiDetails from '@/components/KanjiDetails';

export default async function KanjiPage({ params }) {
  const { id } = await params;

  return (
    <section className='py-6'>
      <KanjiDetails id={id} />
    </section>
  );
}
