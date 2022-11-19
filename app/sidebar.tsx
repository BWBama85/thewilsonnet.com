import React from 'react';
import {
  FaGithub,
  FaGit,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

function sidebar() {
  return (
    <aside
      id="sidebar"
      className="
        mx-4
        items-center 
        rounded-3xl
        bg-base-200
        p-8
        2xl:sticky 
        2xl:top-8 
        2xl:mx-0
        2xl:self-start
      "
    >
      <div className="flex items-center justify-start gap-4 2xl:flex-col">
        <figure className="avatar h-32 w-32 2xl:h-48 2xl:w-48">
          <Image
            className="rounded-xl"
            alt="Brent Wilson"
            src="/me.png"
            fill
            priority
          />
        </figure>
        <div className="text-center">
          <p className="mb-4 text-2xl font-bold">Brent Wilson</p>
          <div className="badge badge-lg">Webmaster</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-center gap-4 text-2xl">
        <div>
          <Link
            href="https://github.com/BWBama85"
            target="_blank"
            title="GitHub"
          >
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
            href="https://twitter.com/brentwilson85"
            target="_blank"
            title="Twitter"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default sidebar;
