import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-primary p-4 rounded-b-lg xl:absolute xl:top-0 xl:right-0 xl:rounded-bl-lg xl:p-5 xl:bottom-auto xl:left-auto z-10">
      <div className="flex justify-center gap-6 xl:gap-12 xl:text-xl">
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