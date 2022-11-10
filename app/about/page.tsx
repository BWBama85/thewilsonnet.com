import {
  FaGithub,
  FaGit,
  FaLinkedin,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa'
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

      <div className="col-span-3">

        <article className="prose max-w-none">

          <h1>About Brent Wilson</h1>
          <p>
            I&apos;ve been tinkering with &quot;internet stuff&quot; since the 90s.
          </p>
        </article>
      </div>

      <aside className="hidden md:col-span-1 md:block">
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
      </aside>
    </div>
  )
}