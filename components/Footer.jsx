import Link from 'next/link';
import Image from 'next/image';
import { PiCopyrightLight } from 'react-icons/pi';
import logo from '@/assets/images/logo.svg';
import { APP_BRAND } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#ffebcd]'>
      <div className='container-sm flex-between'>
        <Image src={logo} alt='Kanji View logo' />
        <div className='flex-start gap-8'>
          <Link href='/'>Terms of Service</Link>
          <Link href='/'>Privacy Policy</Link>
        </div>
        <p className='flex flex-start text-gray-500'>
          <PiCopyrightLight className='mr-1 mt-[2px]' />
          <span>
            {APP_BRAND} {currentYear}. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
