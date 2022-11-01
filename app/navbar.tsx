import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <div className="flex w-full mb-4">
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>About Me</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Web Hosting</a>
                  </li>
                  <li>
                    <a>WordPress</a>
                  </li>
                  <li>
                    <a>XenForo</a>
                  </li>
                  <li>
                    <a>Other</a>
                  </li>
                </ul>
              </li>
              <li><Link href='/resume'>Resume</Link></li>
            </ul>
          </div>
          <Image
            className="mask mask-squircle"
            alt="Brent Wilson"
            src="/me.png"
            width={50}
            height={50}
          />
          <Link className="px-2 normal-case text-xl" href="/">The Wilson Net</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>About Me</a>
            </li>
            <li tabIndex={0}>
              <a>
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Web Hosting</a>
                </li>
                <li>
                  <a>WordPress</a>
                </li>
                <li>
                  <a>XenForo</a>
                </li>
                <li>
                  <a>Other</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/resume'>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}