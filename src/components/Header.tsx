import { logos } from '@/utils/images'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mx-auto pt-16">
      <Image
        className="mx-auto"
        width={203}
        height={52}
        src={logos.logo}
        alt="Scratch Logo"
      />
    </header>
  )
}
