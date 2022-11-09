'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="mb-4 bg-neutral text-neutral-content">
      <div className="navbar">
        <div className="navbar-start w-full">
          <Image
            className="mask mask-squircle"
            alt="Brent Wilson"
            src="/me.png"
            width={50}
            height={50}
            priority
          />
          <Link className="px-2 normal-case text-xl" href="/">The Wilson Net</Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href='/about/resume'>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}