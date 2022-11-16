import React from 'react'
import {
  FaGithub,
  FaGit,
  FaLinkedin,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa'
import Image from 'next/image';
import Link from 'next/link';

function sidebar() {
  return (
    <aside
      id="sidebar"
      className="
        bg-base-200
        rounded-3xl 
        items-center
        p-8
        mx-4
        xl:self-start 
        xl:sticky 
        xl:top-8
        xl:mx-0
      "
    >
      <div className="flex justify-start items-center gap-4 xl:flex-col">
        <figure className="avatar w-32 h-32 xl:w-48 xl:h-48">
          <Image
            className="rounded-xl"
            alt="Brent Wilson"
            src="/me.png"
            fill
            priority
          />
        </figure>
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Brent Wilson</p>
          <div className="badge badge-lg">Webmaster</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-4 justify-center text-2xl">
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
    </aside>
  )
}

export default sidebar
