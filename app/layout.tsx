import './globals.css'
import Nav from './navbar'
import Foot from './footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Brent Wilson - Huntsville, AL</title>
        <meta name="description" content="The Wilson Net was created by Brent Wilson to showcase his life." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="container mx-auto w-full">
          <Nav />
          <div id="page" className="px-4">
            {children}
          </div>
          <Foot />
        </div>
      </body >
    </html >
  )
}
