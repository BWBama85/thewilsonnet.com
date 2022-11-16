import Link from 'next/link'

export default function Home() {
  return (
    <article className="prose max-w-none mx-4 xl:w-full bg-base-200 p-4 rounded-3xl xl:relative xl:mx-0">
      <h1 className="xl:mt-20">The Wilson Net</h1>
      <div className="divider"></div>
      <p>
        This is my little piece of the internet where I showcase all the cool technology I interact with on a day to day basis as well as other hobbies I enjoy.
      </p>
      <p>
        While I continue to build out the website, have a <Link href="/about/resume" title="Richard Brent Wilson's Resume">look at my resume</Link>.
      </p>
      <p>
        This website was built from scratch using NextJS 13, Tailwind CSS, and Daisy UI.
      </p>
    </article>
  )
}
