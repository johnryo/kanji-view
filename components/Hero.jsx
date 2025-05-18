import KanjiSearchForm from './KanjiSearchForm';

export default function Hero() {
  return (
    <>
      <div className='font-bold text-center text-6xl py-16'>
        Find Your Kanji
      </div>
      <div className='flex-center gap-8'>
        <KanjiSearchForm />
        <KanjiSearchForm />
      </div>
    </>
  );
}
