import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';
import type { NextSeoProps } from 'next-seo';

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'Richard Brent Wilson\'s Resume',
    description: 'A detailed resume for Richard Brent Wilson',
    titleTemplate: '%s',
  };
  return (
    <NextSeo {...updateMeta} useAppDir={true} />
  )
}