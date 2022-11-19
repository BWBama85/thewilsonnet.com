import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../next-seo.config';
import type { NextSeoProps } from 'next-seo';

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'About Brent Wilson',
    description:
      'A bit of information about Brent Wilson who lives in Huntsville, AL',
    titleTemplate: '%s',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
