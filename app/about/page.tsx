import TOC from '../tableofcontents';
import Link from 'next/link';

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

      <div className="col-span-3">

        <article className="prose max-w-none">

          <h1>About Brent Wilson</h1>
        </article>
      </div>

      <aside className="hidden md:col-span-1 md:block">
        <TOC />
      </aside>
    </div>
  )
}