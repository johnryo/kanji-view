import Link from 'next/link';
import { GiJapaneseBridge } from 'react-icons/gi';

export default function Navbar() {
  return (
    <nav className='bg-[#ffcc99]'>
      <div className='container flex-between'>
        <div className='flex-start gap-4'>
          <GiJapaneseBridge size={48} className='mt-[-15px]' />
          <span className='h1-bold'>
            <Link href='/'>JACHAR</Link>
          </span>{' '}
          <span className='text-xl'>Japanese Characters</span>
        </div>
        <div>
          <ul className='flex align-bottom gap-4'>
            <li className='bg-[#171717] px-3 py-1 mr-2 rounded'>
              <Link
                href='/'
                className='hover:underline text-white font-semibold'
              >
                Search
              </Link>
            </li>
            <li className='py-1'>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
            </li>
            <li className='py-1'>
              <Link href='/kanji' className='hover:underline'>
                Kanji List
              </Link>
            </li>
            <li className='py-1'>
              <Link href='/kana' className='hover:underline'>
                Kana List
              </Link>
            </li>
            <li className='py-1'>
              <Link href='/about' className='hover:underline'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
