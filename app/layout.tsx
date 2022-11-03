import './globals.css'
import Nav from '../components/navbar'
import Foot from '../components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Brent Wilson - Huntsville, AL</title>
        <meta name="description" content="The Wilson Net was created by Brent Wilson to showcase his life." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="container mx-auto w-full">
          <Nav />
          <main id="page" className="px-2">
            {children}
          </main>
        </div>
      </body >
    </html >
  )
}
