import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 xl:relative xl:mx-0 xl:w-full">
      <div className="max-w-full lg:max-w-xs">
        <h1>Projects</h1>
      </div>
      <div className="divider"></div>
      <h2>Paid Projects</h2>
      <div className="flex flex-wrap items-stretch gap-4">
        <div className="not-prose card compact mx-auto w-80 bg-base-100 shadow-xl md:mx-0 md:grow">
          <figure className="mx-auto mt-4 h-20 px-4">
            <Image
              src="/bamapolitics_logo.png"
              alt="Mustang Evolution logo"
              width={128}
              height={84}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">BamaPolitics.com</h3>
            <p>
              Current Owner of Bama Politics, a leading resource for voters in
              Alabama.
            </p>
            <div className="card-actions">
              <Link
                className="btn-primary btn"
                href="/projects/bamapolitics"
                title="Project Bama Politics"
              >
                View
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose card compact mx-auto w-80 bg-base-100 shadow-xl md:mx-0 md:grow">
          <figure className="mx-auto mt-4 h-20 px-4">
            <Image
              src="/christianforums_logo_text.png"
              alt="Christian Forums logo"
              width={256}
              height={36}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">ChristianForums.com</h3>
            <p>
              Webmaster/COO of Christian Forums & other properties owned by
              Group Net, LLC until July 2022.
            </p>
            <div className="card-actions">
              <Link
                className="btn-primary btn"
                href="/projects/christianforums"
                title="Project Christian Forums"
              >
                View
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose card compact mx-auto w-80 bg-base-100 shadow-xl md:mx-0 md:grow">
          <figure className="mx-auto mt-4 h-20 px-4">
            <Image
              src="/religious_forums_logo.png"
              alt="Religious Forums logo"
              width={256}
              height={36}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">ReligiousForums.com</h3>
            <p>
              Webmaster/COO of Religious Forums & other properties owned by
              Group Net, LLC until July 2022.
            </p>
            <div className="card-actions">
              <Link
                className="btn-primary btn"
                href="/projects/religiousforums"
                title="Project Religious Forums"
              >
                View
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose card compact mx-auto w-80 bg-base-100 shadow-xl md:mx-0 md:grow">
          <figure className="mx-auto mt-4 h-20 px-4">
            <Image
              src="/baptist_board_logo.png"
              alt="Baptist Board logo"
              width={256}
              height={36}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">BaptistBoard.com</h3>
            <p>
              Webmaster/COO of Baptist Board & other properties owned by Group
              Net, LLC until July 2022.
            </p>
            <div className="card-actions">
              <Link
                className="btn-primary btn"
                href="/projects/baptistboard"
                title="Project Baptist Board"
              >
                View
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose card compact mx-auto w-80 bg-base-100 shadow-xl md:mx-0 md:grow">
          <figure className="mx-auto mt-4 h-20 px-4">
            <Image
              src="/christianityboard_logo.png"
              alt="Christianity Board logo"
              width={256}
              height={36}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">ChristianityBoard.com</h3>
            <p>
              Webmaster/COO of Christianity Board & other properties owned by
              Group Net, LLC until July 2022.
            </p>
            <div className="card-actions">
              <Link
                className="btn-primary btn"
                href="/projects/christianityboard"
                title="Project Christianity Board"
              >
                View
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose card compact mx-auto w-80 bg-base-100 shadow-xl md:mx-0 md:grow">
          <figure className="mx-auto mt-4 h-20 px-4">
            <Image
              src="/mustangevolution_logo.png"
              alt="Mustang Evolution logo"
              width={192}
              height={39}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">MustangEvolution.com</h3>
            <p>
              Created Mustang Evolution, a leading Ford Mustang community, in
              2003. Negotiated sale of website in 2012.
            </p>
            <div className="card-actions">
              <Link
                className="btn-primary btn"
                href="/projects/mustangevolution"
                title="Project Mustang Evolution"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
