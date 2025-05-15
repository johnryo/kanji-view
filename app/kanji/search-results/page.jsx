import KanjiSearchForm from '@/components/KanjiSearchForm';

export default function SearchResultsPage() {
  return (
    <section className='bg-[#ffddca] py-4'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
        <KanjiSearchForm />
      </div>
    </section>
  );
}
