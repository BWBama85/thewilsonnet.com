import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="z-10 rounded-b-lg bg-primary p-4 2xl:absolute 2xl:top-0 2xl:right-0 2xl:left-auto 2xl:bottom-auto 2xl:rounded-bl-lg 2xl:rounded-br-none 2xl:p-5">
      <div className="flex justify-center gap-6 2xl:gap-12 2xl:text-xl">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/about/resume">Resume</Link>
        </div>
        <div>
          <Link href="/projects">Projects</Link>
        </div>
        <div>Contact</div>
      </div>
    </nav>
  );
}
