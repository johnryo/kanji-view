'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ path, children }) => {
  const pathname = usePathname();

  return (
    <li className='mx-[-0.4rem]'>
      <Link
        href={path}
        className={`${
          pathname === path ? 'bg-foreground' : 'text-foreground'
        } text-background hover:bg-slate-900 hover:text-background rounded-md px-3 py-2`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
