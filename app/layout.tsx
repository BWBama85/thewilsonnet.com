import './globals.css'
import Nav from '../components/navbar'
import Foot from '../components/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Nav />
        <main id="page" className="container mx-auto w-full px-4">
          {children}
        </main>
        {/* <Foot /> */}
      </body>
    </html>
  )
}
