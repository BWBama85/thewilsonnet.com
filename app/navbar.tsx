import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-primary text-primary-content lg:absolute lg:top-0 lg:right-0 lg:left-auto lg:bottom-auto lg:z-10 lg:rounded-bl-lg lg:rounded-br-none">
      <div className="flex justify-center lg:text-xl">
        <div>
          <Link
            className="btn-primary btn-sm btn lg:rounded-bl-lg xl:btn-lg"
            href="/"
          >
            Home
          </Link>
        </div>
        <div>
          <Link className="btn-primary btn-sm btn xl:btn-lg" href="/about">
            About
          </Link>
        </div>
        <div>
          <Link
            className="btn-primary btn-sm btn xl:btn-lg"
            href="/about/resume"
          >
            Resume
          </Link>
        </div>
        <div>
          <Link className="btn-primary btn-sm btn xl:btn-lg" href="/projects">
            Projects
          </Link>
        </div>
        <div>
          <Link className="btn-primary btn-sm btn xl:btn-lg" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
