import Link from 'next/link';
import Image from 'next/image';

export default function BamaPolitics() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 lg:relative lg:mx-0 lg:w-full">
      <h1>Christian Forums</h1>
      <div className="divider"></div>
      <Image
        src="/christianforums_logo.png"
        className="mx-auto rounded-2xl"
        alt="Christian Forums Logo"
        width={320}
        height={39}
        priority
      />
      <h2>History & Information</h2>
      <p>
        <Link
          href="https://www.christianforums.com/"
          title="Christian Forums"
          target="_blank"
          className="link"
        >
          ChristianForums.com
        </Link>{' '}
        is the largest online community for Christians in the world, started in
        the early 2000s. In 2015, I negotiated the purchase of Christian Forums
        from the current owner and for the company Group Net, LLC of which I was
        the Webmaster and Chief Operating Officer.
      </p>
      <p>
        At the time of the purchase, Christian Forums was running on an outdated
        version of{' '}
        <Link
          href="https://www.vbulletin.com/"
          title="vBulletin"
          target="_blank"
          className="link"
        >
          vBulletin
        </Link>{' '}
        and faced serious issues with reliability, as well as security conerns
        due to the now unsupported code base.
      </p>
      <p>
        Within three months of our purchase being finalized, I worked to move
        Christian Forums to a modern code base, powered by{' '}
        <Link
          href="https://xenforo.com/"
          title="XenForo"
          target="_blank"
          className="link"
        >
          XenForo
        </Link>
        .
      </p>
      <ul>
        <li>
          <p>
            Converted over 60GB of MySQL data from the vBulletin platform to the
            XenForo platform while documenting and troubleshooting the migration
            from vBulletin to XenForo locally before doing the final live
            migration.
          </p>
        </li>
        <li>
          <p>
            Worked with XenForo developers to migrate custom vBulletin plugin
            code to XenForo compatiable code.
          </p>
        </li>
        <li>
          <p>
            Worked with an XenForo designer to develop a custom theme that would
            bring a fresh and modern look to the website, while bringing a
            mobile first design to Christian Forums for the first time.
          </p>
        </li>
        <li>
          <p>
            Moved Christian Forums on to a dedicated web server powered by{' '}
            <Link
              href="https://www.centminmod.com/"
              title="CentminMod"
              target="_blank"
              className="link"
            >
              CentminMod
            </Link>
            . Optimized specifically for high PHP and MySQL throughput.
          </p>
        </li>
        <li>
          <p>
            Developed a monetization platform on{' '}
            <Link
              href="https://admanager.google.com/home/"
              title="Google Ad Manager"
              target="_blank"
              className="link"
            >
              Google Ad Manager
            </Link>{' '}
            using 3rd party adnetworks. Eventually would move to AdThrive and
            see our revenue increase by nearly 100 percent.
          </p>
        </li>
      </ul>
      <p>
        Through our ownership of Christian Forums, I implemented SEO best
        practices, engadged with the community to solicit feedback for new
        features, implemented the features, created a social network presence
        and began marketing, and worked with the volunteer administrators and
        moderators to provide new tools to ensure that the community remained a
        safe and friendly place for members.
      </p>
      <p>
        In July of 2022, I negotiated the sale of Christian Forums, along with
        ChristianityBoard.com.
      </p>
    </article>
  );
}
