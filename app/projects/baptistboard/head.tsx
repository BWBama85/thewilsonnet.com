import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';
import type { NextSeoProps } from 'next-seo';

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'Project: BaptistBoard.com',
    description: 'Learn about my BaptistBoard.com project.',
    titleTemplate: '%s',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
