import Link from 'next/link';
import Image from 'next/image';

export default function BamaPolitics() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 lg:relative lg:mx-0 lg:w-full">
      <h1>Bama Politics</h1>
      <div className="divider"></div>
      <Image
        src="/bamapolitics_logo.png"
        className="float-left mx-auto rounded-2xl lg:ml-0 lg:mr-4"
        alt="Bama Politics Logo"
        width={258}
        height={170}
        priority
      />
      <h2>History & Information</h2>
      <p>
        <Link
          href="https://www.bamapolitics.com"
          target="_blank"
          title="Bama Politics"
          className="link"
        >
          BamaPolitics.com
        </Link>
        &nbsp;is a leading resource for voters in Alabama providing news,
        opinion articles, information on elected officials, information on
        counties/municipalities, legislation tracking and information including
        voting history for each bill, and election information.
      </p>
      <p>
        I started coding Bama Politics in October of 2018 as a personal side
        project. I found the lack of information available on the internet
        severely lacking in the weeks leading up to the November 2018 state-wide
        elections. There were plenty of sources for Alabama general news but
        once you got down to local elections the information was much harder to
        find.
      </p>
      <p>
        Today, Bama Politics boasts an impressive database of information such
        as:
      </p>
      <ul>
        <li>
          <p>
            Tracking{' '}
            <Link
              href="https://www.bamapolitics.com/alabama/profiles/"
              title="Alabama Political Profiles"
              target="_blank"
              className="link"
            >
              over 7,000 current
            </Link>
            , former and future politicians and candidates.
          </p>
        </li>
        <li>
          <p>
            Tracking elected officials in all{' '}
            <Link
              href="https://www.bamapolitics.com/alabama/counties/"
              title="Alabama Counties"
              target="_blank"
            >
              67 Alabama Counties
            </Link>{' '}
            and{' '}
            <Link
              href="https://www.bamapolitics.com/alabama/alabama-cities/"
              title="Alabama Cities"
              target="_blank"
            >
              461 Alabama Municipalities
            </Link>
            .
          </p>
        </li>
      </ul>
    </article>
  );
}
