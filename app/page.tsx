import Projects from './components/projects';
import About from './components/about';
import Link from 'next/link';

export default function Home() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 xl:relative xl:mx-0 xl:w-full">
      <h1>The Wilson Net</h1>
      <div className="divider"></div>
      <div className="not-prose hero bg-base-100">
        <div className="hero-content text-center">
          <div>
            <h2 className="text-5xl font-bold">About The Wilson Net</h2>
            <p className="py-6">
              This is my little piece of the internet where I showcase all the
              cool technology I interact with on a day to day basis as well as
              other hobbies I enjoy. This website is built with{' '}
              <Link
                href="https://nextjs.org/"
                title="Next.js"
                target="_blank"
                className="link"
              >
                Next.js 13
              </Link>
              ,{' '}
              <Link
                href="https://tailwindcss.com/"
                title="Tailwind CSS"
                target="_blank"
                className="link"
              >
                Tailwind CSS
              </Link>
              ,{' '}
              <Link
                href="https://daisyui.com/"
                title="DaisyUI"
                target="_blank"
                className="link"
              >
                DaisyUI
              </Link>
              ,{' '}
              <Link
                href="https://github.com/garmeeh/next-seo"
                title="Next SEO"
                target="_blank"
                className="link"
              >
                Next SEO
              </Link>
              , and deployed on{' '}
              <Link
                href="https://vercel.com/"
                title="Vercel"
                target="_blank"
                className="link"
              >
                Vercel
              </Link>
              . You can find the complete source code for The Wilson Net{' '}
              <Link
                href="https://github.com/BWBama85/thewilsonnet.com"
                title="thewilsonnet.com GitHub"
                target="_blank"
                className="link"
              >
                on my GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
    </article>
  );
}
