import Link from 'next/link';
import { GiJapaneseBridge } from 'react-icons/gi';

export default function Navbar() {
  return (
    <nav className='bg-[#ffcc99] flex-between px-8 py-6'>
      <div className='flex-start gap-4'>
        <GiJapaneseBridge size={48} className='mt-[-15px]' />
        <span className='h1-bold'>
          <Link href='/'>JACHAR</Link>
        </span>{' '}
        <span className='text-xl'>Japanese Characters</span>
      </div>
      <div>
        <ul className='flex align-bottom gap-4'>
          <li>
            <Link href='/' className='hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/kanji' className='hover:underline'>
              Kanji List
            </Link>
          </li>
          <li>
            <Link href='/kanaitems' className='hover:underline'>
              Kana List
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:underline'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
