'use client'

import { Footer, Mask } from 'react-daisyui'

export default function Foot() {

  return (
    <Footer className="p-10 bg-neutral text-neutral-content justify-center md:justify-evenly">
      <div>
        <Mask
          src="/me.png"
          variant="squircle"
          className="w-24 h-full"
          alt="Brent Wilson"
        />
        <p className="w-32 ">
          <span className="font-bold"> The Wilson Net</span>
          <br />
          Huntsville, AL
        </p>
      </div>

      <div>
        <Footer.Title>Services</Footer.Title>
        <a className="link link-hover">Web Hosting</a>
        <a className="link link-hover">WordPress</a>
        <a className="link link-hover">XenForo</a>
        <a className="link link-hover">Other</a>
      </div>
      <div>
        <Footer.Title>About Me</Footer.Title>
        <a className="link link-hover">Biography</a>
        <a className="link link-hover">Resume</a>
        <a className="link link-hover">Projects</a>
        <a className="link link-hover">Services</a>
      </div>
      <div>
        <Footer.Title>Misc</Footer.Title>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">About This Website</a>
        <a className="link link-hover">Terms of Use</a>
        <a className="link link-hover">Privacy Policy</a>
      </div>
    </Footer>
  )
}