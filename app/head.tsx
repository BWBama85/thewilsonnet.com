import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from './next-seo.config';
import type { NextSeoProps } from 'next-seo';

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'The Wilson Net by Brent Wilson',
    description:
      'The Wilson Net is a place for Brent Wilson to showcase his life.',
    titleTemplate: '%s',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
