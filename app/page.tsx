import {
  FaGithub,
  FaGit,
  FaLinkedin,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa'
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto">
      <Image
        className="mask mask-squircle mx-auto"
        alt="Brent Wilson"
        src="/me.png"
        width={288}
        height={222}
        priority
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold my-3">Brent Wilson</h1>
        <p>Webmaster & technology fanatic</p>
        <div className="flex gap-4 justify-center my-3 text-2xl">
          <div>
            <Link
              href="https://github.com/BWBama85"
              target="_blank"
              title="GitHub">
              <FaGithub />
            </Link>
          </div>
          <div>
            <Link
              href="https://git.thewilsonnet.com/"
              target="_blank"
              title="Gitea"
            >
              <FaGit />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/brent-wilson-3a1463159/"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.facebook.com/brentwilson85"
              target="_blank"
              title="Facebook"
            >
              <FaFacebook />
            </Link>
          </div>
          <div>
            <Link
              href='https://twitter.com/brentwilson85'
              target="_blank"
              title="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-1 mb-4">
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="py-6">
                A Webmaster since I was 17-years-old, I have built and managed some of the largest community driven websites on the internet.
              </p>
              <Link href="/about/resume" title="About Brent Wilson" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
        {/*
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold">Projects</h2>
              <p className="py-6">
                The only &quot;job&quot; I have ever had was at Domino&apos;s Pizza. Since I left that job in 2007 I have had projects.
              </p>
              <Link href="/projects" title="My Projects" className="btn btn-primary">My Projects</Link>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 md:col-span-2">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold">Services</h2>
              <p className="py-6">
                I love what I do and so I have no problem working on the side for some extra money. If you have a problem or idea, let me solve it or bring it to life.
              </p>
              <Link href="/services" title="My Services" className="btn btn-primary">My Services</Link>
            </div>
          </div>
        </div>
*/}
      </div>
    </div>
  )
}
