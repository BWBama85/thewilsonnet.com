'use client'
import {
  Link,
  Mask,
  Hero,
  Button,
  Divider
} from 'react-daisyui'
import {
  FaGithub,
  FaGit,
  FaLinkedin,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa'

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <Mask
        src="/me.png"
        variant="squircle"
        className="w-72 h-full mx-auto"
        alt="Brent Wilson"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold my-3">Brent Wilson</h1>
        <p className="">
          Webmaster, technology fanatic, owned by my cat Astro.
        </p>
        <div className="flex gap-4 justify-center my-3 text-2xl">
          <Link href="https://github.com/BWBama85" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://git.thewilsonnet.com/" target="_blank">
            <FaGit />
          </Link>
          <Link href="https://www.linkedin.com/in/brent-wilson-3a1463159/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link href="https://www.facebook.com/brentwilson85" target="_blank">
            <FaFacebook />
          </Link>
          <Link href='https://twitter.com/brentwilson85' target="_blank">
            <FaTwitter />
          </Link>
        </div>
      </div>
      <Divider />
      <Hero>
        <Hero.Overlay />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="py-6">
              A Webmaster since I was 17-years-old, I have built and managed some of the largest community driven websites on the internet.
            </p>
            <Button color="primary">Learn More</Button>
          </div>
        </Hero.Content>
      </Hero>
      <Divider />
      <Hero>
        <Hero.Overlay />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="py-6">
              The only &quot;job&quot; I have ever had was at Domino&apos;s Pizza. Since I left that job in 2007 I have had projects.
            </p>
            <Button color="primary">View My Projects</Button>
          </div>
        </Hero.Content>
      </Hero>
      <Divider />
      <Hero>
        <Hero.Overlay />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold">Services</h2>
            <p className="py-6">
              I love what I do and so I have no problem working on the side for some extra money. If you have a problem or idea, let me solve it or bring it to life.
            </p>
            <Button color="primary">View My Services</Button>
          </div>
        </Hero.Content>
      </Hero>
      <Divider />
    </div >
  )
}
