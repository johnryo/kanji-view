'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ImHome } from 'react-icons/im';
import { PiBracketsAngleBold } from 'react-icons/pi';
import logo from '@/assets/images/logo.svg';
import { APP_NAME } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();

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
        <div>
          <ul className='flex align-center gap-4'>
            <li className='py-1'>
              <Link href='/'>
                <ImHome size={24} className='mr-1' />
              </Link>
            </li>
            <li className='py-1'>
              <Link
                href='/kanji'
                className={`${
                  pathname === '/kanji' ? 'bg-foreground' : 'text-foreground'
                } text-background hover:bg-slate-900 hover:text-background rounded-md px-3 py-2`}
              >
                Kanji List
              </Link>
            </li>
            <li className='py-1'>
              <Link
                href='/kana'
                className={`${
                  pathname === '/kana' ? 'bg-foreground' : 'text-foreground'
                } text-background hover:bg-slate-900 hover:text-background rounded-md px-3 py-2`}
              >
                Kana List
              </Link>
            </li>
            <li className='py-1'>
              <Link
                href='/docs'
                className={`${
                  pathname === '/docs' ? 'bg-foreground' : 'text-foreground'
                } text-background hover:bg-slate-900 hover:text-background rounded-md px-3 py-2`}
              >
                Docs
              </Link>
            </li>
            <li className='py-1'>
              <Link
                href='/about'
                className={`${
                  pathname === '/about' ? 'bg-foreground' : 'text-foreground'
                } text-background hover:bg-slate-900 hover:text-background rounded-md px-3 py-2`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
