'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const KanjiSearchForm = () => {
  const [reading, setReading] = useState('');
  const [meaning, setMeaning] = useState('');
  const [strokes, setStrokes] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reading === '') {
      router.push('/kanji');
    } else {
      const query = `?reading=${reading}`;
      router.push(`/kanji/search-results${query}`);
    }

    if (meaning === '') {
      router.push('/kanji');
    } else {
      const query = `?meaning=${meaning}`;
      router.push(`/kanji/search-results${query}`);
    }

    if (strokes === '') {
      router.push('/kanji');
    } else {
      const query = `?strokes=${strokes}`;
      router.push(`/kanji/search-results${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mb-4 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
    >
      <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='meaning' className='sr-only'>
          English Meaning
        </label>
        <input
          type='text'
          id='meaning'
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          placeholder='English meaning'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-amber-950'
        />
      </div>
      <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='reading' className='sr-only'>
          Reading
        </label>
        <input
          type='text'
          id='reading'
          value={reading}
          onChange={(e) => setReading(e.target.value)}
          placeholder='Kanji reading in kana'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-amber-950'
        />
      </div>
      <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='strokes' className='sr-only'>
          Strokes
        </label>
        <input
          type='number'
          id='strokes'
          value={strokes}
          onChange={(e) => setStrokes(e.target.value)}
          placeholder='Stroke count'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-amber-950'
        />
      </div>
      <button
        type='submit'
        className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-foreground text-white hover:bg-[#171717cc] focus:outline-none focus:ring focus:ring-background'
      >
        Search
      </button>
    </form>
  );
};

export default KanjiSearchForm;
