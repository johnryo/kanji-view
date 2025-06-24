import Link from 'next/link';
import Image from 'next/image';
import { ImHome } from 'react-icons/im';
import { PiBracketsAngleBold } from 'react-icons/pi';
import logo from '@/assets/images/logo.svg';
import { APP_NAME } from '@/lib/constants';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav className='bg-[#ffcc99] border-b border-b-orange-400'>
      <div className='container flex-between'>
        <div className='flex-start gap-4'>
          <Link href='/'>
            <Image src={logo} alt='Kanji View logo' className='mt-[-10px]' />
          </Link>
          <span className='h1-bold'>{APP_NAME}</span>
          <PiBracketsAngleBold />
          <span className='text-xl'>Japanese Characters</span>
        </div>

        <ul className='flex align-center gap-4'>
          <li className='py-1 mr-4'>
            <Link href='/'>
              <ImHome size={24} className='text-blue-500 mt-[-3px]' />
            </Link>
          </li>
          <NavLink path='/kanji'>Kanji List</NavLink>
          <NavLink path='/kana'>Kana List</NavLink>
          <NavLink path='/docs'>Docs</NavLink>
          <NavLink path='/learn'>Learn Japanese</NavLink>
          <NavLink path='/about'>About</NavLink>
        </ul>
      </div>
    </nav>
  );
}
