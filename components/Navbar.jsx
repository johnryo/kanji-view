import Link from 'next/link';
import { GiJapaneseBridge } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';

export default function Navbar() {
  return (
    <nav className='bg-[#ffcc99] border-b border-b-orange-400'>
      <div className='container flex-between'>
        <div className='flex-start gap-4'>
          <GiJapaneseBridge size={48} className='mt-[-15px]' />
          <span className='h1-bold'>
            <Link href='/'>JACHAR</Link>
          </span>{' '}
          <span className='text-xl'>Japanese Characters</span>
        </div>
        <div>
          <ul className='flex align-center gap-4'>
            <li className='py-1'>
              <Link href='/'>
                <ImHome size={24} className='mt-[-3px] mr-1' />
              </Link>
            </li>
            <li className='py-1'>
              <Link href='/kanji'>Kanji List</Link>
            </li>
            <li className='py-1'>
              <Link href='/kana'>Kana List</Link>
            </li>
            <li className='py-1'>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
