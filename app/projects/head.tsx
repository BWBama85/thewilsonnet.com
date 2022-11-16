import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../next-seo.config';
import type { NextSeoProps } from 'next-seo';

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'Brent Wilson\'s Projects',
    description: 'A look at the work and hobby related projects Brent Wilson has completed.',
    titleTemplate: '%s',
  };
  return (
    <NextSeo {...updateMeta} useAppDir={true} />
  )
}