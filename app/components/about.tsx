import Link from 'next/link';

export default function ProjectsComp() {
  return (
    <div className="not-prose hero bg-base-100">
      <div className="hero-content text-center">
        <div>
          <h2 className="text-5xl font-bold">About Brent Wilson</h2>
          <p className="py-6">
            Brent Wilson is a highly skilled Webmaster, Developer, and Linux
            System Administrator with a passion for technology, sports, animals,
            and politics. He was born and raised in Huntsville, Alabama, but has
            also lived in Dallas, Texas, and Chattanooga, Tennessee.
          </p>
          <Link href="/about" title="Projects" className="btn-primary btn">
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
