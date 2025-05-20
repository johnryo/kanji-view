import KanjiSearchForm from './KanjiSearchForm';
import '@/assets/styles/globals.css';

export default function Hero() {
  return (
    <section className='bg-[#ffcc99]'>
      <h1 className='font-bold text-center text-4xl sm:text-5xl md:text-6xl py-16'>
        Find Your Kanji
      </h1>
      <div className='flex-center gap-8 pb-6'>
        <KanjiSearchForm />
      </div>
    </section>
  );
}
