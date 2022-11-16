// next-seo.config.ts
import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'The Wilson Net built by Brent Wilson',
  description:
    'The Wilson Net is a place for Brent Wilson to showcase his life.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.thewilsonnet.com',
    title: 'The Wilson Net built by Brent Wilson',
    description:
      'The Wilson Net is a place for Brent Wilson to showcase his life.',
    images: [
      {
        url: 'https://www.test.ie/og-image-a-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt A',
        type: 'image/jpeg',
        secureUrl: 'https://www.test.ie/secure-og-image-a-01.jpg',
      },
    ],
    siteName: 'The Wilson Net',
  },
  twitter: {
    handle: '@brentwilson85',
    cardType: 'summary_large_image',
  },
};
