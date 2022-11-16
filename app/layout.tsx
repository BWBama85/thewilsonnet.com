import './globals.css'
import Sidebar from './sidebar'
import Nav from './navbar'
import { NextSeo } from 'next-seo';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <NextSeo
          useAppDir={true}
          titleTemplate="%s"
        />
      </head>
      <body>
        <main
          id="page"
          className="
            relative
            flex 
            flex-col 
            container
            mx-auto
            mb-4
            gap-3
            xl:flex-row
            xl:justify-center 
            xl:gap-6 
            xl:my-14 
            xl:w-full
          "
        >
          <Nav />
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  )
}
