import Link from 'next/link';

export default function Resume() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 xl:relative xl:mx-0 xl:w-full">
      <div className="max-w-full lg:max-w-xs">
        <h1>Richard Brent Wilson&apos;s Resume</h1>
      </div>
      <div className="divider"></div>

      <div className="flex flex-wrap gap-3">
        <span className="badge badge-md lg:badge-lg">
          brent@thewilsonnet.com
        </span>
        <span className="badge badge-md lg:badge-lg">256-316-9678</span>
        <span className="badge badge-md lg:badge-lg">Huntsville, AL</span>
      </div>

      <p>
        Dedicated, knowledgeable, and detail-oriented Webmaster and Entrepreneur
        with 20-years of experience in creating content and social websites
        while growing them into market leaders and disrupters.
      </p>

      <h2 id="work-experience">Work Experience</h2>

      <h3 id="bamapolitics">Owner, BamaPolitics.com</h3>

      <div className="flex flex-wrap gap-3">
        <span className="badge p-3">Huntsville, AL</span>
        <span className="badge p-3">October 2018 to Present</span>
      </div>

      <p>
        <Link
          href="projects/bamapolitics"
          title="Bama Politics"
          className="link"
        >
          BamaPolitics.com
        </Link>
        &nbsp;is a leading resource for voters in Alabama. As Founder, CEO and
        sole employee I am responsible for the full stack of development, growth
        and monetization of Bama Politics.
      </p>

      <ul>
        <li>
          <p className="font-bold">Linux System Administration</p>
          <p>
            Installed, configured, and maintained services such as DNS, NFS,
            Nginx, Samba, SSH, RPM, YUM, PHP, MariaDB, Redis, and Memcached
            utilizing the Centmin Mod LEMP stack. Secured the server using
            Cloudflare Zero Trust, closing all ports on the server and only
            allowing access via Cloudflare through the Cloudflared daemon.
            Optimized Nginx, PHP, and MariaDB for high performance with
            Cloudflare caching services. The server handles over 60,000+ unique
            visitors during peak traffic days.
          </p>
        </li>
        <li>
          <p className="font-bold">Back-end Development</p>
          <p>
            Using WordPress as a base, developed and expanded WordPress plugins
            to provide unique and needed features using PHP and JavaScript. Bama
            Politics&apos;s WordPress install handles over 60,000+ pages
            providing information on Alabama elections, elected officials and
            candidates, localities and legislation.
          </p>
        </li>
        <li>
          <p className="font-bold">Front-end Development</p>
          <p>
            Designed a custom theme from scratch, using the Bootstrap 5 CSS
            framework for a different look from traditional WordPress websites.
            Theme is designed for the specific needs of Bama Politics providing
            the ability to deliver a light weight and SEO friendly visual
            experience to visitors.
          </p>
        </li>
        <li>
          <p className="font-bold">Monetization & Analytics</p>
          <p>
            Work with Google Adsense and private advertisers to deliver optimal
            advertisements for all parties; Advertisers, visitors and myself.
            Utilize Google Analytics to track performance of website and to
            monitor data for improvements to SEO.
          </p>
        </li>
        <li>
          <p className="font-bold">Content Creation</p>
          <p>
            Take advantage of public and private APIs to create and update
            content that will be valuable to visitors of the website. Continues
            to work with elected officials, candidates and activists to provide
            an avenue to get their message out to visitors through our Opinion
            Editorals.
          </p>
        </li>
      </ul>

      <h3 id="freelancer">Freelancer</h3>
      <div className="flex flex-wrap gap-3">
        <span className="badge p-3">Huntsville, AL</span>
        <span className="badge p-3">Grapevine, TX</span>
        <span className="badge p-3">Chattanooga, TN</span>
        <span className="badge p-3">May 2003 to Present</span>
      </div>
      <p>
        Takes on client work related to Linux System Administration, WordPress
        and XenForo.
      </p>
      <ul>
        <li>
          <p className="font-bold">Linux System Administration</p>
          <p>
            Help clients setup, secure, optimize and maintain their Linux
            servers.
          </p>
        </li>
        <li>
          <p className="font-bold">WordPress</p>
          <p>
            Helps clients setup, secure, optimize, expand and maintain their
            WordPress powered web properties.
          </p>
        </li>
        <li>
          <p className="font-bold">XenForo</p>
          <p>
            Helps clients setup, secure, optimize, expand and maintain their
            XenForo online communities.
          </p>
        </li>
      </ul>

      <h3 id="groupnet">Chief Operating Officer, Group Net, LLC</h3>
      <div className="flex flex-wrap gap-3">
        <span className="badge p-3">Huntsville, AL</span>
        <span className="badge p-3">April 2012 to July 2022</span>
      </div>
      <p>
        Group Net, LLC owned and operated large online communities built on the
        XenForo community platform. As Chief Operating Officer for Group Net,
        LLC, I was responsible for the full stack of development, growth and
        monetization of our web properties. Group Net, LLC utilized the XenForo
        forum software to provide visitors a place to discuss their interests
        and hobbies.
      </p>

      <ul>
        <li>
          <p>
            <Link
              href="projects/christianforums"
              title="Christian Forums Project"
              className="link"
            >
              ChristianForums.com
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              href="projects/religiousforums"
              title="Religious Forums Project"
              className="link"
            >
              ReligiousForums.com
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              href="projects/baptistboard"
              title="Baptist Board Project"
              className="link"
            >
              BaptistBoard.com
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              href="projects/christianityboard"
              title="Christianity Board Project"
              className="link"
            >
              ChristianityBoard.com
            </Link>
          </p>
        </li>
      </ul>

      <h3 id="socialknowledge">
        Tier 1-3 Technical Support, Social Knowledge, LLC
      </h3>
      <div className="flex flex-wrap gap-3">
        <span className="badge p-3">Grapevine, TX</span>
        <span className="badge p-3">September 2011 to April 2012</span>
      </div>
      <ul>
        <li>
          <p className="font-bold">Tiered Technical Support Leader</p>
          <p>
            Served as a Tier 1, 2 and 3 Technical Support Representative,
            helping visitors and members resolve wide ranging issues on Social
            Knowledge websites consisting of 100,000+ visitors and members a
            month.
          </p>
        </li>
      </ul>

      <h3 id="mustangevolution">Owner, MustangEvolution.com</h3>
      <div className="flex flex-wrap gap-3">
        <span className="badge p-3">Huntsville, AL</span>
        <span className="badge p-3">May 2003 to April 2012</span>
      </div>
      <p>
        Founded{' '}
        <Link
          href="projects/mustangevolution"
          title="Mustang Evolution Project"
          className="link"
        >
          MustangEvolution.com
        </Link>
        , an online community for Ford Mustang enthusiasts, one of the largest
        Ford Mustang online communities in the world.
      </p>
      <ul>
        <li>
          <p className="font-bold">CEO at 17-years-old</p>
          <p>
            Discovered a strong interest in online communities as a Junior in
            High School. Turned my interest in computers and Ford Mustangs into
            a online community for people who wanted to network with other Ford
            Mustang owners locally and around the world.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <p className="font-bold">Disrupter & Leader</p>
          <p>
            Grew Mustang Evolution from zero users to tens of thousands of
            members, creating a vibrant online community for visitors to network
            and find help modifying and fixing their Ford Mustangs. Expanded
            from a simple online forum into a full CMS, managing credentialed
            automotive journalists covering the Ford Motor Company.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <p className="font-bold">Sold</p>
          <p>
            Negotiated the sale of 50 percent of Mustang Evolution to Social
            Knowledge, LLC, a leading social media company. Worked with Social
            Knowledge to continue to grow Mustang Evolution and other Social
            Knowledge properties. Negotiated the sale of the remaining 50
            percent of Mustang Evolution in April of 2012.
          </p>
        </li>
      </ul>
      <h3 id="dominos">Customer Service Representative, Domino&apos;s Pizza</h3>
      <div className="flex flex-wrap gap-3">
        <span className="badge p-3">Huntsville, AL</span>
        <span className="badge p-3">September 2001 to May 2007</span>
      </div>
      <ul>
        <li>
          <p className="font-bold">Customer Service</p>
          <p>
            Worked as a customer service representative, taking orders, handling
            issues with food orders and other tasks needed in a food service
            environment.
          </p>
        </li>
      </ul>

      <h2 id="education">Education</h2>
      <div className="flex flex-wrap gap-3">
        <span className="badge p-3">Huntsville, AL</span>
        <span className="badge p-3">September 2004 to May 2007</span>
      </div>
      <p>
        Attended Calhoun Community College and Athens State University. Left
        school to work full time on Mustangevolution.com.
      </p>
      {/*
          <h2 id="skills">Skill Sets</h2>
          <p>
            Click on any skill below to find out more about my experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn-sm btn-primary">WordPress</button>
            <button className="btn-sm btn-primary">PHP</button>
            <button className="btn-sm btn-primary">JavaScript</button>
          </div>
*/}
    </article>
  );
}
