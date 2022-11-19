import Link from 'next/link';
import Image from 'next/image';

export default function Foot() {
  return (
    <footer className="footer justify-center bg-neutral p-10 text-neutral-content md:justify-evenly">
      <Image
        className="mask mask-squircle mx-auto"
        alt="Brent Wilson"
        src="/me.png"
        width={120}
        height={120}
      />
      <p className="w-32 text-center">
        <span className="font-bold"> The Wilson Net</span>
        <br />
        Huntsville, AL
      </p>

      <div>
        <span className="footer-title">Services</span>
        <a className="link-hover link">Web Hosting</a>
        <a className="link-hover link">WordPress</a>
        <a className="link-hover link">XenForo</a>
        <a className="link-hover link">Other</a>
      </div>
      <div>
        <span className="footer-title">About Me</span>
        <a className="link-hover link">Biography</a>
        <Link
          href="/about/resume"
          title="Brent Wilson's Resume"
          className="link-hover link"
        >
          Resume
        </Link>
        <a className="link-hover link">Projects</a>
        <a className="link-hover link">Services</a>
      </div>
      <div>
        <span className="footer-title">Misc</span>
        <a className="link-hover link">Contact</a>
        <a className="link-hover link">About This Website</a>
        <a className="link-hover link">Terms of Use</a>
        <a className="link-hover link">Privacy Policy</a>
      </div>
    </footer>
  );
}
