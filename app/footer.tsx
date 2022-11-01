import Image from 'next/image';

export default function Foot() {

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content justify-center md:justify-evenly">
      <div>
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
      </div>

      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Web Hosting</a>
        <a className="link link-hover">WordPress</a>
        <a className="link link-hover">XenForo</a>
        <a className="link link-hover">Other</a>
      </div>
      <div>
        <span className="footer-title">About Me</span>
        <a className="link link-hover">Biography</a>
        <a className="link link-hover">Resume</a>
        <a className="link link-hover">Projects</a>
        <a className="link link-hover">Services</a>
      </div>
      <div>
        <span className="footer-title">Misc</span>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">About This Website</a>
        <a className="link link-hover">Terms of Use</a>
        <a className="link link-hover">Privacy Policy</a>
      </div>
    </footer>
  )
}