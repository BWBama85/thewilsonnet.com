import Projects from '../components/projects';
import Link from 'next/link';

export default function About() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 xl:relative xl:mx-0 xl:w-full">
      <h1>About Brent Wilson</h1>
      <div className="divider"></div>
      <div className="my-3 px-3">
        <p>
          Brent Wilson is a highly skilled Webmaster, Developer, and Linux
          System Administrator with a passion for technology, sports, animals,
          and politics. He was born and raised in Huntsville, Alabama, but has
          also lived in Dallas, Texas, and Chattanooga, Tennessee.
        </p>
        <p>
          Throughout his career, Brent has gained a wealth of experience in web
          development, web server configurations, and optimizations. He is
          currently the owner of{' '}
          <Link
            href="/projects/bamapolitics"
            title="Bama Politics"
            className="link"
          >
            BamaPolitics.com
          </Link>
          , a website that covers the political landscape in Alabama. The
          website is well-known among the Alabama political community and has
          thousands of visitors daily. In addition to running BamaPolitics,
          Brent also takes on freelance projects to help clients optimize their
          web servers, troubleshoot issues, develop new features, and improve
          the overall performance of their websites.
        </p>
        <p>
          Brent is a lifelong learner and is always looking to expand his
          knowledge and skills. He is proficient in a variety of programming
          languages, including HTML, CSS, JavaScript, PHP, Python and has a
          strong understanding of Linux systems and network infrastructure. He
          is often sought out for his expertise in helping clients with web
          server performance tuning and troubleshooting and is known for his
          ability to find and fix even the most challenging problems. He is
          always willing to help others and is known for going above and beyond
          to ensure his clients are satisfied with his work.
        </p>
        <p>
          Overall, Brent Wilson is a well-rounded professional who brings a
          wealth of knowledge and experience to his work. He is dedicated to
          staying current with the latest trends and technologies in web
          development and Linux systems and constantly strives to improve his
          skills. Whether working on a website or troubleshooting a server
          problem, Brent's focus is always on delivering the best possible
          results for his clients.
        </p>
      </div>
      <Projects />
      <div className="divider"></div>
    </article>
  );
}
