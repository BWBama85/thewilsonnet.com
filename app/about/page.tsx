import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 xl:relative xl:mx-0 xl:w-full">

      <h1 className="xl:mt-20">About Brent Wilson</h1>
      <div className="divider"></div>
      <div className="xl:flex">
        <Image
          src="/kaylaandi_crop.jpg"
          className="mx-auto rounded-2xl xl:mx-0"
          alt="Kayla and Brent"
          width={200}
          height={200}
          priority
        />
        <div className="my-3 px-3">
          <p>
            Brent Wilson is the owner of <Link title="Bama Politics" target="_blank" href="https://www.bamapolitics.com/">BamaPolitics.com</Link>.
            My experience with creating, managing and growing websites
            started in 2003 when I created <Link title="Mustang Evolution" target="_blank" href="https://www.mustangevolution.com">MustangEvolution.com</Link>.

          </p>
          <p>
            I&apos;ve been tinkering with &quot;internet stuff&quot; since the 90s.
          </p>
        </div>
      </div>

    </article >
  )
}