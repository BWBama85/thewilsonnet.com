import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-primary p-4 rounded-b-lg lg:absolute lg:top-0 lg:right-0 lg:rounded-bl-lg lg:p-5 lg:bottom-auto lg:left-auto z-10">
      <div className="flex justify-center gap-6 lg:gap-12 lg:text-xl">
        <div>
          <Link
            href="/"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/about"
          >
            About
          </Link>
        </div>
        <div>
          <Link
            href="/about/resume"
          >
            Resume
          </Link>
        </div>
        <div>
          <Link
            href="/projects"
          >
            Projects
          </Link>
        </div>
        <div>
          Contact
        </div>
      </div>
    </nav>
  );
}