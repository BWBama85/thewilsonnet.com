'use client'

import './globals.css'
import Image from 'next/image';
import Nav from '../components/navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Brent Wilson - Huntsville, AL</title>
        <meta name="description" content="The Wilson Net was created by Brent Wilson to showcase his life." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Nav />
        <main id="page" className="container mx-auto w-full px-4">
          {children}
        </main>
        <footer className="footer p-10 bg-neutral text-neutral-content md:justify-evenly justify-center">
          <div>
            <Image
              className="mask mask-squircle mx-auto"
              alt="Brent Wilson"
              src="/me.png"
              width={120}
              height={120}
            />
            <p className="w-32 text-center">
              <span className="font-bold"> The Wilson Net</span>
              <br />
              Huntsville, AL
            </p>
          </div>

          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Web Hosting</a>
            <a className="link link-hover">WordPress</a>
            <a className="link link-hover">XenForo</a>
            <a className="link link-hover">Other</a>
          </div>
          <div>
            <span className="footer-title">About Me</span>
            <a className="link link-hover">Biography</a>
            <a className="link link-hover">Resume</a>
            <a className="link link-hover">Projects</a>
            <a className="link link-hover">Services</a>
          </div>
          <div>
            <span className="footer-title">Misc</span>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">About This Website</a>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>
        </footer>
      </body >
    </html >
  )
}
