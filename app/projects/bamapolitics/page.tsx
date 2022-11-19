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
        The website is built on WordPress and includes custom plugins coded by
        me to provide a unique experience for visitors. For example, a visitor
        can register on BamaPolitics and follow a page and receive an email when
        that page is updated, keeping visitors engaged with what is happening in
        political areas that concern them.
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
        <li>
          <p>
            Tracking and storing legislative bills from{' '}
            <Link
              href="https://www.bamapolitics.com/alabama/bills/"
              title="Alabama Legislative Bills"
              target="_blank"
            >
              dating back to 2010.
            </Link>
          </p>
        </li>
        <li>
          <p>
            Covering elections and their results{' '}
            <Link
              href="https://www.bamapolitics.com/alabama/alabama-elections/"
              title="Alabama Elections"
              target="_blank"
            >
              dating back to 2006.
            </Link>
          </p>
        </li>
      </ul>
      <p>
        Having all that data is nice, but making sure it is displayed in a user
        friendly way is important as well.
      </p>
      <p>
        Great attention was paid to the structure of the website. Examples
        include:
      </p>
      <ul>
        <li>
          <p>Breaking down elected leaders by the type of office they hold.</p>
          <ul>
            <li>
              <p>
                View all{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/#alabama-statewide-officials"
                  title="Alabama Statewide Officials"
                  target="_blank"
                >
                  Statewide Officials
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/#alabama-us-senators"
                  title="Alabama U.S. Senators"
                  target="_blank"
                >
                  Alabama U.S. Senators
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/#alabama-supreme-court"
                  title="Alabama Supreme Court"
                  target="_blank"
                >
                  Alabama Supreme Court
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/#alabama-board-of-education"
                  title="Alabama Board of Education"
                  target="_blank"
                >
                  Alabama Board of Education
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/#alabama-us-representatives"
                  title="Alabama U.S. Representatives"
                  target="_blank"
                >
                  Alabama U.S. Representatives
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/alabama-state-senators/"
                  title="Alabama State Senators"
                  target="_blank"
                >
                  Alabama State Senators
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/alabama-state-representatives/"
                  title="Alabama State Represenatives"
                  target="_blank"
                >
                  Alabama State Represenatives
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/list-of-alabama-sheriffs/"
                  title="Alabama County Sheriffs"
                  target="_blank"
                >
                  Alabama County Sheriffs
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/list-of-alabama-probate-judges/"
                  title="Alabama Probate Judges"
                  target="_blank"
                >
                  Alabama Probate Judges
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/list-of-alabama-mayors/"
                  title="Alabama Mayors"
                  target="_blank"
                >
                  Alabama Mayors
                </Link>
              </p>
            </li>
            <li>
              <p>
                View the{' '}
                <Link
                  href="https://www.bamapolitics.com/alabama/list-of-alabama-city-council-members/"
                  title="Alabama Council Members for Municipalities"
                  target="_blank"
                >
                  Alabama Council Members for Municipalities
                </Link>
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        What started out as just a side project has turned into an sustainable
        second income for me while also allowing me to make an impact in my
        state. On peak traffic days, during the legsilative session and during
        elections, the website reaches over 60,000 unique visitors a day with
        income reaching up to $600 a day with adsense.{' '}
      </p>
      <p>
        The site runs on a $54 a month OVH server running the{' '}
        <Link
          href="https://www.centminmod.com"
          title="CentminMod"
          target="_blank"
        >
          CentminMod server stack
        </Link>
        .
      </p>
    </article>
  );
}
