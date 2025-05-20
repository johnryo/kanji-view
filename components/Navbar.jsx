import Link from 'next/link';
import Image from 'next/image';
import { ImHome } from 'react-icons/im';
import logo from '@/assets/images/logo.svg';
import { APP_NAME } from '@/lib/constants';

export default function Navbar() {
  return (
    <nav className='bg-[#ffcc99] border-b border-b-orange-400'>
      <div className='container flex-between'>
        <div className='flex flex-start gap-4'>
          <Link href='/'>
            <Image src={logo} alt='Kanji View logo' className='mt-[-10px]' />
          </Link>
          <span className='h1-bold'>{APP_NAME}</span>
          <span className='text-xl'>Japanese Characters</span>
        </div>
        <div>
          <ul className='flex align-center gap-4'>
            <li className='py-1'>
              <Link href='/'>
                <ImHome size={24} className='mt-[-2px] mr-1' />
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
