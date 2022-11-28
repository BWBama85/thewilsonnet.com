import Link from 'next/link';
import Image from 'next/image';

export default function BaptistBoard() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 lg:relative lg:mx-0 lg:w-full">
      <h1>Baptist Board</h1>
      <div className="divider"></div>
      <Image
        src="/baptist_board_logo.png"
        className="mx-auto rounded-2xl"
        alt="Baptist Board Logo"
        width={320}
        height={39}
        priority
      />
      <h2>History & Information</h2>
      <p>
        <Link
          href="https://www.baptistboard.com/"
          title="Baptist Board"
          target="_blank"
          className="link"
        >
          BaptistBoard.com
        </Link>{' '}
        is an online community with over 16,000 members. In 2017, I negotiated
        the purchase of Baptist Board from the current owner and for the company
        Group Net, LLC of which I was the Webmaster and Chief Operating Officer.
      </p>
      <p>
        At the time of the purchase, Baptist Board was running on an outdated
        version of{' '}
        <Link
          href="https://www.vbulletin.com/"
          title="vBulletin"
          target="_blank"
          className="link"
        >
          vBulletin
        </Link>{' '}
        . As our company used XenForo for our online communities, I immediately
        started the process of moving from vBulletin's forum software to the
        XenForo forum software. In just over a month from the purchase of
        Baptist Board, the community was migrated to the XenForo forum software
        and our best practices for our online communities were put into place.
      </p>
      <ul>
        <li>
          <p>
            Converted over 8GB of MySQL data from the vBulletin platform to the
            XenForo platform while documenting and troubleshooting the migration
            locally before doing the final live migration.
          </p>
        </li>
        <li>
          <p>
            Worked with XenForo developers to migrate custom Invision plugin
            code to XenForo compatiable code.
          </p>
        </li>
        <li>
          <p>
            Worked with an XenForo designer to develop a custom theme that would
            bring a fresh and modern look to the website, while bringing a
            mobile first design to Baptist Board for the first time.
          </p>
        </li>
        <li>
          <p>
            Moved Baptist Board on to a dedicated web server powered by{' '}
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
            using 3rd party ad networks. Eventually would move to AdThrive and
            see our revenue increase by nearly 100 percent.
          </p>
        </li>
      </ul>
      <p>
        Through our ownership of Baptist Board, I implemented SEO best
        practices, engadged with the community to solicit feedback for new
        features, implemented the features, created a social network presence
        and began marketing, and worked with the volunteer administrators and
        moderators to provide new tools to ensure that the community remained a
        safe and friendly place for members.
      </p>
      <p>
        In 2018, I negotiated the sale of Baptist Board, along with Religious
        Forums.
      </p>
    </article>
  );
}
