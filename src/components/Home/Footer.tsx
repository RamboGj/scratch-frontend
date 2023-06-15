import { socials } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const socialsList = [
    { image: socials.instagram, href: '#' },
    { image: socials.twitter, href: '#' },
    { image: socials.linkedin, href: '#' },
    { image: socials.tiktok, href: '#' },
  ]

  return (
    <footer className="max-w-screen w-full bg-[#010E09] py-14 lg:py-[115px] px-8 lg:pl-[120px]">
      <div className="w-[300px] lg:w-[340px] flex flex-col items-start">
        <h1 className="text-[2.25rem] lg:text-[3.125rem] text-white leading-none font-medium">
          Golf itch? <span className="text-blue500">Scratch</span> it.
        </h1>
        <div className="mt-12 flex items-stretch gap-5">
          <Link href={'#'} target="_blank">
            <Image src={socials.appleStore} alt="Apple Store" />
          </Link>
          <Link href={'#'} target="_blank">
            <Image src={socials.googlePlay} alt="Google Play" />
          </Link>
        </div>
        <div className="mt-12">
          <ul className="flex gap-4 items-center">
            {socialsList.map((social) => {
              return (
                <li
                  key={social.image}
                  className="bg-[#1A2622] rounded-full p-2"
                >
                  <Link href={social.href} target="_blank">
                    <Image src={social.image} alt="Instagram Logo" />
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link
            href="#"
            target="_blank"
            className="flex mt-10 text-sm text-[#595959] font-medium p-2 lg:p-0"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
