import Link from 'next/link';
import { GiJapaneseBridge } from 'react-icons/gi';
import { PiCopyrightLight } from 'react-icons/pi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#ffddca]'>
      <div className='container flex-between'>
        <GiJapaneseBridge size={40} />
        <div className='flex-start gap-8'>
          <Link href='/'>Terms of Service</Link>
          <Link href='/'>Privacy Policy</Link>
        </div>
        <p className='flex-start text-gray-500'>
          <PiCopyrightLight className='mr-1 mt-[2px]' />
          <span>Jachar {currentYear}. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
