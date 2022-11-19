import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-primary text-primary-content 2xl:absolute 2xl:top-0 2xl:right-0 2xl:left-auto 2xl:bottom-auto 2xl:z-10 2xl:rounded-bl-lg 2xl:rounded-br-none">
      <div className="flex justify-center 2xl:text-xl">
        <div>
          <Link
            className="btn-primary btn xl:btn-lg 2xl:rounded-bl-lg"
            href="/"
          >
            Home
          </Link>
        </div>
        <div>
          <Link className="btn-primary btn xl:btn-lg" href="/about">
            About
          </Link>
        </div>
        <div>
          <Link className="btn-primary btn xl:btn-lg" href="/about/resume">
            Resume
          </Link>
        </div>
        <div>
          <Link className="btn-primary btn xl:btn-lg" href="/projects">
            Projects
          </Link>
        </div>
        <div>
          <Link className="btn-primary btn xl:btn-lg" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
