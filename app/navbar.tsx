'use client';

import { Navbar, Dropdown, Button, Menu, Mask, Link } from 'react-daisyui'

export default function Nav() {
  return (
    <div className="flex w-full font-sans bg-neutral mb-4">
      <Navbar>
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
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
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              <Dropdown.Item>About Me</Dropdown.Item>
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
              <Dropdown.Item><Link href='/resume'>Resume</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Mask
            src="/me.png"
            variant="squircle"
            className="w-8 h-full"
            alt="Brent Wilson"
          />
          <Link className="px-2 normal-case text-xl" href="/">The Wilson Net</Link>

        </Navbar.Start>
        <Navbar.End className="hidden lg:flex">
          <Menu horizontal className="p-0">
            <Menu.Item>
              <a>About Me</a>
            </Menu.Item>
            <Menu.Item tabIndex={0}>
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
              <Menu className="p-2 bg-base-100">
                <Menu.Item>
                  <a>Web Hosting</a>
                </Menu.Item>
                <Menu.Item>
                  <a>WordPress</a>
                </Menu.Item>
                <Menu.Item>
                  <a>XenForo</a>
                </Menu.Item>
                <Menu.Item>
                  <a>Other</a>
                </Menu.Item>
              </Menu>
            </Menu.Item>
            <Menu.Item>
              <Link href='/resume'>Resume</Link>
            </Menu.Item>
          </Menu>
        </Navbar.End>
      </Navbar>
    </div>
  );
}