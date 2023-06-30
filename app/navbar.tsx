import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-primary text-primary-content xl:absolute xl:bottom-auto xl:left-auto xl:right-0 xl:top-0 xl:z-10 xl:rounded-bl-lg xl:rounded-br-none">
      <div className="flex justify-center">
        <div>
          <Link
            className="btn-primary btn-sm btn xl:btn-lg lg:rounded-bl-lg"
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
